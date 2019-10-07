using Models.Interfaces.Storage;
using System;
using System.Collections.Generic;
using System.Text;

namespace Models.Models.Storage
{
    public class ProductDB : IProductdB
    {
        public string ProductName { get; set; }
        public decimal Price { get; set; }
        public int Id { get; set; }
    }
}
