using System;
using System.Collections.Generic;
using System.Text;

namespace Models.Interfaces.Storage
{
    public interface IOrderDetails<out TProposalList, out TProposal, out TProduct>
        :IDBEntity
        where TProposalList : IList<TProposal>
        where TProposal : IProposal<IProduct>
    {
        TProposalList Proposals { get; }
    }
}
