import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductosRoutingModule } from './productos-routing.module';
import { ListProductsComponent } from './pages/list-products/list-products.component';
import { AddProductsComponent } from './pages/add-products/add-products.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    ListProductsComponent,
    AddProductsComponent
  ],
  imports: [
    CommonModule, ProductosRoutingModule, HttpClientModule
  ]
})
export class ProductosModule { }
