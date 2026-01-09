// // let marks = [70, 80, 90]

// // const sum = marks.reduce((sum,num)=>{
// //     return sum + num;
// // })

// // const avg = marks.reduce((sum,num)=>{
// //     return sum + num;
// // })/marks.length

// // console.log(sum)
// // console.log(avg)

// // //Find max ele

// // let nums = [1,100,23,54,10,35,76]

// // const max = nums.reduce((a,b)=>{
// //     return a>b? a : b;
// // })

// // console.log(max)

// // // removing dups

// // let arr1 = [1,2,3,4,3,4,5,6,6,7,7,8]

// // const unique = [...new Set(arr1)]

// // console.log(unique)
// // // document.getElementById("p").innerHTML = unique.join()

// // //count occurances

// // const count = arr1.reduce((total, alp)=>{
// //     total[alp] = (total[alp] || 0) + 1;
// //     return total;
// // },{})

// // console.log(count)

// // // document.getElementById("p").innerHTML = JSON.stringify(count)

// // let msg = "hello world";

// // // convert to HELLO WORLD
// // // check if it includes "world"

// // console.log(msg.toUpperCase())
// // console.log(msg.includes("world"))



// // let str = "Technologia"
// // function reverseString(str){
// //     return str.split("").reverse().join("");
// // }
// // let revString = reverseString(str)
// // console.log(revString)


// // function countVowels(str){
// //     let vowels = "aeiou"
// //     let count = 0
// //     for(let char of str.toLowerCase()){
// //         if(vowels.includes(char)){
// //             count++;
// //         }
// //     }
// //     console.log(count)
// // }

// // countVowels("hellowithrespectlmaoooo")

// // function capitalize(sentence){
// //     return sentence.split("").map(word =>word[0].toUpperCase() + word.slice(1)).join("")
// // }

// // str4 = capitalize("gstisintheair")
// // console.log(str4)

// // //finding second largest in the array   

// // const secondLargest = [...new Set(arr1)].sort((a,b) => b-a)[1]
// // console.log(secondLargest)

// // //check if two strings are anagrams

// // const isAnagrams = (str1 , str2) => {
// //     const format = (str) => {
// //         str.toLowerCase().split("").sort().join("");
// //     }
// //     console.log(format(str1))
// //     console.log(format(str2))
// //     return format(str1) === format(str2)
// // }

// // console.log(isAnagrams("hello","world"))
// // console.log(isAnagrams("listen","silent"))
// // console.log(isAnagrams("get","ready"))

// // //cleaning mixed array

// // const mixedArr = [0 , 1, "", false, "", 2, 4, null]

// // const clean = mixedArr.filter(Boolean);
// // console.log(clean)


// // // longest word in the sentence

// // const sentence = "Honesty is the best policy"

// // const largestWord = sentence.split(" ").reduce((longest,word)=>
// //     word.length > longest.length ? word : longest,"")

// // console.log(largestWord)

// // // uppercase converting 

// // const words = ["js","react","node","angular"]

// // const upper = words.map(word=>word.toUpperCase())
// // console.log(upper)


// const car = {
//   brand: "BMW",
//   model: "X5",
//   year: 2023
// };

// // // print all values

// // console.log(car.brand)
// // console.log(car.model)
// // console.log(car.year)

// const student = {
//   name: "Arun",
//   marks: 80
// };

// // add grade
// // update marks
// // delete name

// console.log(student.name)
// console.log(student.marks)

// student.marks = 90
// student.grade = "A+"
// delete student.name

// console.log(student.marks)
// console.log(student.grade)


// for (let key in car) {
//   console.log(key, car[key]);
// }

// const scores = {
//   math: 90,
//   science: 85,
//   english: 88
// };

// // print subject and marks

// console.log(Object.keys(scores))
// console.log(Object.values(scores))
// console.log(Object.entries(scores))

// const users = [
//   { name: "A", age: 20 },
//   { name: "B", age: 25 },
//   { name: "C", age: 17 }
// ];

// const adults = users.filter(u=>u.age>18)
// const adultNames = adults.map(u=>u.name)
// console.log(adultNames)

// const product = {
//   title: "Phone",
//   price: 50000
// };

// // extract title and price

// const {title , price} = product

// console.log(title)
// console.log(price)

// const order = {
//   id: 101,
//   amount: 999
// };

// // convert to JSON and back
// const jsonobj = JSON.stringify(order)
// const objjson = JSON.parse(jsonobj)

// console.log(jsonobj)
// console.log(objjson)


// const APIResponse = `{
//     "id" : 1,
//     "name" : "Yash",
//     "skills" : ["JS" , "React" , "Node"]
// }`;

// const ResponseJson = JSON.parse(APIResponse)
// console.log(ResponseJson)
// console.log(ResponseJson.skills[0])


// const cart = [
//     {name : "ITEM1" , price : 100},
//     {name : "ITEM2" , price : 200},
//     {name : "ITEM3" , price : 300}
// ]

