// https://api.restful-api.dev/objects

async function loadObjects(url){
    try{
        const res = await fetch(url)
        
        if(!res.ok){
            throw new Error("Data not fetched")
        }
        
        const data = await res.json()

        // console.log(data)
        return data

    }catch(err){
        console.log(err.message)
    }
}
// searching
function searchObjects(keywords,objects){
    return products.filter(object => object.title.toLowerCase().includes(keywords.toLowerCase()))
}
// table rendering
function renderTable(products){
    tableBody.innerHTML = ""
     products.forEach(element => {
        const tr = document.createElement("tr")
        tr.innerHTML =  `
            <tr>
                <td>${element.id}</td>
                <td>${element.title}</td>
                <td>${element.category}</td>
                <td>${element.price}$</td>
                <td>${element.stock}</td>
                <td>${element.minimumOrderQuantity}</td>
                <td>${element.discountPercentage}%</td>
                <td><img src="${element.images[0]}" height=100px width = 100px/></td>    
            </tr>

        `
        tableBody.appendChild(tr)
        console.log(element)
    });
}
// main prog


let products = [];
let jsonobj = [];
const btn = document.getElementById("btn")
const tableBody = document.getElementById("tableBody")
const showTable = document.getElementById("table")
const result = document.getElementById("result")
const search = document.getElementById("search")

//on click button submit
btn.addEventListener("click",async ()=>{
    jsonobj = await loadObjects("https://dummyjson.com/products")
    products = jsonobj.products
    renderTable(products)
    console.log(products)
   
    table.style.display = "table"
    result.innerHTML = `Fetched ${products.length} products, successfully!`
})

// seaching ....
search.addEventListener("input",(e)=>{
    e.preventDefault()
    const keyword = search.value.trim()
    const objects = keyword ? searchObjects(keyword,products) : products;
    renderTable(objects)
})

