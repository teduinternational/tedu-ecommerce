import type { EntityDto } from '@abp/ng.core';

export interface CreateUpdateProductCategoryDto {
  name?: string;
  code?: string;
  slug?: string;
  sortOrder: number;
  coverPicture?: string;
  visibility: boolean;
  isActive: boolean;
  parentId?: string;
  seoMetaDescription?: string;
}

export interface ProductCategoryDto {
  name?: string;
  code?: string;
  slug?: string;
  sortOrder: number;
  coverPicture?: string;
  visibility: boolean;
  isActive: boolean;
  parentId?: string;
  seoMetaDescription?: string;
  id?: string;
}

export interface ProductCategoryInListDto extends EntityDto<string> {
  name?: string;
  code?: string;
  sortOrder: number;
  coverPicture?: string;
  visibility: boolean;
  isActive: boolean;
}
