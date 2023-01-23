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
    nom:"",
    prenom:"",
    photo: '',
    telephone: '',
    objectif: '',
    cv: '',
    numbre_apply:[],
    status:"",
    adresse:""
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


    localStorage.setItem('token', token);
  }

  getProfile() {
    let token: any = localStorage.getItem('token');
    let decodeToken = this.helper.decodeToken(token);
    this.profil._id = decodeToken._id;
    this.profil.email = decodeToken.email;
    this.profil.nom = decodeToken.nom;
    this.profil.prenom = decodeToken.prenom;
    this.profil.cv = decodeToken.cv;
    this.profil.numbre_apply = decodeToken.numbre_apply;
    this.profil.objectif = decodeToken.objectif;
    this.profil.photo = decodeToken.photo;
    this.profil.telephone = decodeToken.telephone;
    this.profil.status = decodeToken.status;
    this.profil.adresse = decodeToken.adresse;
    //console.log(decodeToken)

    return this.profil;
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

