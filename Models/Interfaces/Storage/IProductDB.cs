using System;
using System.Collections.Generic;
using System.Text;

namespace Models.Interfaces.Storage
{
    public interface IProductdB : IDBEntity
    {
        String ProductName { get; set; }
        Decimal Price { get; set; }
    }
}
