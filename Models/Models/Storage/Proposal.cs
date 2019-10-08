using Models.Interfaces.Storage;
using System;
using System.Collections.Generic;
using System.Text;

namespace Models.Models.Storage
{
    public class Proposal : IProposal<Product>
    {
        public Product Product { get; set; }
        public int Quantity { get; set; }
        public int Id { get; set; }
    }
}
