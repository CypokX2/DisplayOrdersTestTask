using System;
using System.Collections.Generic;
using System.Text;

namespace Models.Interfaces.Storage
{
    public interface IOrder<TProposal> : IDBEntity where TProposal : IProposal
    {
        IOrderHeader Header { get; set; }
        IOrderDetails<TProposal> Details { get; set; }
    }
}

  
