import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  login(credentials : object){
    return this.http.post('http://localhost:3000/user/login',credentials,{withCredentials : true})
  }

  register(credentials : object){
    return this.http.post('http://localhost:3000/user/users',credentials,{withCredentials : true})
  }
}
