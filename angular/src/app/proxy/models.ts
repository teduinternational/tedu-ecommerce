import type { PagedResultRequestDto } from '@abp/ng.core';

export interface BaseListFilterDto extends PagedResultRequestDto {
  keyword?: string;
}
