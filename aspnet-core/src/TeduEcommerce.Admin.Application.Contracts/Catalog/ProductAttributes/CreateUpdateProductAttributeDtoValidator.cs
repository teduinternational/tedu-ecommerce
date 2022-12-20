using FluentValidation;
using System;
using System.Collections.Generic;
using System.Text;

namespace TeduEcommerce.Admin.ProductAttributes
{
    public class CreateUpdateProductAttributeDtoValidator : AbstractValidator<CreateUpdateProductAttributeDto>
    {
        public CreateUpdateProductAttributeDtoValidator()
        {
            RuleFor(x => x.Label).NotEmpty().MaximumLength(50);
            RuleFor(x => x.Code).NotEmpty().MaximumLength(50);
            RuleFor(x => x.DataType).NotNull();
        }
    }
}
