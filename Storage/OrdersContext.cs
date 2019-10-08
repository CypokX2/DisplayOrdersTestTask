using Microsoft.EntityFrameworkCore;
using Models.Models.Storage;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;

namespace Storage
{
    public class OrdersContext : DbContext
    {
        public OrdersContext(DbContextOptions options)
            : base(options)
        { }

        public DbSet<Product> Products { get; set; }
        public DbSet<OrderHeader> Headers { get; set; }
        public DbSet<Order> Orders { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.Entity<Proposal>()
                        .HasOne(p => p.Product)
                        .WithMany()
                        .OnDelete(DeleteBehavior.NoAction);
        }
    }
}
