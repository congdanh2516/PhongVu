import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductDetailComponent } from './features/guest/components/product/product-detail.component';
import { GuestComponent } from './features/guest/guest.component';
import { GuestModule } from './features/guest/guest.module';

const routes: Routes = [
  { path: '', 
    loadChildren: () => import('./features/guest/guest.module').then(x => x.GuestModule)
  },
  // { path: '', redirectTo: '/home', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
