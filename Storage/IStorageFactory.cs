using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Diagnostics.CodeAnalysis;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace Storage
{
    public interface IStorageFactory
    {
        Task<OrdersContext> BuildAsync(CancellationToken cancel = default);       
    }
}
