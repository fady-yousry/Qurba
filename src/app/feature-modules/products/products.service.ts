import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }
  getAllProducts(searchTerm:string='') {
    let search = searchTerm ? '/search?q='+searchTerm:'';
    return this.http.get<any>(`https://dummyjson.com/products${search}`);
  }

}
