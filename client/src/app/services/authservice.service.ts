import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { JwtHelperService } from '@auth0/angular-jwt';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
@Injectable({
  providedIn: 'root',
})
export class AuthserviceService {
  url = environment.urlBackend;

  helper = new JwtHelperService();
  profil = {
    _id: '',
    email: '',
    status: '',
    isAdmin: '',
    worksAt: '',
    livesIn: '',
    relationship: '',
    role:""
  };
  constructor(
    private http: HttpClient,
    private r: Router,
    private toastr: ToastrService,
    private arouter:ActivatedRoute,
  ) {}

  login(data: any) {
    return this.http.post(`${this.url}/login`, data);
  }
  saveData(token: any) {
    //  let decodeToken= this.helper.decodeToken(token)

    localStorage.setItem('token', token);
  }

  getProfile() {
    let token: any = localStorage.getItem('token');
    let decodeToken = this.helper.decodeToken(token);
    this.profil._id = decodeToken._id;
    this.profil.email = decodeToken.email;
    this.profil.status = decodeToken.status;


    return this.profil;
  }
  name=''
  prenom=""
  getName(){
    let token: any = localStorage.getItem('token');
    let decodeToken = this.helper.decodeToken(token);
    this.name=decodeToken.nom
     this.prenom=decodeToken.prenom

    return this.name , this.prenom
  }


  verifStatus(){
    let token: any = localStorage.getItem('token');
    let decodeToken = this.helper.decodeToken(token);



    if (decodeToken.status === 'Desactive') {
      this.r.navigate(['/login']);
    }

    return true
  }


  LoggedIn(){
    let token:any=localStorage.getItem('token')



    if(!token){
     return false
    }
    let expire=this.helper.isTokenExpired(token)

    if(expire){
      return false
    }

    return true
 }


  register(data: any) {
    return this.http.post(`${this.url}/register`, data);
  }
}

