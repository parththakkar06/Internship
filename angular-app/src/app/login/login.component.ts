import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  name = new FormControl('212asasd')
  password = new FormControl('111')

  constructor(private authService : AuthService){}
  displayValue(){
    console.log(this.name.value)
    console.log(this.password.value)
  }

  setValues(){
    this.name.setValue('spidey')
    this.password.setValue('ayooooooooo')
  }

  loginUser(){
    this.authService.login("user")
  }

  loginAdmin(){
    this.authService.login("admin")
  }
}
