import { SharedService } from './../../../shared/shared.service';
import { ProductsService } from './../products.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Product } from '../../../shared/models/Product.model'
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit, OnDestroy {
  currentPage: number = 1;
  lastPage: number = 20;
  productsList: Product[] = [];
  search$ = new Subscription();
  searchTerm: string = '';
  constructor(private productsService: ProductsService, private sharedService: SharedService) { }

  ngOnInit(): void {
    this.getAllProducts();
    let search = this.sharedService.getSearchTerm().subscribe(res => {
      this.getAllProducts()
      this.searchTerm = res;
    })
    this.search$.add(search);
  }

  getAllProducts() {
    this.productsService.getAllProducts(this.searchTerm).subscribe(res => {
      this.productsList = res.products;
    })
  }
  calcPriceAfterDiscount(price: number, discount: number) {
    return (price - ((price * discount) / 100)).toFixed(2);
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

  ngOnDestroy() {
    this.search$.unsubscribe();
  }
}
