using AutoMapper;
using TeduEcommerce.Manufacturers;
using TeduEcommerce.ProductAttributes;
using TeduEcommerce.ProductCategories;
using TeduEcommerce.Products;
using TeduEcommerce.Public.Manufacturers;
using TeduEcommerce.Public.ProductAttributes;
using TeduEcommerce.Public.ProductCategories;
using TeduEcommerce.Public.Products;

namespace TeduEcommerce.Public;

public class TeduEcommercePublicApplicationAutoMapperProfile : Profile
{
    public TeduEcommercePublicApplicationAutoMapperProfile()
    {
        //Product Category
        CreateMap<ProductCategory, ProductCategoryDto>();
        CreateMap<ProductCategory, ProductCategoryInListDto>();

        //Product
        CreateMap<Product, ProductDto>();
        CreateMap<Product, ProductInListDto>();

        CreateMap<Manufacturer, ManufacturerDto>();
        CreateMap<Manufacturer, ManufacturerInListDto>();

        //Product attribute
        CreateMap<ProductAttribute, ProductAttributeDto>();
        CreateMap<ProductAttribute, ProductAttributeInListDto>();
    }
}
