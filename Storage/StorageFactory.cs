using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Diagnostics;
using Models.Models.Storage;
using System;
using System.Collections.Generic;
using System.Diagnostics.CodeAnalysis;
using System.Linq;
using System.Linq.Expressions;
using System.Threading;
using System.Threading.Tasks;

namespace Storage
{
    public abstract class StorageFactory : IStorageFactory
    {
        protected DbContextOptions _dbContextOptions;

        public StorageFactory(DbContextOptions dbContextOptions)
        {
            _dbContextOptions = dbContextOptions;
        }

        public virtual async Task<OrdersContext> BuildAsync(CancellationToken cancel = default) 
        {
            var context = new OrdersContext(_dbContextOptions);
            await context.Database.EnsureCreatedAsync(cancel);
            return context;
        }
    }
}
