using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Volo.Abp.Domain.Entities;

namespace TeduEcommerce.Products
{
    public class ProductAttributeDateTime : Entity<Guid>
    {
        public Guid AttributeId { get; set; }
        public Guid ProductId { get; set; }
        public DateTime Value { get; set; }
    }
}
