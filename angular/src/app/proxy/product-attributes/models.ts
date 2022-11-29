import type { AttributeType } from '../tedu-ecommerce/product-attributes/attribute-type.enum';
import type { EntityDto } from '@abp/ng.core';

export interface CreateUpdateProductAttributeDto {
  code?: string;
  dataType: AttributeType;
  label?: string;
  sortOrder: number;
  visibility: boolean;
  isActive: boolean;
  isRequired: boolean;
  isUnique: boolean;
  note?: string;
}

export interface ProductAttributeDto {
  code?: string;
  dataType: AttributeType;
  label?: string;
  sortOrder: number;
  visibility: boolean;
  isActive: boolean;
  isRequired: boolean;
  isUnique: boolean;
  note?: string;
  id?: string;
}

export interface ProductAttributeInListDto extends EntityDto<string> {
  code?: string;
  dataType: AttributeType;
  label?: string;
  sortOrder: number;
  visibility: boolean;
  isActive: boolean;
  isRequired: boolean;
  isUnique: boolean;
  id?: string;
}
