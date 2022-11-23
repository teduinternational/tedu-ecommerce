using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Volo.Abp.Domain.Entities.Auditing;

namespace TeduEcommerce.Manufacturers
{
    public class Manufacturer : CreationAuditedAggregateRoot<Guid>
    {
        public string Name { get; set; }
        public string Code { get; set; }
        public string Slug { get; set; }
        public string CoverPicture { get; set; }
        public bool Visibility { get; set; }
        public bool IsActive { get; set; }
        public string Country { get; set; }
    }
}
