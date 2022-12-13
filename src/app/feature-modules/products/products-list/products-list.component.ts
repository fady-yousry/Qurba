import { ProductsService } from './../products.service';
import { Component, OnInit } from '@angular/core';
import { Product} from '../../../shared/models/Product.model'

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {
  currentPage: number = 1;
  lastPage: number=20;
  productsList:Product[]=[];
  constructor(private productsService:ProductsService) { }

  ngOnInit(): void {
    this.getAllProducts();
  }

  getAllProducts(){
    this.productsService.getAllProducts().subscribe(res=>{
      this.productsList=res.products;
    })
  }
  calcPriceAfterDiscount(price:number,discount:number){
    return (price-((price*discount)/100)).toFixed(2);
  }
  handlePrevious() {
    this.handleGoTo(this.currentPage - 1);
  }
  handleNext() {
    this.handleGoTo(this.currentPage + 1);
  }
  handleGoTo(n: number) {
    this.currentPage = n;
  }
}
