import { Component, OnInit, Renderer2, AfterViewInit, Input, ViewChild } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-shoes-shop',
  templateUrl: './shoes-shop.component.html',
  styleUrls: ['./shoes-shop.component.scss']
})
export class ShoesShopComponent implements OnInit, AfterViewInit {
  col = 4;
  row = '1:1'
  loading: boolean = true;
  loading2: boolean = true;
  vid: boolean = true;
  @ViewChild('overlayImage') overlayImage;
  @ViewChild('overlayvideo') overlayvideo;
  @ViewChild('overlay') overlay;
  constructor(
    private _renderer2:Renderer2
  ) { }
  
  images = [ 
    {
      src:'home.png', alt:'home page image for shoes shop', title:"home page"
    },
    {
      src:'login.png', alt:'login page image for shoes shop', title:"login page"
    },
    {
      src:'register.png', alt:'register page image for shoes shop', title:"register page"
    },
    {
      src:'cart.png', alt:'cart page image for shoes shop', title:"cart page"
    },
    {
      src:'product-info.png', alt:'product info page image for shoes shop', title:"product info page"
    },
    {
      src:'contact.png', alt:'contact page image for shoes shop', title:"contact page"
    }]


    videos:Array<object> =[
      {src:'shoes-shop.mp4', poster:'home.png'}
    ]
    ngAfterViewInit(){

    }
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
    window.scrollTo(0,0)
    this.vid = false;
    setTimeout(() => {
      let image = i.src
      let alt = i.alt
      this._renderer2.setAttribute(this.overlayImage.nativeElement, 'src', `/${image}`)
      this._renderer2.setAttribute(this.overlayImage.nativeElement, 'alt', `${alt}`)
      this._renderer2.addClass(this.overlay.nativeElement, 'enterOveraly')
    }, 300);


  }
  seeOverVid(v){
    window.scrollTo(0,0)

    this.loading2 = false;
    this.vid = true;
    setTimeout(()=>{
      let src = v.src;
      let poster = v.poster;
      this._renderer2.setAttribute(this.overlayvideo.nativeElement, 'src', `/${src}`)
      this._renderer2.setAttribute(this.overlayvideo.nativeElement, 'poster', `/${poster}`)

      this._renderer2.addClass(this.overlay.nativeElement, 'enterOveraly')
    }, 300)


 
  }
  hideOverlay(){
    this._renderer2.removeClass(this.overlay.nativeElement, 'enterOveraly')
    this.loading2 = true;
  }


  imgLoding(){
    setTimeout(()=>{
      this.loading = false;
    }, 100)
  }

  imgLoding2(){
    setTimeout(()=>{
      this.loading2 = false;

    }, 100)
  }
}
