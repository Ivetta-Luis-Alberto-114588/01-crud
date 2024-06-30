import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ListProductsComponent } from './pages/list-products/list-products.component';
import { AddProductsComponent } from './pages/add-products/add-products.component';

const route: Routes = [
  {path:"listado", component: ListProductsComponent},
  {path:"add/{id}", component: AddProductsComponent}
]

@NgModule({
  declarations: [],
  imports: [ CommonModule, RouterModule.forChild(route)  ],
  exports: [RouterModule]
})
export class ProductosRoutingModule { }
