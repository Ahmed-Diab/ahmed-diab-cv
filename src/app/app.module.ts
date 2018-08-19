import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule, routingComponants } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule, MatGridListModule, MatSidenavModule, MatInputModule, MatSnackBarModule} from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SpinnerComponent } from './components/layout/spinner/spinner.component';
import { HttpClientModule } from '@angular/common/http';
import { ImageSpinnerComponent } from './components/layout/image-spinner/image-spinner.component';
import { ValidateService } from './services/validate.service';


@NgModule({
  declarations: [
    AppComponent,
    SpinnerComponent,
    routingComponants,
    ImageSpinnerComponent

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

  providers: [ValidateService],
  bootstrap: [AppComponent]
})
export class AppModule { }
