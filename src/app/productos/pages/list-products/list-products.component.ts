import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../services/service.service';
import { Producto, Tipo } from '../../helpers/interfaces';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})
export class ListProductsComponent implements OnInit {
  
  listProduct : Producto[] = []
  listTipos: Tipo[] = []
  miLista: any[] = []
  

  constructor(private service: ServiceService){}

  ngOnInit(): void {
    this.getTipos()
    this.getProducts()
  }

  getProducts(){
    this.miLista = []; // Paso 1: Inicializar miLista como un arreglo vacío
    this.service.getProdcuts().subscribe({
      next: (products: Producto[])=>{ 
        products.forEach(product => { // Iterar sobre cada producto
          const tipo = this.listTipos.find(x => x.id == product.tipo);
          const productWithTipoNombre = {...product, tipoNombre: tipo ? tipo.descripcion : "desconocido"};
          this.miLista.push(productWithTipoNombre); // Paso 2: Agregar a miLista
          console.log(this.miLista)
        });
      },
      error: () => {}
    })
  }


  getTipos(){
    this.service.getTipos().subscribe({
      next: (x: Tipo[])=>{ 
        console.log(x)
        this.listTipos = x},
      error: ()=>{}
    })
  }



}
