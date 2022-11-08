using AutoMapper;
using TeduEcommerce.Admin.ProductCategories;
using TeduEcommerce.ProductCategories;

namespace TeduEcommerce.Admin;

public class TeduEcommerceAdminApplicationAutoMapperProfile : Profile
{
    public TeduEcommerceAdminApplicationAutoMapperProfile()
    {
        /* You can configure your AutoMapper mapping configuration here.
         * Alternatively, you can split your mapping configurations
         * into multiple profile classes for a better organization. */
        CreateMap<ProductCategory, ProductCategoryDto>();
        CreateMap<ProductCategory, ProductCategoryInListDto>();
        CreateMap<CreateUpdateProductCategoryDto, ProductCategory>();
    }
}
