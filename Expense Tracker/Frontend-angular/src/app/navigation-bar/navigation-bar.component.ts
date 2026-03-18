import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'tops',
  imports: [RouterLink , RouterLinkActive],
  templateUrl: './navigation-bar.component.html',
  styleUrl: './navigation-bar.component.css'
})
export class NavigationBarComponent {

  constructor(private http : HttpClient , private authService : AuthService , private route : Router){}
  logout(){
    this.http.post('http://localhost:3000/user/logout',{},{withCredentials :true})
    .subscribe(()=>{
      this.authService.setUser(null)
      this.route.navigate(['/login'])
    })
  }
}
