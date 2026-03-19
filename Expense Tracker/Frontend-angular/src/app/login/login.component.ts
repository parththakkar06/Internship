import { Component, NgModule } from '@angular/core';
import { UserService } from '../services/user.service';
import { FormsModule, NgForm, NgModel } from '@angular/forms';
import { CommonModule, NgIf } from '@angular/common';
import { AuthService } from '../services/auth.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [NgIf,FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  constructor(private userService : UserService , private authService : AuthService, private route : Router){}

  ngOnInit(){
    if(this.authService.userSubject.value){
      this.route.navigate(['/home'])
    }
  }
  
  userDetails:any
  sendDetails(val:NgForm){
    console.log(val);
    this.userDetails=val
    this.loginUser(this.userDetails)
  }

  loginUser(userDetails:any){
    this.userService.login(userDetails).subscribe(()=>{
      this.authService.loadUser().subscribe(()=>{
        this.route.navigate(['/home'])
      })
    })
  }
}
