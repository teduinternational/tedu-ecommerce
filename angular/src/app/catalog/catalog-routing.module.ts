import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AttributeComponent } from './attribute/attribute.component';
import { ProductComponent } from './product/product.component';

const routes: Routes = [
  { path: 'product', component: ProductComponent },
  { path: 'attribute', component: AttributeComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CatalogRoutingModule {}
