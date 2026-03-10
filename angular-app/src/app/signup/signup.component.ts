import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-signup',
  imports: [ReactiveFormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  profileForm = new FormGroup({
    name :new FormControl('joey'),
    password : new FormControl('123'),
    email : new FormControl('joey@test.com')
  })

  onSubmit(){
    console.log(this.profileForm.value);
    
  }

  setValue(){
    this.profileForm.setValue({
      name : 'alice',
      password : '12321',
      email : 'alice@test.com'
    })
  }
}
