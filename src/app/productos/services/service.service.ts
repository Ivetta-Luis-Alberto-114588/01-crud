import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Producto, Tipo } from '../helpers/interfaces';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http: HttpClient) { }

  urlBase = "http://localhost:3000/"



  getProdcuts() : Observable<Producto[]>{
    
    return this.http.get<Producto[]>(`${this.urlBase}`+"productos")
  }


  getTipos(): Observable<Tipo[]>{
    return this.http.get<Tipo[]>(`${this.urlBase}`+"tipos")
  }
}
