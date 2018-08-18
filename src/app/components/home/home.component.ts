import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private _title:Title,
    private _meta:Meta
  ) { }

  ngOnInit() {
    this._title.setTitle('Ahmed | Home')
    this._meta.addTag({name:"description", content:'hello i am ahmed i am amean stake dev '})
  }

}
