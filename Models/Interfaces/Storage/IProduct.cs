using System;
using System.Collections.Generic;
using System.Text;

namespace Models.Interfaces.Storage
{
    public interface IProduct : IDBEntity
    {
        String ProductName { get; set; }
        Decimal Price { get; set; }
    }
}
