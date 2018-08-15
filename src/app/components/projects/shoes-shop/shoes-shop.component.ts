import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shoes-shop',
  templateUrl: './shoes-shop.component.html',
  styleUrls: ['./shoes-shop.component.scss']
})
export class ShoesShopComponent implements OnInit {

  constructor() { }

  images = [ 'home.png', 'login.png', 'register.png', 'cart.png', 'product-info.png', 'contact.png']

  ngOnInit() {
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
