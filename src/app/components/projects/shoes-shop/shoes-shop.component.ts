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

  images = [ 'home.png', 'login.png', 'register.png', 'cart.png', 'product-info.png', 'contact.png']

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
    var overlay = document.querySelector('.overlay')
    var overlayImage = document.querySelector('#overlayImage')
    overlayImage.setAttribute('src', `/${i}`)
    overlay.classList.add('enterOveraly');

  }
  hideOverlay(){
    var overlay = document.querySelector('.overlay')
    overlay.classList.remove('enterOveraly')
  }

}
