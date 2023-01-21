import { Component,  Inject, HostListener } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { AuthserviceService } from 'src/app/services/authservice.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  windowScrolled: boolean=false;
  name=''
  prenom=''
  constructor(@Inject(DOCUMENT) private document: Document ,public share:AuthserviceService) {
    this.name=this.share.name
    this.prenom=this.share.prenom
  }

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
