using Models.Interfaces;
using Models.Interfaces.Storage;
using System;
using System.Collections.Generic;
using System.Text;

namespace Models.Models.Storage
{
    public class OrderDetails : IOrderDetails<Proposal> 
    {
        public IList<Proposal> Proposals { get; set; }
    }
}
