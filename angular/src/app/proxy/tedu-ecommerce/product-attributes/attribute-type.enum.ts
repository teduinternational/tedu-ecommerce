import { mapEnumToOptions } from '@abp/ng.core';

export enum AttributeType {
  Int = 1,
  Varchar = 2,
  Text = 3,
  Decimal = 4,
  Date = 5,
}

export const attributeTypeOptions = mapEnumToOptions(AttributeType);
