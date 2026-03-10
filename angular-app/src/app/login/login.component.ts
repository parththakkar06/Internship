import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  name = new FormControl('212asasd')
  password = new FormControl('111')

  displayValue(){
    console.log(this.name.value)
    console.log(this.password.value)
  }

  setValues(){
    this.name.setValue('spidey')
    this.password.setValue('ayooooooooo')
  }
}
