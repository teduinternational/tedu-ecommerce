using System;
using System.Collections.Generic;
using System.Text;
using TeduEcommerce.ProductAttributes;
using Volo.Abp.Application.Dtos;

namespace TeduEcommerce.Admin.Products.Attributes
{
    public class ProductAttributeValueDto : IEntityDto<Guid>
    {
        public Guid Id { get; set; }
        public Guid ProductId { get; set; }
        public Guid AttributeId { get; set; }
        public string Code { get; set; }
        public AttributeType DataType { get; set; }
        public string Label { get; set; }

        public DateTime? DateTimeValue { get; set; }
        public decimal? DecimalValue { get; set; }
        public int? IntValue { get; set; }
        public string TextValue { get; set; }
        public string VarcharValue { get; set; }

        public Guid? DateTimeId { get; set; }
        public Guid? DecimalId { get; set; }
        public Guid? IntId { get; set; }
        public Guid? TextId { get; set; }
        public Guid? VarcharId { get; set; }

    }
}
