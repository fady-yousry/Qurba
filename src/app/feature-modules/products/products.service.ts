import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }
  getAllProducts(searchTerm:string='') {
    return this.http.get<any>(`https://dummyjson.com/products${searchTerm}?/search?q=${searchTerm}:''`);
  }

}
