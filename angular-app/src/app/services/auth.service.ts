import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  login(role:string){
    localStorage.setItem("token","12345TOKEN")
    localStorage.setItem("role",role)
  }

  logout(){
    localStorage.removeItem("token")
    localStorage.removeItem("role")
  }

  isLoggedIn(){
    return !!localStorage.getItem("token")
  }

  getRole(){
    return localStorage.getItem("role")
  }
}
