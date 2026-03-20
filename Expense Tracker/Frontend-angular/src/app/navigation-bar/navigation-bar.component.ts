import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { User } from '../interfaces/user';

@Component({
  selector: 'tops',
  imports: [RouterLink , RouterLinkActive , CommonModule],
  templateUrl: './navigation-bar.component.html',
  styleUrl: './navigation-bar.component.css'
})
export class NavigationBarComponent {

  users !: Observable< User | null > 
  constructor(private http : HttpClient , private authService : AuthService , private route : Router){
    // this.users = this.authService.users
  }
  
  ngOnInit(){
    this.users = this.authService.users
  }
  
  logout(){
    this.http.post('http://localhost:3000/user/logout',{},{withCredentials :true})
    .subscribe(()=>{
      this.authService.setUser(null)
      this.route.navigate(['/login',{replaceUrl : true}])
      this.authService.setUser(null)
    })
  }
}
