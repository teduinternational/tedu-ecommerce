import type { CreateUpdateProductAttributeDto, ProductAttributeDto, ProductAttributeInListDto } from './models';
import { RestService } from '@abp/ng.core';
import type { PagedResultDto, PagedResultRequestDto } from '@abp/ng.core';
import { Injectable } from '@angular/core';
import type { BaseListFilterDto } from '../models';

@Injectable({
  providedIn: 'root',
})
export class ProductAttributesService {
  apiName = 'Default';
  

  create = (input: CreateUpdateProductAttributeDto) =>
    this.restService.request<any, ProductAttributeDto>({
      method: 'POST',
      url: '/api/app/product-attributes',
      body: input,
    },
    { apiName: this.apiName });
  

  delete = (id: string) =>
    this.restService.request<any, void>({
      method: 'DELETE',
      url: `/api/app/product-attributes/${id}`,
    },
    { apiName: this.apiName });
  

  deleteMultiple = (ids: string[]) =>
    this.restService.request<any, void>({
      method: 'DELETE',
      url: '/api/app/product-attributes/multiple',
      params: { ids },
    },
    { apiName: this.apiName });
  

  get = (id: string) =>
    this.restService.request<any, ProductAttributeDto>({
      method: 'GET',
      url: `/api/app/product-attributes/${id}`,
    },
    { apiName: this.apiName });
  

  getList = (input: PagedResultRequestDto) =>
    this.restService.request<any, PagedResultDto<ProductAttributeDto>>({
      method: 'GET',
      url: '/api/app/product-attributes',
      params: { maxResultCount: input.maxResultCount, skipCount: input.skipCount },
    },
    { apiName: this.apiName });
  

  getListAll = () =>
    this.restService.request<any, ProductAttributeInListDto[]>({
      method: 'GET',
      url: '/api/app/product-attributes/all',
    },
    { apiName: this.apiName });
  

  getListFilter = (input: BaseListFilterDto) =>
    this.restService.request<any, PagedResultDto<ProductAttributeInListDto>>({
      method: 'GET',
      url: '/api/app/product-attributes/filter',
      params: { skipCount: input.skipCount, maxResultCount: input.maxResultCount, keyword: input.keyword },
    },
    { apiName: this.apiName });
  

  update = (id: string, input: CreateUpdateProductAttributeDto) =>
    this.restService.request<any, ProductAttributeDto>({
      method: 'PUT',
      url: `/api/app/product-attributes/${id}`,
      body: input,
    },
    { apiName: this.apiName });

  constructor(private restService: RestService) {}
}
