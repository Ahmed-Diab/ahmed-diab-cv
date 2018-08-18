import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, routingComponants } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule, MatGridListModule, MatSidenavModule, MatInputModule, MatSnackBarModule} from '@angular/material';

import { ErrorComponent } from './components/error/error.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SpinnerComponent } from './components/layout/spinner/spinner.component';
import { ShoesShopComponent } from './components/projects/shoes-shop/shoes-shop.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    ErrorComponent,
    SpinnerComponent,
    routingComponants,
    ShoesShopComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatGridListModule,
    MatSidenavModule,
    MatInputModule,
    MatSnackBarModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule.withConfig({warnOnNgModelWithFormControl: 'never'})
  ],
  exports: [
    MatButtonModule, 
    MatInputModule,
    MatCheckboxModule, 
    MatGridListModule, 
    MatSidenavModule,
    MatSnackBarModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