// const totalPrice = cart.reduce((sum,item)=>sum + item.price,0)
// console.log(totalPrice)

// const obj = {
//     a : 1, b : 2
// }

// const arr8 = Object.entries(obj)
// console.log(arr8)



// const people = [
//   { name: "A", age: 20 },
//   { name: "B", age: 20 },
//   { name: "C", age: 25 }
// ];

// const grouped = people.reduce((acc, curr) => {
//   if (!acc[curr.age]) acc[curr.age] = [];
//   acc[curr.age].push(curr.name);
//   return acc;
// }, {});

// console.log(grouped);


// // find user with highest age

// const user = [
//     { name : "A" , age : 20},
//     { name : "B" , age : 36},
//     { name : "C" , age : 27}
// ]

// const oldestUser = user.reduce((max,u)=> {
//     return u.age > max.age ? u : max;
// })

// console.log(oldestUser)


// //convert array of objects to array of names 

// const names = user.map(u => u.name)
// console.log(names)

// //check if property exists in an object

// const person = {
//     "name" : "Arun",
//     "age" : 28
// }

// console.log(person.hasOwnProperty("name"))
// console.log(person.hasOwnProperty("email"))
// console.log("email" in person)
// console.log("name" in person)
// console.log(person.model !== undefined)
// console.log(person.name !== undefined)

// // merge two objects

// const person2 = {
//     "name" : "Arun",
// }

// const person1 = {
//     "age" : 20
// }

// const merged = {...person2 , ...person1}
// console.log(merged)

// const num = square(6)
// function square(a){
//     return a*a;
// }

// console.log(num)


// const num1 = function (a){
//     return a * a;
// }

// console.log(num1(2))

// const sq = (a) => a*a; 
// console.log(sq(10))

// let a = 5;

// function demo() {
//   let b = 10;
//   console.log(a);
// }

// demo();
// // console.log(b); // ?

// function calculate(a, b, operation) {
//   return operation(a, b);
// }

// // use callback to add and subtract
// function add(a,b){
//     return a + b
// }
// function sub(a,b){
//     return a - b

// }


// console.log(calculate(10,10,add))
// console.log(calculate(100,10,sub))


// // Closurre 

// function outer() {
//     let count = 0;
//     function inner(){
//         count++;
//         console.log(count)
//     }
//     return inner;
// }

// // const counter = outer();

// // counter();
// // counter();
// // counter()
// // counter()
// // counter()
// // counter()
// // counter()
// // counter()

// function createBankAccount() {
//     let balance = 0;
//     return {
//         deposit(amount){
//             balance += amount;
//         },
//         getBalance(){
//             return balance;
//         }
//     }
// }

// const acc = createBankAccount()
// acc.deposit(1000)
// acc.deposit(500)
// acc.deposit(275)
// const balance = acc.getBalance()

// console.log(balance)



// function multipliers(factor){
//     return function (num){
//         return num * factor;
//     };
// }

// const double = multipliers(2)
// const triple = multipliers(3)
// const hundreads = multipliers(100)
// console.log(double(4))
// console.log(triple(100))
// console.log(hundreads(23))

// //------------------------------------------

// function delayedMessage(message){
//     setTimeout(()=>{
//         console.log(message)
//     },1000)
// }

// delayedMessage("This is delayed")


// function greet(name , callback){
//     callback(name)
// }

// function sayHello(name){
//     console.log("Yo! " , name)
// }

// greet("raj", sayHello)


// document.getElementById("btn").addEventListener("click",()=>{
//     console.log("Button Clicked!!");
// })

// function once(fn){
//     let called = false;
//     return function(...args){
//         if(!called){
//             called = true;
//             return fn(...args)
//         }
//     }
// }


//     function counter(){
//         let count = 0;
//         return {
//             increment(){
//                 count++;
//             },
//             getcount(){
//                 return count;
//             }
//         }
//     }

//     const ACounter = counter()
//     const BCounter = counter()
//     const Ccounter = counter()

//     ACounter.increment()
//     ACounter.increment()
//     ACounter.increment()
//     ACounter.increment()
//     ACounter.increment()
//     BCounter.increment()
//     BCounter.increment()
//     BCounter.increment()
//     Ccounter.increment()
//     Ccounter.increment()
//     Ccounter.increment()
//     Ccounter.increment()
//     Ccounter.increment()
//     Ccounter.increment()
//     Ccounter.increment()

//     console.log("Count of A ... ",ACounter.getcount())
//     console.log("Count of b ... ",BCounter.getcount())
//     console.log("Count of c ... ",Ccounter.getcount())
    
const paragraph = document.querySelector(".new")

const buttons = document.querySelectorAll("button")

console.log(paragraph.textContent)

buttons.forEach(btn =>{
    btn.addEventListener("click",()=>{
        paragraph.textContent = btn.textContent
    })
})


