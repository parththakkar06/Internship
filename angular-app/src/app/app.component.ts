import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SignupComponent, CommonModule, LoginComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-app';
  // count = 0;
  // increase() {
  //   this.count++;
  // }
  // decrease() {
  //   this.count--;
  // }

  // isVisible = true
  // toggle(){
  //   this.isVisible = !this.isVisible;
  // }


  // name = "Parth"
  // age = 20

  // increaseAge() {
  //   this.age++;
  //   console.log("Clicked")
  // }

  // resetAge() {
  //   this.age = 20;
  // }

  // numbers = [1, 2, 3]

  // getSum() {
  //   console.log("Calculating...")
  //   return this.numbers.reduce((a, b) => a + b, 0)
  // }

  // isDisabled = true;
  // imageUrl = "https://in.pinterest.com/pin/artistic-wallpaper--621496817359389265/";


  // typedValue = ''
  // onInput(event : Event){
  //   const input = event.target as HTMLInputElement
  //   this.typedValue = input.value
  // }

  count = 0;

  increase() {
    console.log
    this.count++;
  }

  decrease() {
    this.count--;
  }

  reset() {
    this.count = 0;
  }

  handleCounter(val: string) {
    if (val == 'minus') {
      if (this.count != 0) {
        this.count--
      }
    } else if (val == 'plus') {
      this.count++
    } else {
      this.count = 0
    }
  }
}
