import { Component, OnInit, ViewChild,  } from '@angular/core';
import { routerTransition } from './module/animation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [routerTransition]

})
export class AppComponent implements OnInit {
  showFiller = false;
  spinner = true;
  phoneSize = false;
  @ViewChild('drawer') drawer;
  constructor() {
    window.scrollTo(0, 0);

    window.addEventListener('resize', () => {
      if (window.innerWidth <= 578) {
        this.phoneSize = true;
      } else {
        this.phoneSize = false;
      }
    });
    window.addEventListener('load', () => {
      setTimeout(() => {
        this.spinner = false;
      }, 100);
    });
   }
  ngOnInit() {
    if (window.innerWidth <= 578) {
      this.phoneSize = true;
    } else {
      this.phoneSize = false;
    }
    window.addEventListener('load', () => {
      setTimeout(() => {
        this.spinner = false;
      }, 100);
    });
  }

  getDepth(outlet) {
    return  outlet.activatedRouteData.depth || null;
  }
  tog() {
    document.body.style.overflow = 'auto';
  }
}
