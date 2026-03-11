import { afterNextRender, afterRender, Component, computed, effect, Signal, signal, ViewChild, viewChild, WritableSignal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { FormsModule } from '@angular/forms';
import { TodolistComponent } from './todolist/todolist.component';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';

@Component({
  selector: 'app-root',
  imports: [ UserComponent,HeaderComponent,RouterOutlet , SignupComponent, CommonModule, LoginComponent, FormsModule , TodolistComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  @ViewChild('user') UserComponent:any
  userName = "dynamic"


  onChange(val:string){
    this.userName = val
  }
  title = 'angular-app';
  
  counter = 0
  constructor(){
    afterRender(()=>{
      console.log("After Render",this.UserComponent.counter);
      
    })

    afterNextRender(()=>{
      console.log("AfterNextRender Called")
    })
  }

  updateCounter(){
    this.counter++
  }
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

  // count = 0;

  // increase() {
  //   console.log
  //   this.count++;
  // }

  // decrease() {
  //   this.count--;
  // }

  // reset() {
  //   this.count = 0;
  // }

  // handleCounter(val: string) {
  //   if (val == 'minus') {
  //     if (this.count != 0) {
  //       this.count--
  //     }
  //   } else if (val == 'plus') {
  //     this.count++
  //   } else {
  //     this.count = 0
  //   }
  // }



  // username = ""

  // getUserName(event : Event){
  //   this.username = (event.target as HTMLInputElement).value
  // }

  // setUserName(){
  //   this.username = "Peter"
  // }

  // getUserNameWithTemplate(value:string){
  //   console.log(value)
  // }

  // display = true
  // value = 10
  // displayOneDiv = true

  // hide(){
  //   this.display = false
  // }

  // show(){
  //   this.display = true
  // }

  // toggle(){
  //   this.display = !this.display
  // }

  // toggleDiv(){
  //   this.displayOneDiv = !this.displayOneDiv
  // }

  // color = "peach"

  // handleColor(val:string){
  //   this.color = val
  // }

  // changeColor(event : Event){
  //   this.color = (event.target as HTMLInputElement).value
  // }


  // users = ['Ram', 'Shyam', 'Raj', 'Rahul', 'Rudra']

  // students = [
  //   { name: 'Ram', age: 20, email: "Ram@gmail.com" },
  //   { name: 'Shyam', age: 20, email: "Shyam@gmail.com" },
  //   { name: 'Raj', age: 20, email: "Raj@gmail.com" },
  //   { name: 'Rahul', age: 20, email: "Rahul@gmail.com" },
  //   { name: 'Rudra', age: 20, email: "Rudra@gmail.com" }
  // ]

  // getName(name: string) {
  //   console.log(name)
  // }

  // handleEvent(event: Event) {
  //   // console.log("function called" , event.type);
  //   console.log((event.target as HTMLInputElement).value);

  // }


  // data = 100
  // count = signal(10)

  // constructor() {
  //   effect(() => {
  //     console.log(this.count());

  //   })
  // }

  // updateValue(val: string) {
  //   // this.count.set(20)
  //   if(val == 'inc'){
  //     this.count.set(this.count()+1)
  //   }else{
  //     this.count.set(this.count()-1)
  //   }
  // }

  // data = signal<number | string>(10)
  // data:WritableSignal<number> = signal(10)
  // coun : Signal<number> =computed(()=>20)

  // updateValue(){
  //   // this.data.set("ello")
  //   this.data.update(val => val + 10)
  // }


  // x = signal(20)
  // y = signal(30)
  // z = computed(()=>this.x() + this.y())

  // updateValues(){
  //   console.log(this.z());
  //   this.x.set(100)
  //   console.log(this.z())
  // }

  // updateXValue(){
  //   this.x.set(1000)
  // }

//   userName = signal('Anil')
//   count = signal(0)
//   displayHeading = false

//   constructor(){
//     effect(()=>{
//       if(this.count()==2){
//         this.displayHeading = true
//         setTimeout(() => {
//         this.displayHeading = false
//         }, 2000);
//       }else{
//         this.displayHeading = false
//       }
//     })
//   }

//   toggleValue(){
//     // this.displayHeading = !this.displayHeading
//     this.count.set(this.count()+1)
//   }
//  users = [ 'Rio' , 'Berlin' , 'Tokyo' , 'Italy' , 'Amsterdam' , 'Washington' , 'Mexico']
  //users = []

  // name = ""

  // changeName(event : Event){
  //   const val = (event.target as HTMLInputElement).value
  //   this.name = val
  // }


  // bgColor = "green"
  // fontSize = "30"
  // headingSizeBig = "80px"
  // headingSizeSmall = "30px"

  // zoom = true

  // updateHeadingSize(){
  //   this.zoom = !this.zoom
  // }  

  // students = ['aron','mitchel','daryl','sam','tony']

  // employees = [
  //   {
  //     name : 'mit',
  //     age : 20,
  //     email : "mit@test.com"
  //   },
  //   {
  //     name : 'smit',
  //     age : 23,
  //     email : "smit@test.com"
  //   },
  //   {
  //     name : 'darsh',
  //     age : 25,
  //     email : "darsh@test.com"
  //   },
  //   {
  //     name : 'ram',
  //     age : 28,
  //     email : "ram@test.com"
  //   },
  //   {
  //     name : 'deep',
  //     age : 21,
  //     email : "deep@test.com"
  //   },
  //   {
  //     name : 'ak',
  //     age : 27,
  //     email : "ak@test.com"
  //   },
  //   {
  //     name : 'Finch',
  //     age : 22,
  //     email : "finch@test.com"
  //   },
  //   {
  //     name : 'aaron',
  //     age : 25,
  //     email : "aaron@test.com"
  //   }
  // ]

  // login = false

  // block = 0

  // update(){
  //   this.block++;
  // }

  color = "black"

  changeColor(color:string){
    this.color = color
  }
}
