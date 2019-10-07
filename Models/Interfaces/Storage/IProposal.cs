using System;
using System.Collections.Generic;
using System.Text;

namespace Models.Interfaces.Storage
{
    public interface IProposal :IDBEntity
    {
        IProduct Product { get; set; }
        Int32 Quantity { get; set; }
    }
}
