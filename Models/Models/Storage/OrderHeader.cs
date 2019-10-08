using Models.Interfaces;
using Models.Interfaces.Storage;
using System;
using System.Collections.Generic;
using System.Text;

namespace Models.Models.Storage
{
    public class OrderHeader : IOrderHeader
    {
        public int Id { get; set; }
        public string OrderName { get; set; }
        public DateTimeOffset CreationMoment { get; set; }
        public OrderStatus Status { get; set; }
    }
}
