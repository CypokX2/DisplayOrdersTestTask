using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using Xunit;
using System.Linq;
using Microsoft.EntityFrameworkCore;
using Models.Interfaces.Storage;
using Models.Models.Storage;

namespace Storage.Tests
{
    public class OrdersContextTests
    {
        [Fact]
        public async Task DatabaseAbleToCreate()
        {
            var factory = new InMemorySeededFactory("db_name");
            using (var context = await factory.BuildAsync())
            {
                Assert.NotNull(context);
                Assert.NotEmpty(context.Products);
                Assert.NotEmpty(context.Headers);
                Assert.NotEmpty(context.Orders);
            }
        }
        [Fact]
        public async Task NestedEntitiesAreNotDuplicated()
        {
            var factory = new InMemorySeededFactory("db_name");
            using (var context = await factory.BuildAsync())
            {
                Assert.NotNull(context);
                Assert.NotEmpty(context.Products);
                Assert.NotEmpty(context.Headers);
                Assert.NotEmpty(context.Orders);

                var products = context.Orders.SelectMany(o => o.Details.Proposals.Select(p => p.Product))
                                             .ToList()
                                             .Distinct(EqualityComparer<IProduct>.GetInstance((pr0, pr1) => pr0.Id == pr1.Id))
                                             .OrderBy(p => p.Id);

                Assert.Equal(context.Products.OrderBy(p => p.Id), products);

                var headers = context.Orders.Select(o => o.Header)
                                            .OrderBy(h => h.Id);

                Assert.Equal(context.Headers.OrderBy(h => h.Id), headers);

            }
        }
        [Fact]
        public async Task ProductIsNotDeletingByCascade()
        {
            var factory = new InMemorySeededFactory("db_name");
            using (var context = await factory.BuildAsync())
            {
                var countProducts = context.Products.CountAsync();
                var countOrders =  context.Orders.CountAsync();
                await Task.WhenAll(countProducts, countOrders);

                Assert.NotEqual(0, countOrders.GetAwaiter().GetResult());

                await context.Orders.ForEachAsync(o => context.Remove(o));
                await context.SaveChangesAsync();

                var productsCountAfterDeletion = await context.Products.CountAsync();
                var ordersCountAfterDeletion = await context.Orders.CountAsync();

                Assert.Equal(countProducts.GetAwaiter().GetResult(), productsCountAfterDeletion);                
                Assert.Equal(0, ordersCountAfterDeletion);
            }
        }
    }
}
