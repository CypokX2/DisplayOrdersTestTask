using System;
using System.Collections.Generic;
using System.Text;

namespace Models.Interfaces.Storage
{
    public interface IOrderDetails<TProposal> where TProposal : IProposal
    {        
        IList<TProposal> Proposals { get; set; }
    }
}
