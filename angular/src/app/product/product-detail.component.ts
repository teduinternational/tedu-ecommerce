import { PagedResultDto } from '@abp/ng.core';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductCategoriesService, ProductCategoryInListDto } from '@proxy/product-categories';
import { ProductDto, ProductInListDto, ProductsService } from '@proxy/products';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
})
export class ProductDetailComponent implements OnInit, OnDestroy {
  private ngUnsubscribe = new Subject<void>();
  blockedPanel: boolean = false;

  public form: FormGroup;

  //Dropdown
  productCategories: any[] = [];
  manufacturers: any[] =[];
  productTypes: any[] = [];
  selectedEntity = {} as ProductDto;

  constructor(
    private productService: ProductsService,
    private productCategoryService: ProductCategoriesService,
    private fb: FormBuilder
  ) {}

  ngOnDestroy(): void {}

  ngOnInit(): void {
    this.buildForm();
  }

  loadFormDetails(id: string) {
    this.toggleBlockUI(true);
    this.productService
      .get(id)
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe({
        next: (response: ProductDto) => {
          this.selectedEntity = response;
          this.buildForm();
          this.toggleBlockUI(false);
        },
        error: () => {
          this.toggleBlockUI(false);
        },
      });
  }
  saveChange(){

    
  }
  loadProductCategories() {
    this.productCategoryService.getListAll().subscribe((response: ProductCategoryInListDto[]) => {
      response.forEach(element => {
        this.productCategories.push({
          value: element.id,
          name: element.name,
        });
      });
    });
  }

  private buildForm() {
    this.form = this.fb.group({
      name: new FormControl(this.selectedEntity.name || null, Validators.required),
      code: new FormControl(this.selectedEntity.code || null, Validators.required),
      slug: new FormControl(this.selectedEntity.slug || null, Validators.required),
      sku: new FormControl(this.selectedEntity.sku || null, Validators.required),
      manufacturerId: new FormControl(this.selectedEntity.manufacturerId || null, Validators.required),
      categoryId: new FormControl(this.selectedEntity.categoryId || null, Validators.required),
      productType: new FormControl(this.selectedEntity.productType || null, Validators.required),
      sortOrder: new FormControl(this.selectedEntity.sortOrder || null, Validators.required),
      sellPrice: new FormControl(this.selectedEntity.sellPrice || null, Validators.required),
      visibility: new FormControl(this.selectedEntity.visiblity || false),
      isActive: new FormControl(this.selectedEntity.isActive || false),
      seoMetaDescription: new FormControl(this.selectedEntity.seoMetaDescription || null),
      description: new FormControl(this.selectedEntity.description || null),

    });
  }

  private toggleBlockUI(enabled: boolean) {
    if (enabled == true) {
      this.blockedPanel = true;
    } else {
      setTimeout(() => {
        this.blockedPanel = false;
      }, 1000);
    }
  }
}
