import { Injectable } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { AuthserviceService } from '../services/authservice.service';

@Injectable({
  providedIn: 'root'
})
export class GuardUserGuard implements CanActivate {
  constructor(private share:AuthserviceService,
    private router:Router,
    private toastr: ToastrService,
    private arouter:ActivatedRoute,
    ){

  }
  canActivate(route: ActivatedRouteSnapshot,state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {



    return new Promise((resolve,reject)=>{
      if(this.share.guardAUthUser()==true){
      resolve(true)

    }
    else{
      this.router.navigate(['/login'])
      localStorage.removeItem('token')
      resolve(false)
      //this.toastr.error('no access  ..! ')


    }

    })

  }

}
