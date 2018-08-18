import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  col:number = 3;
  // row = '1:.5';

  projects = [
    {
      link:'/shoes-shop', 
      image:'../../../assets/images/small-home.png', 
      alt:'shoes shop app home page image',
      logoImage:'../../../assets/images/shoes-shop-logo.png',
      logoAlt:'../../../assets/images/shoes-shop-logo.png'
    }
  ]
  constructor(
    private _title:Title,
    private _meta:Meta
  ) { }

  
  ngOnInit() {
    this._title.setTitle('Ahmed | Projects')
    this._meta.addTag({name:"description", content:'hello i am ahmed i am amean stake dev'})


    window.addEventListener('resize', ()=>{
   
      if (window.innerWidth >= 578) {
        this.col = 2;
      }if (window.innerWidth >= 992) {
        this.col = 3
      }if(window.innerWidth >= 1200){
        this.col = 4
      } if(window.innerWidth < 578){
        this.col = 1
      }
    })

    if (window.innerWidth >= 578) {
      this.col = 2;

    }if (window.innerWidth >= 992) {
      this.col = 3
    }if(window.innerWidth >= 1200){
      this.col = 4
    } if(window.innerWidth < 578){
      this.col = 1
    }
  }

}
