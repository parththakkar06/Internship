import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private userSubject = new BehaviorSubject<any>(null)
  users = this.userSubject.asObservable()
  constructor(private http : HttpClient) { }

  loadUser(){
    this.http.get('http://localhost:3000/user/me',{withCredentials : true})
    .subscribe({
      next:(res:any)=>{
        this.userSubject.next(res.user)
      },
      error:()=>{
        this.userSubject.next(null)
      }
    })
  }

  setUser(user:any){
    this.userSubject.next(user)
  }
  
}
