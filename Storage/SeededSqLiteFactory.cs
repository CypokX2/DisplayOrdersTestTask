using Microsoft.EntityFrameworkCore;
using Models.Models.Storage;
using System;
using System.Collections.Generic;
using System.Diagnostics.CodeAnalysis;
using System.Linq.Expressions;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace Storage
{
    public class SeededSqLiteFactory : SeededStorageFactory
    {
        public SeededSqLiteFactory(String connectionString)
            : base (new DbContextOptionsBuilder<OrdersContext>()
                               .UseSqlite(connectionString, null)
                               .EnableSensitiveDataLogging(true)
                               //.ConfigureWarnings(warnings => warnings.Throw(RelationalEventId.QueryClientEvaluationWarning))
                               // there is no more ClientEvaluationWarning in EFCore 3.0. 
                               // At least client evaluation is restricted by default (from 23.09.2019)
                               .Options)

        { }
    }
}
