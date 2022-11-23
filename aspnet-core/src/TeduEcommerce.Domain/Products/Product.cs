using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Volo.Abp.Domain.Entities.Auditing;

namespace TeduEcommerce.Products
{
    public class Product : AuditedAggregateRoot<Guid>
    {
        public Product() { }
        public Product(Guid id, Guid manufacturerId, 
            string name, string code, string slug, 
            ProductType productType, string sKU, 
            int sortOrder, bool visibility, 
            bool isActive, Guid categoryId, 
            string seoMetaDescription, string description,
            string thumbnailPicture, double sellPrice, 
            string categoryName, string categorySlug)
        {
            Id = id;
            ManufacturerId = manufacturerId;
            Name = name;
            Code = code;
            Slug = slug;
            ProductType = productType;
            SKU = sKU;
            SortOrder = sortOrder;
            Visibility = visibility;
            IsActive = isActive;
            CategoryId = categoryId;
            SeoMetaDescription = seoMetaDescription;
            Description = description;
            ThumbnailPicture = thumbnailPicture;
            SellPrice = sellPrice;
            CategoryName = categoryName;
            CategorySlug = categorySlug;
        }

        public Guid ManufacturerId { get; set; }
        public string Name { get; set; }
        public string  Code { get; set; }
        public string Slug { get; set; }
        public ProductType ProductType { get; set; }
        public string SKU { get; set; }
        public int SortOrder { get; set; }
        public bool Visibility { get; set; }
        public bool IsActive { get; set; }
        public Guid CategoryId { get; set; }
        public string SeoMetaDescription { get; set; }
        public string Description { get; set; }
        public string ThumbnailPicture { get; set; }
        public double SellPrice { get; set; }

        public string CategoryName { get; set; }
        public string CategorySlug { get; set; }

    }
}
