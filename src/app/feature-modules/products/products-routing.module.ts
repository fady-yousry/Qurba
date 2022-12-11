import { NotfoundComponent } from './../../shared/components/notfound/notfound.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: 'products-list',
    component: ProductsListComponent,
  },
  {
    path: 'products-list/:page',
    component: ProductsListComponent,
  },
  { path: '', redirectTo: 'products-list', pathMatch: 'full' },
  { path: '**', component: NotfoundComponent },
];


@NgModule({
  imports: [
    [RouterModule.forChild(routes)],
  ],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
