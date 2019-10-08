using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace Storage
{
    public abstract class SeededStorageFactory : StorageFactory
    {
        public SeededStorageFactory(DbContextOptions dbContextOptions)
            :base(dbContextOptions)
        { }
        public override async Task<OrdersContext> BuildAsync(CancellationToken cancel = default)
        {
            var context = new OrdersContext(_dbContextOptions);
            if (await context.Database.EnsureCreatedAsync(cancel))
            {
                Seed(context);
                await context.SaveChangesAsync(cancel);
            }
            return context;
        }
        private void Seed(OrdersContext context)
        {
            StorageSeeder.GenerateSeed().ForEach(o => context.Orders.Add(o));
        }
    }
}
