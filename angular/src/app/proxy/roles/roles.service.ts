import type { CreateUpdateRoleDto, RoleDto, RoleInListDto } from './models';
import { RestService } from '@abp/ng.core';
import type { PagedResultDto, PagedResultRequestDto } from '@abp/ng.core';
import { Injectable } from '@angular/core';
import type { BaseListFilterDto } from '../models';

@Injectable({
  providedIn: 'root',
})
export class RolesService {
  apiName = 'Default';
  

  create = (input: CreateUpdateRoleDto) =>
    this.restService.request<any, RoleDto>({
      method: 'POST',
      url: '/api/app/roles',
      body: input,
    },
    { apiName: this.apiName });
  

  delete = (id: string) =>
    this.restService.request<any, void>({
      method: 'DELETE',
      url: `/api/app/roles/${id}`,
    },
    { apiName: this.apiName });
  

  deleteMultiple = (ids: string[]) =>
    this.restService.request<any, void>({
      method: 'DELETE',
      url: '/api/app/roles/multiple',
      params: { ids },
    },
    { apiName: this.apiName });
  

  get = (id: string) =>
    this.restService.request<any, RoleDto>({
      method: 'GET',
      url: `/api/app/roles/${id}`,
    },
    { apiName: this.apiName });
  

  getList = (input: PagedResultRequestDto) =>
    this.restService.request<any, PagedResultDto<RoleDto>>({
      method: 'GET',
      url: '/api/app/roles',
      params: { maxResultCount: input.maxResultCount, skipCount: input.skipCount },
    },
    { apiName: this.apiName });
  

  getListAll = () =>
    this.restService.request<any, RoleInListDto[]>({
      method: 'GET',
      url: '/api/app/roles/all',
    },
    { apiName: this.apiName });
  

  getListFilter = (input: BaseListFilterDto) =>
    this.restService.request<any, PagedResultDto<RoleInListDto>>({
      method: 'GET',
      url: '/api/app/roles/filter',
      params: { keyword: input.keyword, skipCount: input.skipCount, maxResultCount: input.maxResultCount },
    },
    { apiName: this.apiName });
  

  update = (id: string, input: CreateUpdateRoleDto) =>
    this.restService.request<any, RoleDto>({
      method: 'PUT',
      url: `/api/app/roles/${id}`,
      body: input,
    },
    { apiName: this.apiName });

  constructor(private restService: RestService) {}
}
