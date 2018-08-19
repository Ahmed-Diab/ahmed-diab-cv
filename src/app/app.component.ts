import { Component, OnInit,  } from '@angular/core';
import { routerTransition } from './module/animation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations:[routerTransition]

})
export class AppComponent implements OnInit {
  showFiller = false;
  spinner:boolean = true
  constructor() {
    window.addEventListener("load", ()=>{
      setTimeout(()=>{
        this.spinner = false;
      }, 100)
    })
   }
  ngOnInit(){
    window.addEventListener("load", ()=>{
      setTimeout(()=>{
        this.spinner = false;
      }, 100)
    })
  }

  getDepth(outlet){
    return  outlet.activatedRouteData.depth || null;
  }
}
