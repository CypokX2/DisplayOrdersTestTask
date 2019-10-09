using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Mime;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using Models.Interfaces.Storage;
using Models.Models.Storage;
using Storage;

namespace BackEnd.Controllers
{
    [ApiController]
    [Produces(MediaTypeNames.Application.Json)]
    [Consumes(MediaTypeNames.Application.Json)]
    public class OrdersController : ControllerBase
    {
        private readonly ILogger<OrdersController> _logger;
        private readonly IStorageFactory _storageFactory;
        public OrdersController(ILogger<OrdersController> logger,
                                IStorageFactory storageFactory)
        {
            _logger = logger;
            _storageFactory = storageFactory;
        }

        
        [HttpGet]
        [Route(Routes.Orders.GetBreif)]
        [ProducesResponseType(StatusCodes.Status200OK)]
        public async Task<ActionResult<List<OrderHeader>>> GetHeaders()
        {

            //do not forget to test some spinner if there is long delay
            // await Task.delay(1_000);          
            using (var storage = await _storageFactory.BuildAsync())
            {                
                return await storage.Headers.ToListAsync();
            }
        }        

        [Route(Routes.Orders.GetDetalized + "/{orderID}")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        public async Task<ActionResult<Order>> GetDetails([FromRoute] Int32 orderID)
        {
            using (var storage = await _storageFactory.BuildAsync())
            {
                 var result = await storage.Orders.Include(o => o.Details)
                                                     .ThenInclude(d => d.Proposals)
                                                        .ThenInclude(p => p.Product)
                                                    .Include(o => o.Header)
                                            .Where(o => o.Id == orderID)
                                            .SingleOrDefaultAsync();
                 if (result == null)
                     return BadRequest();
                 else
                     return Ok(result);               
            }
        }

        [HttpPut("{newOrder}")]
        [Route(Routes.Orders.PutOrder)]
        [ProducesResponseType(StatusCodes.Status201Created)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        public async Task<ActionResult<Order>> PutOrder([FromBody] Order newOrder)
        {
            if (newOrder.Id != 0)
                return BadRequest();
    
            using (var storage = await _storageFactory.BuildAsync())
            {
                var set = storage.Orders.Add(newOrder);
                try
                {
                    var updated = await storage.SaveChangesAsync();
                    if(updated == 1)
                        return Ok();
                }
                catch (DbUpdateException)
                { }
                return BadRequest();
            }
        }

    }
}
