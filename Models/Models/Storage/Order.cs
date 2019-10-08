using Models.Interfaces;
using Models.Interfaces.Storage;
using System;
using System.Collections.Generic;
using System.Text;

namespace Models.Models.Storage
{
    public class Order : IOrder<OrderHeader, OrderDetails, List<Proposal>, Proposal, Product> 
    {        
        public int Id { get; set; }
        public OrderHeader Header { get; set; }
        public OrderDetails Details { get; set; }
    }
}
