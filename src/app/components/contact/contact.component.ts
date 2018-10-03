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
  sendingMessage:boolean = false;
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
      if (window.innerWidth <= 778) {
        this.col = 1;
      }else{
        this.col = 2;
      }
    })
  }
  ngOnInit() {
    this._title.setTitle('Ahmed | Contact')
    this._meta.addTag({name:"description", content:'contact With MEAN Stack dev'})
    if (window.innerWidth <= 778) {
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
      this.sendingMessage = true;
      this._http.post('/message', message).subscribe((res:any)=>{
        if (res.success) {
          this.sendingMessage = false
          this.email = '';
          this.name = undefined;
          this.message = undefined;
          this._snackBar.open(res.MSG, 'Undo', {duration: 3000})
        }else{
          this.sendingMessage = false
          this._snackBar.open(res.errMSG, 'Undo', {duration: 3000});
        }
      },
      (err)=>{
        this._snackBar.open(err.message, 'Undo', {duration: 5000});
        this.sendingMessage = false;
      })
    }
  }

} 
