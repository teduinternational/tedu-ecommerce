import { ConfirmationService } from 'primeng/api';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductAttributeInListDto, ProductAttributesService } from '@proxy/product-attributes';
import { ProductDto, ProductsService } from '@proxy/products';
import { ProductAttributeValueDto } from '@proxy/products/attributes';
import { AttributeType } from '@proxy/tedu-ecommerce/product-attributes';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { forkJoin, Subject, takeUntil } from 'rxjs';
import { NotificationService } from '../shared/services/notification.service';
import { UtilityService } from '../shared/services/utility.service';

@Component({
  selector: 'app-product-attribute',
  templateUrl: './product-attribute.component.html',
})
export class ProductAttributeComponent implements OnInit, OnDestroy {
  private ngUnsubscribe = new Subject<void>();
  blockedPanel: boolean = false;
  btnDisabled = false;
  public form: FormGroup;

  attributes: any[] = [];
  fullAttributes: any[] = [];

  productAttributes: any[] = [];
  selectedEntity = {} as ProductDto;

  constructor(
    private productAttributeService: ProductAttributesService,
    private productService: ProductsService,
    private fb: FormBuilder,
    private config: DynamicDialogConfig,
    private ref: DynamicDialogRef,
    private notificationSerivce: NotificationService,
    private confirmationService: ConfirmationService
  ) {}

  ngOnDestroy(): void {
    if (this.ref) {
      this.ref.close();
    }
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

  ngOnInit(): void {
    this.buildForm();
    this.initFormData();
  }

  initFormData() {
    //Load data to form
    var attributes = this.productAttributeService.getListAll();
    this.toggleBlockUI(true);
    forkJoin({
      attributes,
    })
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe({
        next: (response: any) => {
          //Push data to dropdown
          this.fullAttributes = response.attributes;
          var attributes = response.attributes as ProductAttributeInListDto[];
          attributes.forEach(element => {
            this.attributes.push({
              value: element.id,
              label: element.label,
            });
          });

          this.loadFormDetails(this.config.data?.id);
        },
        error: () => {
          this.toggleBlockUI(false);
        },
      });
  }

  loadFormDetails(id: string) {
    this.toggleBlockUI(true);
    this.productService
      .getListProductAttributeAll(id)
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe({
        next: (response: ProductAttributeValueDto[]) => {
          this.productAttributes = response;
          this.buildForm();
          this.toggleBlockUI(false);
        },
        error: () => {
          this.toggleBlockUI(false);
        },
      });
  }

  saveChange() {
    this.toggleBlockUI(true);
    var selectedAttributeId = this.form.controls['attributeId'].value;
    var dataType = this.fullAttributes.filter(x => x.id == selectedAttributeId)[0].dataType;
    console.log(dataType);
    var value = this.form.controls['attributeValue'].value;
    if (dataType == AttributeType.Date) {
      this.form.controls['dateTimeValue'].setValue(value);
    } else if (dataType == AttributeType.Decimal) {
      this.form.controls['decimalValue'].setValue(value);
    } else if (dataType == AttributeType.Int) {
      this.form.controls['intValue'].setValue(value);
    } else if (dataType == AttributeType.Text) {
      this.form.controls['textValue'].setValue(value);
    } else if (dataType == AttributeType.Varchar) {
      this.form.controls['varcharValue'].setValue(value);
    }
    this.productService
      .addProductAttribute(this.form.value)
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe({
        next: () => {
          this.toggleBlockUI(false);
          this.loadFormDetails(this.config.data.id);
        },
        error: err => {
          this.notificationSerivce.showError(err.error.error.message);
          this.toggleBlockUI(false);
        },
      });
  }

  private buildForm() {
    this.form = this.fb.group({
      productId: new FormControl(this.config.data.id),
      attributeId: new FormControl(null, Validators.required),
      attributeValue: new FormControl(null, Validators.required),
      dateTimeValue: new FormControl(null),
      decimalValue: new FormControl(null),
      intValue: new FormControl(null),
      varcharValue: new FormControl(null),
      textValue: new FormControl(null),
    });
  }
  removeItem(attribute: ProductAttributeValueDto) {
    var id = '';
    if (attribute.dataType == AttributeType.Date) {
      id = attribute.dateTimeId;
    } else if (attribute.dataType == AttributeType.Decimal) {
      id = attribute.decimalId;
    } else if (attribute.dataType == AttributeType.Int) {
      id = attribute.intId;
    } else if (attribute.dataType == AttributeType.Text) {
      id = attribute.textId;
    } else if (attribute.dataType == AttributeType.Varchar) {
      id = attribute.varcharId;
    }
    this.confirmationService.confirm({
      message: 'Bạn có chắc muốn xóa bản ghi này?',
      accept: () => {
        this.deleteItemsConfirmed(attribute, id);
      },
    });
  }
  deleteItemsConfirmed(attribute: ProductAttributeValueDto, id: string) {
    this.toggleBlockUI(true);
    this.productService
      .removeProductAttribute(attribute.attributeId, id)
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe({
        next: () => {
          this.notificationSerivce.showSuccess('Xóa thành công');
          this.loadFormDetails(this.config.data?.id);
          this.toggleBlockUI(false);
        },
        error: () => {
          this.toggleBlockUI(false);
        },
      });
  }
  getDataTypeName(value: number) {
    return AttributeType[value];
  }
  getValueByType(attribute: ProductAttributeValueDto, value: number) {
    if (attribute.dataType == AttributeType.Date) {
      return attribute.dateTimeValue;
    } else if (attribute.dataType == AttributeType.Decimal) {
      return attribute.decimalValue;
    } else if (attribute.dataType == AttributeType.Int) {
      return attribute.intValue;
    } else if (attribute.dataType == AttributeType.Text) {
      return attribute.textValue;
    } else if (attribute.dataType == AttributeType.Varchar) {
      return attribute.varcharValue;
    }
  }
  private toggleBlockUI(enabled: boolean) {
    if (enabled == true) {
      this.blockedPanel = true;
      this.btnDisabled = true;
    } else {
      setTimeout(() => {
        this.blockedPanel = false;
        this.btnDisabled = false;
      }, 1000);
    }
  }
}
