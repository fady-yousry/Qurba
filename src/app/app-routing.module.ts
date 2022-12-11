import { AuthGuard } from './core/auth/auth-guard.guard';
import { NotfoundComponent } from './shared/components/notfound/notfound.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./core/auth/auth.module')
      .then(m => m.AuthModule),
  },
  {
    path: 'layout',
    canActivate: [AuthGuard],
    loadChildren: () => import('./core/layout/layout.module')
      .then(m => m.LayoutModule),
  },
  {
    path: 'products',
    loadChildren: () => import('./feature-modules/products/products.module')
      .then(m => m.ProductsModule),
  },
  { path: '', redirectTo: 'layout', pathMatch: 'full' },
  { path: '**', component: NotfoundComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
