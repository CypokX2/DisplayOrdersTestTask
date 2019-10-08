using Models.Models.Storage;
using System;
using System.Collections.Generic;
using System.Text;

namespace Storage
{
    public class StorageSeeder
    {
        public static List<Order> GenerateSeed()
        {
            var genProduct = new Func<String, Decimal, Product>((name, price) =>
            new Product()
            {
                ProductName = name,
                Price = price
            });
            var genProposal = new Func<Product, Int32, Proposal>((p, q) =>
            new Proposal()
            {
                Product = p,
                Quantity = q
            });

            var p1 = genProduct("Product#1", 100);
            var p2 = genProduct("Product#2", 10);
            var p3 = genProduct("Product#3", 5);
            var p4 = genProduct("Product#4", 10);

            var o1 = new Order()
            {
                Header = new OrderHeader()
                {
                    OrderName = "Order#1",
                    CreationMoment = DateTimeOffset.UtcNow
                                                   .AddHours(-1)
                                                   .AddMinutes(-1),
                    Status = Models.Interfaces.OrderStatus.InProgress,
                },
                Details = new OrderDetails()
                {
                    Proposals = new List<Proposal>()
                    {
                        genProposal(p1, 1),
                        genProposal(p2, 5),
                        genProposal(p3, 1),
                        genProposal(p4, 2)
                    }
                }


            };
            var o2 = new Order()
            {
                Header = new OrderHeader()
                {
                    OrderName = "Order#2",
                    CreationMoment = DateTimeOffset.UtcNow,
                    Status = Models.Interfaces.OrderStatus.Complete,
                },
                Details = new OrderDetails()
                {
                    Proposals = new List<Proposal>()
                    {
                        genProposal(p1, 1),
                        genProposal(p2, 5),
                        genProposal(p3, 1),
                        genProposal(p4, 2)
                    }
                }


            };

            return new List<Order>() { o1, o2 };
        }
    }
}
