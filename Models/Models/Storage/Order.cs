using Models.Interfaces;
using Models.Interfaces.Storage;
using System;
using System.Collections.Generic;
using System.Text;

namespace Models.Models.Storage
{
    public class Order : IOrder<Proposal> 
    {        
        public int Id { get; set; }
        public IOrderHeader Header { get; set; }
        public IOrderDetails<Proposal> Details { get; set; }
    }
}
