using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Volo.Abp.Domain.Entities.Auditing;

namespace TeduEcommerce.Products
{
    public class ProductReview : CreationAuditedEntity<Guid>
    {
        public Guid ProductId { get; set; }
        public Guid? ParentId { get; set; }
        public string Title { get; set; }
        public double Rating { get; set; }

        public DateTime? PublishedDate { get; set; }
        public string Content { get; set; }
        public Guid OrderId { get; set; }
    }
}
