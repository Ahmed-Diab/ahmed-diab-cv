import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { Meta, Title } from '@angular/platform-browser';
import { Message } from '../../module/message';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material';
import { ValidateService } from '../../services/validate.service';
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
  nameFormControl = new FormControl('', [
    Validators.required,
  ]);
  messageFormControl = new FormControl('', [
    Validators.required,
  ]);

  col:number = 2;
  name:string;
  message:string;
  email:string;

  constructor(
    private _title:Title,
    private _meta:Meta,
    private _http:HttpClient,
    private _snackBar:MatSnackBar,
    private _validate:ValidateService
    
  ) { 
    window.addEventListener('resize', ()=>{
      if (window.innerWidth <= 578) {
        this.col = 1;
      }else{
        this.col = 2;
  
      }
    })
  }
  ngOnInit() {
    this._title.setTitle('Ahmed | Contact')
    this._meta.addTag({name:"description", content:'hello i am ahmed i am amean stake dev'})
    if (window.innerWidth <= 578) {
      this.col = 1;
    }else{
      this.col = 2;

    }
  }

  matcher = new MyErrorStateMatcher();
  sendMessage(){
    let message:Message = {
      name:this.name,
      email:this.email,
      message:this.message
      }
    if(this.emailFormControl.hasError('email') || this.emailFormControl.hasError('required') || this.nameFormControl.hasError('required') || this.messageFormControl.hasError('required')){
      this._snackBar.open('plz check message form', 'Undo', {duration: 3000});
    }
    if (!this._validate.validateEmail(this.email)) {
      this._snackBar.open('plz enter valide email', 'Undo', {duration: 3000});

    }
    else{
      this._http.post('/message', message).subscribe((res:any)=>{
        if (res.success) {
          this.email = '';
          this.name = undefined;
          this.message = undefined;
          this._snackBar.open(res.MSG, 'Undo', {duration: 3000})
        }else{
          this._snackBar.open(res.errMSG, 'Undo', {duration: 3000});
        }
      })
    }
  }

} 
