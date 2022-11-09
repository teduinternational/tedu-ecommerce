import type { CreateUpdateProductCategoryDto, ProductCategoryDto, ProductCategoryInListDto } from './models';
import { RestService } from '@abp/ng.core';
import type { PagedResultDto, PagedResultRequestDto } from '@abp/ng.core';
import { Injectable } from '@angular/core';
import type { BaseListFilterDto } from '../models';

@Injectable({
  providedIn: 'root',
})
export class ProductCategoriesService {
  apiName = 'Default';
  

  create = (input: CreateUpdateProductCategoryDto) =>
    this.restService.request<any, ProductCategoryDto>({
      method: 'POST',
      url: '/api/app/product-categories',
      body: input,
    },
    { apiName: this.apiName });
  

  delete = (id: string) =>
    this.restService.request<any, void>({
      method: 'DELETE',
      url: `/api/app/product-categories/${id}`,
    },
    { apiName: this.apiName });
  

  deleteMultiple = (ids: string[]) =>
    this.restService.request<any, void>({
      method: 'DELETE',
      url: '/api/app/product-categories/multiple',
      params: { ids },
    },
    { apiName: this.apiName });
  

  get = (id: string) =>
    this.restService.request<any, ProductCategoryDto>({
      method: 'GET',
      url: `/api/app/product-categories/${id}`,
    },
    { apiName: this.apiName });
  

  getList = (input: PagedResultRequestDto) =>
    this.restService.request<any, PagedResultDto<ProductCategoryDto>>({
      method: 'GET',
      url: '/api/app/product-categories',
      params: { maxResultCount: input.maxResultCount, skipCount: input.skipCount },
    },
    { apiName: this.apiName });
  

  getListAll = () =>
    this.restService.request<any, ProductCategoryInListDto[]>({
      method: 'GET',
      url: '/api/app/product-categories/all',
    },
    { apiName: this.apiName });
  

  getListFilter = (input: BaseListFilterDto) =>
    this.restService.request<any, PagedResultDto<ProductCategoryInListDto>>({
      method: 'GET',
      url: '/api/app/product-categories/filter',
      params: { skipCount: input.skipCount, maxResultCount: input.maxResultCount, keyword: input.keyword },
    },
    { apiName: this.apiName });
  

  update = (id: string, input: CreateUpdateProductCategoryDto) =>
    this.restService.request<any, ProductCategoryDto>({
      method: 'PUT',
      url: `/api/app/product-categories/${id}`,
      body: input,
    },
    { apiName: this.apiName });

  constructor(private restService: RestService) {}
}
