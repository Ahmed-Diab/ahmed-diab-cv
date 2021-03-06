import { Component, OnInit, Renderer2, AfterViewInit, Input, ViewChild } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import {animate, animateChild, group, query as q, sequence, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-shoes-shop',
  templateUrl: './shoes-shop.component.html',
  styleUrls: ['./shoes-shop.component.scss']
})
export class ShoesShopComponent implements OnInit, AfterViewInit {
  col = 4;
  row = '1:1';
  loading = true;
  loading2 = true;
  @ViewChild('overlayImage') overlayImage;
  @ViewChild('overlay') overlay;
  constructor(
    private _renderer2: Renderer2
  ) {
    if (window.innerWidth >= 578) {
      this.col = 2;
      this.row = '1:.8';

    }if (window.innerWidth >= 992) {
      this.row = '1:.7';
      this.col = 3;
    }if (window.innerWidth >= 1200) {
      this.row = '1:.8';
      this.col = 4;
    }if (window.innerWidth < 578) {
      this.row = '1:.8';
      this.col = 2;
    }
   }
  images = [
    {
      src: '../../../../assets/images/home.png', alt: 'home page image for shoes shop', title: 'home page'
    },
    {
      src: '../../../../assets/images/login.png', alt: 'login page image for shoes shop', title: 'login page'
    },
    {
      src: '../../../../assets/images/register.png', alt: 'register page image for shoes shop', title: 'register page'
    },
    {
      src: '../../../../assets/images/cart.png', alt: 'cart page image for shoes shop', title: 'cart page'
    },
    {
      src: '../../../../assets/images/product-info.png', alt: 'product info page image for shoes shop', title: 'product info page'
    },
    {
      src: '../../../../assets/images/contact.png', alt: 'contact page image for shoes shop', title: 'contact page'
    }];
    ngAfterViewInit() {

    }
  ngOnInit() {
    window.addEventListener('resize', () => {
      if (window.innerWidth >= 578) {
        this.col = 2;
        this.row = '1:.8';

      }if (window.innerWidth >= 992) {
        this.row = '1:.7';
        this.col = 3;
      }if (window.innerWidth >= 1200) {
        this.row = '1:.8';
        this.col = 4;
      } if (window.innerWidth < 578) {
        this.row = '1:.8';
        this.col = 2;
      }
    });
  }
  seeOverlay(i) {
    window.scrollTo(0, 0);
    document.body.style.overflow = 'hidden';
    const over = document.querySelector('.overlayWindow');
    this._renderer2.setStyle(over, 'height', window.innerHeight + 'px');
    setTimeout(() => {
      const image = i.src;
      const alt = i.alt;
      this._renderer2.setAttribute(this.overlayImage.nativeElement, 'src', `/${image}`);
      this._renderer2.setAttribute(this.overlayImage.nativeElement, 'alt', `${alt}`);
      this._renderer2.addClass(this.overlay.nativeElement, 'enterOveraly');
      this._renderer2.setStyle(over, 'transform', 'translateY(0%)');

    }, 300);

  }
  hideOverlay() {
    this._renderer2.removeClass(this.overlay.nativeElement, 'enterOveraly');
    this.loading2 = true;
    document.body.style.overflow = 'auto';
    this._renderer2.setStyle(this.overlay.nativeElement, 'transform', 'translateY(-100%)');

  }


  imgLoad(event) {
   this._renderer2.addClass(event.target.nextElementSibling, 'spinnerOut');
  //  setTimeout(() => {
  //   this._renderer2.setStyle(event.target.nextElementSibling, 'display', 'none');
  //   // event.target.nextSibling.style.display = 'none';
  //  }, 2000);
  }

  imgLoding2() {
    setTimeout(() => {
      this.loading2 = false;
    }, 100);
  }
}
