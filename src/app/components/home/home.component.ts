import { Component, OnInit } from '@angular/core';
import { Title, Meta, DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  col = 2;
  constructor(
    private _title: Title,
    private _meta: Meta,
    iconRegistry: MatIconRegistry,
    sanitizer: DomSanitizer
  ) {  window.addEventListener('resize', () => {
      if (window.innerWidth <= 778) {
        this.col = 1;
      } else {
        this.col = 2;
      }
    });

    iconRegistry.addSvgIcon(
      'angular',
      sanitizer.bypassSecurityTrustResourceUrl('../../assets/svg/angular.svg'));
      iconRegistry.addSvgIcon(
        'node',
        sanitizer.bypassSecurityTrustResourceUrl('../../assets/svg/nodejs.svg'));
        iconRegistry.addSvgIcon(
          'boostrap',
          sanitizer.bypassSecurityTrustResourceUrl('../../assets/svg/boostrap.svg'));
        iconRegistry.addSvgIcon(
          'sass',
          sanitizer.bypassSecurityTrustResourceUrl('../../assets/svg/sass.svg'));
        iconRegistry.addSvgIcon(
          'html',
          sanitizer.bypassSecurityTrustResourceUrl('../../assets/svg/html.svg'));
        iconRegistry.addSvgIcon(
          'css',
          sanitizer.bypassSecurityTrustResourceUrl('../../assets/svg/css3.svg'));
        iconRegistry.addSvgIcon(
          'js',
          sanitizer.bypassSecurityTrustResourceUrl('../../assets/svg/js.svg'));
        iconRegistry.addSvgIcon(
          'ts',
          sanitizer.bypassSecurityTrustResourceUrl('../../assets/svg/ts.svg'));
        iconRegistry.addSvgIcon(
          'grunt',
          sanitizer.bypassSecurityTrustResourceUrl('../../assets/svg/grunt.svg'));
        iconRegistry.addSvgIcon(
          'mongo',
          sanitizer.bypassSecurityTrustResourceUrl('../../assets/svg/mongo.svg'));
        iconRegistry.addSvgIcon(
          'github',
          sanitizer.bypassSecurityTrustResourceUrl('../../assets/svg/github.svg'));
          iconRegistry.addSvgIcon(
            'git',
            sanitizer.bypassSecurityTrustResourceUrl('../../assets/svg/git.svg'));
      }


  ngOnInit() {
    window.scrollTo(0, 0);
    if (window.innerWidth <= 778) {
      this.col = 1;
    } else {
      this.col = 2;
    }
    this._title.setTitle('Ahmed | Home');
    this._meta.addTag({name: 'description', content: 'hello i am ahmed i am a MEAN stack dev'});
  }

}
