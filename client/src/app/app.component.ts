import { Component } from '@angular/core';
import {  Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'workeep';
  public href: string = "";
  public currentRoute: string=""
  constructor(private router:Router,) {

    console.log(this.router.url); // return always => /
    this.router.events
    .pipe(filter( (event: any) => event instanceof NavigationEnd))
    .subscribe((e) => {
      this.currentRoute = e.url;
              console.log(this.currentRoute);

    }
    )
}

   }



