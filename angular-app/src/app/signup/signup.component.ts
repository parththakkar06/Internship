import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  imports: [ReactiveFormsModule,NgIf],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  profileForm = new FormGroup({
    name :new FormControl('',[Validators.required]),
    password : new FormControl('',[Validators.required,Validators.minLength(5)]),
    email : new FormControl('',[Validators.required,Validators.maxLength(50),Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$')])
  })

  onSubmit(){
    console.log(this.profileForm.value);
    
  }

  get name(){
    return this.profileForm.get('name')
  }

  get password(){
    return this.profileForm.get('password')
  }

  get email(){
    return this.profileForm.get('email')
  }
  // setValue(){
  //   this.profileForm.setValue({
  //     name : 'alice',
  //     password : '12321',
  //     email : 'alice@test.com'
  //   })
  // }
}
