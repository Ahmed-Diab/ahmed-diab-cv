import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor(
    iconRegistry: MatIconRegistry,
    sanitizer: DomSanitizer
  ) {
    iconRegistry.addSvgIcon(
      'githubFooter',
      sanitizer.bypassSecurityTrustResourceUrl('../../assets/svg/github_footer.svg'));
    iconRegistry.addSvgIcon(
      'twitter',
      sanitizer.bypassSecurityTrustResourceUrl('../../assets/svg/twitter.svg'));
    iconRegistry.addSvgIcon(
      'linkedin',
      sanitizer.bypassSecurityTrustResourceUrl('../../assets/svg/linkedin.svg'));
   }

  ngOnInit() {
  }

}
