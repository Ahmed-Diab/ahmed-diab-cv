import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule, MatCheckboxModule, MatGridListModule, MatSidenavModule, MatInputModule, MatSnackBarModule} from '@angular/material';

import { ShoesShopRoutingModule } from './shoes-shop-routing.module';
import { ShoesShopComponent } from './shoes-shop/shoes-shop.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ShoesShopRoutingModule,
    MatButtonModule,
    MatCheckboxModule, 
    MatGridListModule, 
    MatSidenavModule, 
    MatInputModule, 
    MatSnackBarModule,
  ],
  declarations: [ShoesShopComponent],
exports:[
  MatButtonModule,
  MatCheckboxModule, 
  MatGridListModule, 
  MatSidenavModule, 
  MatInputModule, 
  MatSnackBarModule,
]
})
export class ShoesShopModule { }
