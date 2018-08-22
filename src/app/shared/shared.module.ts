
import { Injectable, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageSpinnerComponent } from './image-spinner/image-spinner.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { MatSnackBarModule, MatInputModule, MatSidenavModule, MatGridListModule, MatCheckboxModule, MatButtonModule } from '@angular/material';

const components = [
  ImageSpinnerComponent,
  SpinnerComponent
]
@Injectable({
  providedIn: 'root'
})

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatCheckboxModule, 
    MatGridListModule, 
    MatSidenavModule, 
    MatInputModule, 
    MatSnackBarModule
  ],
  providers: [],
  declarations: [...components],
  exports: [
    ...components,
    MatButtonModule,
    MatCheckboxModule, 
    MatGridListModule, 
    MatSidenavModule, 
    MatInputModule, 
    MatSnackBarModule
  ]
})
export class SharedModule { }
