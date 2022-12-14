import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor() { }

  searchTerm=new BehaviorSubject("");

  setSearchTerm(term:string){
    this.searchTerm.next(term);
  }

  getSearchTerm(){
    return this.searchTerm;
  }

}
