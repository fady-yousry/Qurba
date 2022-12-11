import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginationComponent } from './components/pagination/pagination.component';
import { NotfoundComponent } from './components/notfound/notfound.component';


@NgModule({
  declarations: [
    PaginationComponent,
    NotfoundComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
