using Models.Interfaces;
using Models.Interfaces.Storage;
using System;
using System.Collections.Generic;
using System.Text;

namespace Models.Models.Storage
{
    public class OrderDB : IOrderDB
    {
        public IList<IProposalDB> Proposals { get; set; }
        public string Header { get; set; }
        public DateTimeOffset CreationMoment { get; set; }
        public OrderStatus Status { get; set; }
        public int Id { get; set; }



    }
}
