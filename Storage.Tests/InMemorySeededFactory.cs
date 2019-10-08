using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace Storage.Tests
{
    public class InMemorySeededFactory : SeededStorageFactory
    {
            public InMemorySeededFactory(String databaseName)
                : base(new DbContextOptionsBuilder<OrdersContext>()
                                   .UseInMemoryDatabase(databaseName, null)
                                   .EnableSensitiveDataLogging(true)
                                   .Options)
            { }
        }
}
