import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AttributeComponent } from './attribute.component';

const routes: Routes = [{ path: '', component: AttributeComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AttributeRoutingModule {}
