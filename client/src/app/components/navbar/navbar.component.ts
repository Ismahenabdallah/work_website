import { Component,  Inject, HostListener } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { AuthserviceService } from 'src/app/services/authservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  windowScrolled: boolean=false;
  name=''
  prenom=''

  email=""

  constructor(@Inject(DOCUMENT) private document: Document ,public share:AuthserviceService , private r :Router) {

   if(this.share.LoggedIn()){
    this.name=this.share.getProfile().nom

    this.prenom=this.share.getProfile().prenom
    this.email=this.share.getProfile().email

   }
  }



  logout(){
    localStorage.removeItem('token')
    this.r.navigate(['/login'])
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
