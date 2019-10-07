using System;
using System.Collections.Generic;
using System.Text;

namespace Models.Interfaces.Storage
{
    public interface IOrderHeader
    {
        String OrderName { get; set; }
        DateTimeOffset CreationMoment { get; set; }
        OrderStatus Status { get; set; }
    }
}
