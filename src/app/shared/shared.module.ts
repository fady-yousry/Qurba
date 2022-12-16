import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginationComponent } from './components/pagination/pagination.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { FiltersComponent } from './components/filters/filters.component';


@NgModule({
  declarations: [
    PaginationComponent,
    NotfoundComponent,
    FiltersComponent,
  ],
  imports: [
    CommonModule
  ],
  exports:[PaginationComponent,FiltersComponent]
})
export class SharedModule { }
