import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthserviceService } from '../services/authservice.service';

@Injectable({
  providedIn: 'root'
})
export class GuardAuthGuard implements CanActivate {
  constructor(private share:AuthserviceService,private router:Router){

  }
  canActivate(route: ActivatedRouteSnapshot,state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {




    return new Promise((resolve,reject)=>{
      if(this.share.LoggedIn()==true){
      resolve(true)
    }
    else{
      this.router.navigate(['/login'],)
      localStorage.removeItem('token')
      resolve(false)

    }

    })

  }

}
