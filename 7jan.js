// document.getElementById("new").style.color="red"
// document.getElementById("new").innerText= "New Here."
// document.getElementById("rd").style.backgroundColor="blue"

// const btn = document.getElementById("btn")
// btn.addEventListener("click",(e)=>{
//     console.log("clicked")
//     console.log(e.target)
// })

// const btn1 = document.getElementById("btn1")
// btn1.addEventListener("click",(event)=>{
//     console.log(event.target)
// })

// const btn2 = document.getElementById("btn2")
// btn2.addEventListener("click",()=>{
//     console.log(btn2.textContent)
// })

// const form = document.getElementById("form")
// const ename = document.getElementById("name")
// form.addEventListener("submit",(e)=>{
//     if(ename.value.trim() === "" ){
//         alert("Enter the name")
//     }else{
//         e.preventDefault();
//         console.log(ename.value)
//     }
// })


// const parent = document.getElementById("parent")
// const child = document.getElementById("child")

// parent.addEventListener("click",()=>{
//     console.log("parent")
// })

// child.addEventListener("click", (e)=>{
//     e.stopPropagation()
//     console.log("child only")
// })

// // parent.addEventListener("click",()=>
// //     console.log("parent"),true
// // )


// const btn4 = document.getElementById("btn4")
// btn4.addEventListener("click",(e)=>{
//     if(e.target.tagName === "BUTTON"){
//         console.log(e.target.innerText)
//     }
// })

// const btn = document.getElementById("btn")
// const text = document.getElementById("new")
// let count=0;
// btn.addEventListener("click",()=>{
//     document.body.classList.toggle("dark")
//     count++;
//     console.log(count)
//     text.innerHTML = count;
// })

// btn.addEventListener("click",()=>{
// })

// const form = document.getElementById("form")
// const input = document.getElementById("input")
// const list = document.getElementById("list")

// form.addEventListener("submit",(event)=>{
//     event.preventDefault()
//     const li = document.createElement("li")
//     li.innerText = input.value

//     list.appendChild(li)
//     input.value = ""
// })

// const btn = document.getElementById("btn")

// btn.addEventListener("click",()=>{
//     console.log("clicked")
//     btn.disabled = true
// })

// const btn = document.getElementById("btn")

// btn.addEventListener("mouseover", ()=>{
//     btn.style.color = "red";
// })

// btn.addEventListener("mouseout",()=>{
//     btn.style.color = "blue"
// })

/////////// doubt
// const li = document.getElementById("list")

// console.log(li)

// li.addEventListener("click",(e)=>{
//     console.log('event',e)
//     if(e.target.matches("li")){
//         e.target.remove()
//     }
// })  


// const input = document.getElementById("input")
// const form = document.getElementById("form")

// form.addEventListener("submit",(e)=>{
//     e.preventDefault()

//     if(input.value.trim() === ""){
//         alert("Name can not be empty")
//         input.focus()
//         return;
//     }

//     alert("Form Submitted")
//     input.value = ""
// })

// function getData(callback){
//     setTimeout(()=>{
//         callback("Data Recieved")
//     },1000)
// }

// getData((data)=>{
//     console.log(data)
// })

// const p = new Promise((resolve,reject)=>{
//     setTimeout(() => {
//         resolve("success")
//     }, 1000);
// })

// p.then(value=>{
//     console.log(value)
// }).catch(err=>{
//     console.log(err)
// })


// const checkAge = new Promise((resolve,reject)=>{
//     let age = 17
//     if(age >= 18) {
//         resolve("Allowed")
//     }else{
//         reject("Not Allowed")
//     }
// })  

// checkAge.then(value=>{
//     console.log(value)
// }).catch(err=>{
//     console.log(err)
// })


// async function getData(){
//     const result = await Promise;
//     console.log(result)
// }

// getData()


// async function getData() {
//     try{
//         const result = await Promise
//         console.log(result)
//     }catch(err){
//         console.log(err)
//     }
// }

// getData()

// const stat = document.getElementById("status")
// const list = document.getElementById("list")
// const table = document.getElementById("userTable")
// const tableBody = document.getElementById("tableBody")

// async function fetchUsers() {

