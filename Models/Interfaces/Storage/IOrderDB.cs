using System;
using System.Collections.Generic;
using System.Text;

namespace Models.Interfaces.Storage
{
    public interface IOrderDB : IDBEntity
    {
        String Header { get; set; }
        DateTimeOffset CreationMoment { get; set; }
        OrderStatus Status { get; set; }
        IList<IProposalDB> Proposals { get; set; }
    }
}

  
