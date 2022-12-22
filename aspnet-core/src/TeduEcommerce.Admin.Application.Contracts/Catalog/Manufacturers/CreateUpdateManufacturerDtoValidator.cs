using FluentValidation;
using System;
using System.Collections.Generic;
using System.Text;

namespace TeduEcommerce.Admin.Manufacturers
{
    public class CreateUpdateManufacturerDtoValidator : AbstractValidator<CreateUpdateManufacturerDto>
    {
        public CreateUpdateManufacturerDtoValidator()
        {
            RuleFor(x => x.Name).NotEmpty().MaximumLength(50);
            RuleFor(x => x.Code).NotEmpty().MaximumLength(50);
            RuleFor(x => x.Slug).NotEmpty().MaximumLength(50);
            RuleFor(x => x.CoverPicture).MaximumLength(250);
        }
    }
}