//     try{
//         stat.textContent = "Loading..."
//         //list.innerHTML = ""
//         const res = await fetch("https://jsonplaceholder.typicode.com/users")
//         if(!res.ok){
//             throw new Error("Failed to fetch")
//         }
//         const data = await res.json()
//         // const result = await fakeAPI(data)
//         run(data)
//         stat.textContent = ""
//         table.style.display="table"
//         tableBody.innerHTML = ""
//         data.forEach(user => {
//             const tr = document.createElement("tr")
//             // li.innerHTML = 
//             // `Name :- ${user.name}<br>
//             //  Phone :- ${user.phone}<br>
//             //  Website :- ${user.website}<br>
//             //  Email :-(${user.email})<hr><br>`
            
//             tr.innerHTML = `
//                <td>${user.name}</td>
//                <td>${user.phone}</td>
//                <td>${user.website}</td>
//                <td>${user.email}</td>
//             `
//             tableBody.appendChild(tr)
//         });


//         console.log(data)
//     }catch(err){
//         stat.textContent = "Error loading data"
//         console.log(err)
//     }
// }

// const btn = document.getElementById("btn")

// btn.addEventListener("click",fetchUsers)


// function delay(ms){
//     return new Promise(resolve=>setTimeout(resolve,ms))
// }

// async function test(){
//     await delay(2000)
//     console.log("Done")
// }
// test()


// function fakeAPI(data) {
//     return new Promise((resolve,reject) => {
//         setTimeout(() => {
//             if(data) resolve("Data Recieved")
//                 else reject("No Data")
//         }, 1000);
//     })
// }

// async function run(data) {
//    try{
//         const result = await fakeAPI(true)
//         console.log(result)
//     }catch(err){
//         console.log(err)
//     }
// }


// async function run(){
// //     await delay(1000)
// //     console.log("Step 1")
// //     await delay(3000)
// //     console.log("waited for 3 secs")
// //     await delay(5000)
// //     console.log("3 seconds more")
// //     await delay(3000)
// //     console.log("You still here , mhm")

//         const p1 = delay(1000)
//         const p2 = delay(2000)

//         await Promise.all([p1,p2])
//         console.log("Both done")
// }
// run()




// function delayForThree(){
//     return new Promise(resolve =>setTimeout(resolve,3000));
// }

// async function runn(){

//     try{
//         // new Promise(resolve,reject)
//         await delayForThree()
//         console.log("Done w 3 secs")
//     }catch(err){
//         console.log("MYBAD")
//     }
// }

// runn()
//with promise
// function delayForThree(){
//     return new Promise((resolve)=>{
//         setTimeout(() => {
//             resolve("Resolved after 3 seconds")
//         }, 3000);
//     })
// }
// delayForThree().then((msg)=>{
//     console.log(msg)
// })


const stat = document.getElementById("status")
const list = document.getElementById("list")
const table = document.getElementById("userTable")
const tableBody = document.getElementById("tableBody")
const search = document.getElementById("search")
let users = [];
let currentUsers = [];


let sortAsc = true

function sortByName(){
    const sorted = [...currentUsers].sort((a,b)=>{
        return sortAsc?
        a.name.localeCompare(b.name):
        b.name.localeCompare(a.name)
    })
    sortAsc = !sortAsc
    currentUsers = sorted
    renderTable(sorted)
}

function renderTable(users){
        tableBody.innerHTML = ""

    users.forEach(user=>{
        const tr = document.createElement("tr")
        tr.innerHTML = `
        <td>${user.name}</td>
        <td>${user.phone}</td>
        <td>${user.website}</td>
        <td>${user.email}</td>
        `
        tableBody.appendChild(tr)
    })
    table.style.display = "table"
    stat.innerHTML = `Fetched ${users.length} users!! wow`
    
}

function filterUsers(keywords,Users) {
    return Users.filter(u => u.name.toLowerCase().includes(keywords.toLowerCase()))
}



async function fetchU(){
    try{
        stat.innerHTML = "Loading.... Please wait"
        const res = await fetch("https://jsonplaceholder.typicode.com/users");
        if(!res.ok){
            throw new Error("Failed to fetch API")
        }
        users = await res.json()
        currentUsers = users
        renderTable(users)
    }catch(err){
        stat.textContent = "Error Loading Data"
        console.log(err)
    }
}


const sortBtn = document.getElementById("sort")
search.addEventListener("input",(e)=>{
    e.preventDefault();
    const keyword = search.value.trim()
    currentUsers = keyword? filterUsers(keyword,users) : users;
    renderTable(currentUsers)
    // if(users.length === 0){
    //     stat.textContent = "No users Found"
    // }
})

sortBtn.addEventListener("click",sortByName)

const btn = document.getElementById("btn")

btn.addEventListener("click",fetchU)

