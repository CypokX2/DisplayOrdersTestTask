using System;
using System.Collections.Generic;
using System.Text;

namespace Models.Interfaces.Storage
{
    public interface IProposalDB :IDBEntity
    {
        IProductdB Product { get; set; }
        Int32 Quantity { get; set; }
    }
}
