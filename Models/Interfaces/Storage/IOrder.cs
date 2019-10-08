using System;
using System.Collections.Generic;
using System.Text;

namespace Models.Interfaces.Storage
{
    public interface IOrder<out THeader, out TOrderDetails, out TProposalList, out TProposal, out TProduct> : IDBEntity 
        where THeader : IOrderHeader 
        where TOrderDetails : IOrderDetails<TProposalList, TProposal, TProduct>
        where TProposalList : IList<TProposal>
        where TProposal : IProposal<IProduct>

    {
        THeader Header { get; }
        TOrderDetails Details { get;  }
    }
}

  
