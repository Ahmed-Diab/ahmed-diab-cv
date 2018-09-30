import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  col:number = 2;
  constructor(
    private _title:Title,
    private _meta:Meta
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
    if (window.innerWidth <= 778) {
      this.col = 1;
    }else{
      this.col = 2;
    }
    this._title.setTitle('Ahmed | Home')
    this._meta.addTag({name:"description", content:'hello i am ahmed i am a MEAN stack dev'})
  }

}
