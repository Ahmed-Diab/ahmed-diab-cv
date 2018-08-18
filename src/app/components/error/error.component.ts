import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss']
})
export class ErrorComponent implements OnInit {

  constructor(
    private _title:Title,
    private _meta:Meta
  ) { }

  ngOnInit() {
    this._title.setTitle('Ahmed | Error')
    this._meta.addTag({name:"description", content:'hello i am ahmed i am amean stake dev'})
  }

}
