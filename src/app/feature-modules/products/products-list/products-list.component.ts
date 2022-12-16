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
  categoriesList: any[] = [];
  originalList: Product[] = [];
  constructor(private productsService: ProductsService, private sharedService: SharedService) { }

  ngOnInit(): void {
    let search = this.sharedService.getSearchTerm().subscribe(res => {
      this.getAllProducts()
      this.searchTerm = res;
    })
    this.search$.add(search);
    this.getAllCategories();

  }

  getAllProducts() {
    this.productsService.getAllProducts(this.searchTerm).subscribe(res => {
      this.productsList = res.products;
      this.originalList = [...res.products];
    })
  }
  calcPriceAfterDiscount(price: number, discount: number) {
    return (price - ((price * discount) / 100)).toFixed(2);
  }

  getAllCategories() {
    this.productsService.getAllCategories().subscribe(res => {
      this.categoriesList = res;
      this.categoriesList.unshift('All');
    })
  }

  filterBy(category: string) {
    if(category==='All'){
      this.productsList=this.originalList;
    }else{
      this.productsList = this.originalList.filter(e => e.category == category)
    }
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
