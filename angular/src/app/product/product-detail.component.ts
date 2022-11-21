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
