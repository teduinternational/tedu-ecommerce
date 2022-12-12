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
        public ProductAttributeDateTime(Guid id, Guid attributeId, Guid productId, DateTime? value)
        {
            Id= id;
            AttributeId = attributeId;
            ProductId = productId;
            Value = value;
        }

        public Guid AttributeId { get; set; }
        public Guid ProductId { get; set; }
        public DateTime? Value { get; set; }
    }
}
