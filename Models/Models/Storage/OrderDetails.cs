using Models.Interfaces;
using Models.Interfaces.Storage;
using System;
using System.Collections.Generic;
using System.Text;

namespace Models.Models.Storage
{
    public class OrderDetails : IOrderDetails<List<Proposal>, Proposal, Product> 
    {
        public int Id { get; set; }
        public List<Proposal> Proposals { get; set; }
    }
}
