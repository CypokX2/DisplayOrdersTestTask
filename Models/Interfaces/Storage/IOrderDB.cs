using System;
using System.Collections.Generic;
using System.Text;

namespace Models.Interfaces.Storage
{
    public interface IOrderDB<TProposal> : IDBEntity where TProposal : IProposalDB
    {
        String Header { get; set; }
        DateTimeOffset CreationMoment { get; set; }
        OrderStatus Status { get; set; }
        IList<TProposal> Proposals { get; set; }
    }
}

  
