import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
const endpoint = 'https://jsonplaceholder.typicode.com/posts';
@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor(private http: HttpClient) {}
  getAllPosts() {
    return this.http.get(endpoint);
  }
}
