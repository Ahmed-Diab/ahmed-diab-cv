import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
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

  constructor() { 
    window.addEventListener('resize', ()=>{
      if (window.innerWidth <= 578) {
        this.col = 1;
      }else{
        this.col = 2;
  
      }
    })
  }

  ngOnInit() {

    if (window.innerWidth <= 578) {
      this.col = 1;
    }else{
      this.col = 2;

    }
  }


  matcher = new MyErrorStateMatcher();
  sendMessage(){
    let message = {
      name:this.name,
      email:this.email,
      message:this.message
    }
    if(this.email == undefined || this.name == undefined || this.message == undefined){
      console.log("eroor")
    }else{
      console.log(message)
    }
  }

} 
