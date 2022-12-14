import type { EntityDto } from '@abp/ng.core';

export interface CreateUpdateRoleDto {
  name?: string;
  description?: string;
}

export interface RoleDto extends EntityDto<string> {
  name?: string;
  description?: string;
}

export interface RoleInListDto extends EntityDto<string> {
  name?: string;
  description?: string;
}
