import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { ProductRoutingModule } from './product-routing.module';
import { ProductComponent } from './product.component';
import { PanelModule } from 'primeng/panel';
import { TableModule } from 'primeng/table';
import { PaginatorModule } from 'primeng/paginator';
import {BlockUIModule} from 'primeng/blockui';
@NgModule({
  declarations: [ProductComponent],
  imports: [SharedModule, ProductRoutingModule, PanelModule, TableModule, PaginatorModule,BlockUIModule],
})
export class ProductModule {}
