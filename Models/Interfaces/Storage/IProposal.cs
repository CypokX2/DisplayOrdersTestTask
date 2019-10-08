using System;
using System.Collections.Generic;
using System.Text;

namespace Models.Interfaces.Storage
{
    public interface IProposal<out TProduct> : IDBEntity 
        where TProduct : IProduct
    {
        TProduct Product { get; }
        Int32 Quantity { get; set; }
    }
}
