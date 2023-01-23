import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../environments/environment';
const endpoint = 'https://jsonplaceholder.typicode.com/posts';
@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  url = environment.urlBackend;
  token:any=localStorage.getItem('token')
  header=new HttpHeaders().set('authorization',this.token)
  constructor(private http: HttpClient) {}
  getAllPosts() {
    return this.http.get(endpoint);
  }
  getAllusers(){
    return  this.http.get(`${this.url}/all` ,  {headers:this.header})
   }

  updateProfil( data:any){
    return  this.http.patch(`${this.url}/updateprofil`, data , {headers:this.header})
  }

  getProfil(){
    return this.http.get(`${this.url}/getprofil`, {headers:this.header});

  }

}
