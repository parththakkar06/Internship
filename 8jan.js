//Advanced JS

//event loop

// console.log("1")

// setTimeout(() => {
//     console.log("2")
//     Promise.resolve().then(()=>{
//         console.log("3")
//     }).then(()=>{
//         console.log("4")
//     })    
// }, 0);

// Promise.resolve().then(()=>{
//     console.log("5")
// }).then(()=>{
//     console.log("6")
// })

// console.log("7")

// //1  7  5  6  2  3  4

// const user = {
//     name : "arjun",
//     greet(){
//         console.log(this.name)
//     }
// }

// user.greet()

// const fn = user.greet
// fn()

// const user1 = {
//     name : 'sid',
//     greet: ()=>{
//         console.log(this.name)
//     }
// }

// user1.greet()

// function greet(city){
//     console.log(this.name,city)
// }

// greet.call({name:"someone"}, "Ahmedabad")
// greet.apply({name: 'Bobby'}, ["Maharashtra"])

// const bound = greet.bind({name:"Millie"})
// bound("USA")

// function Parent(name){
//     this.name = name
// }

// Parent.prototype.sayHi = function(){
//     console.log("Hi , " + this.name)
// }

// const child = new Parent('dc')

// function Person(name) {
//   this.name = name;
// }

// Person.prototype.sayHi = function () {
//   console.log("Hi " + this.name);
// };

// const p1 = new Person("Bob");


// function debounce(fn, delay) {
//   let timer;

//   return function (...args) {
//     clearTimeout(timer);

//     timer = setTimeout(() => {
//       fn(...args);
//     }, delay);
//   };
// }


// // form with validaton

// const form = document.getElementById("registerForm")

// const username = document.getElementById("userName")
// const password = document.getElementById("password")
// const email = document.getElementById("email")
// const confirmPassword = document.getElementById("confirmPassword")

// function showError(id,message){
//     document.getElementById(id).innerHTML = message;
// }

// function clearError() {
//     document.querySelectorAll(".error").forEach(element => {
//         element.innerHTML = ""
//     });
// }

// function isValidEmail(email){
//     return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
// }

// form.addEventListener("submit",(e)=>{
//     e.preventDefault()
    
//     clearError()

//     let isValid = true;
    
//     if(username.value.trim().length < 3){
//         showError("userNameError","User Name should be longer than 3 characters")
//         isValid = false;
//     }
    
//     if(!isValidEmail(email.value.trim())){
//         showError("emailError","Enter a valid Email Id")
//         isValid = false;
//         // console.log(isValid)
//     }

//     if(password.value.trim().length < 6){
//         showError("passwordError","Enter a password longer than 6 characters")
//         isValid = false;
//         // console.log(isValid)
//     }

//     if(password.value !== confirmPassword.value){
//         showError("confirmPasswordError","Passwords do not match")
//         isValid = false;
//     }

//     // console.log(isValid)

//     if(isValid){
//         console.log("Username...",username.value)
//         console.log("Email...",email.value)
//         console.log("Password...",password.value)
//         console.log("Confirm Password...",confirmPassword.value)
//         alert("Registration Successfull")
//         form.reset()
    
// }})



function doTask(callback){
    setTimeout(() => {
        callback("Task Done");
    }, 1000);
}

doTask((result)=>{
    console.log("Result")
})