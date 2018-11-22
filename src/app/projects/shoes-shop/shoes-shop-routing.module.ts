import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShoesShopComponent } from './shoes-shop/shoes-shop.component';

const routes: Routes = [
  {path: '', component: ShoesShopComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShoesShopRoutingModule { }
