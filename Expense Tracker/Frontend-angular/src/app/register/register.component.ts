import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { UserService } from '../services/user.service';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgIf } from '@angular/common';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule , NgIf],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  constructor(private http:HttpClient , private authService : AuthService,private userService : UserService, private route : Router){}

  ngOnInit(){
    if(this.authService.userSubject.value){
      this.route.navigate(['/home'])
    }
  }

  registerForm = new FormGroup({
    name : new FormControl('',[Validators.required]),
    age : new FormControl('',[Validators.required,Validators.min(18), Validators.max(60)]),
    email : new FormControl('',[Validators.required, Validators.email]),
    password : new FormControl('',[Validators.required , Validators.minLength(6)])
  })
  
  onSubmit(){
    console.log(this.registerForm.value)
    this.userService.register(this.registerForm.value).subscribe(()=>{
      this.route.navigate(['/login'])
    })
  }

  get name(){
    return this.registerForm.get('name')
  }

  get email(){
    return this.registerForm.get('email')
  }

  get password(){
    return this.registerForm.get('password')
  }

  get age(){
    return this.registerForm.get('age')
  }

}
