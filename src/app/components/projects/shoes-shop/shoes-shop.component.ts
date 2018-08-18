import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shoes-shop',
  templateUrl: './shoes-shop.component.html',
  styleUrls: ['./shoes-shop.component.scss']
})
export class ShoesShopComponent implements OnInit {

  col = 4;
  row = '1:1'
  constructor() { }

  images = [ 
    {
      image:'home.png', alt:'home page image for shoes shop', dis:"home page"
    },
    {
      image:'login.png', alt:'login page image for shoes shop', dis:"login page"
    },
    {
      image:'register.png', alt:'register page image for shoes shop', dis:"register page"
    },
    {
      image:'cart.png', alt:'cart page image for shoes shop', dis:"cart page"
    },
    {
      image:'product-info.png', alt:'product info page image for shoes shop', dis:"product info page"
    },
    {
      image:'contact.png', alt:'contact page image for shoes shop', dis:"contact page"
    }]
  ngOnInit() {
    window.addEventListener('resize', ()=>{
   
      if (window.innerWidth >= 578) {
        this.col = 2;
        this.row = "1:.8"

      }if (window.innerWidth >= 992) {
        this.row = "1:.7"
        this.col = 3
      }if(window.innerWidth >= 1200){
        this.row = "1:.8"
        this.col = 4
      } if(window.innerWidth < 578){
        this.row = "1:.8"
        this.col = 1
      }
    })
  }
  seeOverlay(i){
    var overlay = document.querySelector('.overlayWindow')
    var overlayImage = document.querySelector('#overlayImage')
    overlayImage.setAttribute('src', `/${i}`)
    overlay.classList.add('enterOveraly');

  }
  hideOverlay(){
    var overlay = document.querySelector('.overlayWindow')
    overlay.classList.remove('enterOveraly')
  }

}
