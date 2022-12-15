using System;
using System.Collections.Generic;
using System.Text;

namespace TeduEcommerce.Admin.Products.Attributes
{
    public class AddUpdateProductAttributeDto
    {
        public Guid ProductId { get; set; }
        public Guid AttributeId { get; set; }

        public DateTime? DateTimeValue { get; set; }
        public decimal? DecimalValue { get; set; }
        public int? IntValue { get; set; }
        public string VarcharValue { get; set; }

        public string TextValue { get; set; }
    }
}
