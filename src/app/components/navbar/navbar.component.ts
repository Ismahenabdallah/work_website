import { Component,  Inject, HostListener } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  windowScrolled: boolean=false;
  constructor(@Inject(DOCUMENT) private document: Document) {}
  @HostListener("window:scroll", [])
  onWindowScroll() {
      if (window.pageYOffset || this.document.documentElement.scrollTop || this.document.body.scrollTop > 100) {
          this.windowScrolled = true;
      }


     else if (this.windowScrolled && window.pageYOffset || this.document.documentElement.scrollTop || this.document.body.scrollTop < 10) {
          this.windowScrolled = false;
      }

  }
}
