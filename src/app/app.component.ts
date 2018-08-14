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
  constructor() {
    if (window.innerWidth > 578) {
      this.co = 4
    }
    if (window.innerWidth > 478 && window.innerWidth < 578) {
      this.co = 9
    }
   }
  title = 'app';
  co = 9;

  ngOnInit(){
    window.addEventListener('resize', ()=>{
      var t:any = document.querySelector("#de")

      if (window.innerWidth > 578) {
        this.co = 4
      }
      if (window.innerWidth > 478 && window.innerWidth < 578) {
        this.co = 2
      }
      

    })
  }
  getDepth(outlet){
    return  outlet.activatedRouteData.depth || null;
  }
}
