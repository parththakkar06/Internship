

const tbody = document.getElementById("transactionsBody")
const categoryFilter = document.getElementById("categoryfilter")

// let transactions = JSON.parse(localStorage.getItem("transactions")) || [];
let transactions = loadTransactions()
console.log(transactions)

function showTransactions(data = transactions) {
    tbody.innerHTML = ""
    data.forEach((t,index) => {
        const tr = document.createElement("tr")

        const titleTd = document.createElement("td")
        titleTd.textContent = t.title

        const categoryTd = document.createElement("td")
        categoryTd.textContent = t.category

        const dateTd = document.createElement("td")
        dateTd.textContent = t.date

        const typeTd = document.createElement("td")
        typeTd.textContent = t.type
        
        const amountTd = document.createElement("td")
        amountTd.textContent = `${t.amount} ${t.currency}`
        amountTd.className = t.type === 'income' ? "amount-income" : "amount-expense"

        const actionsTd = document.createElement("td")
        const actionsDiv = document.createElement("div")
        actionsTd.className = "actions"

        const editBtn = document.createElement("button")
        editBtn.textContent = "Edit"
        editBtn.className = "edit"
        editBtn.dataset.index = index
    
        const deleteBtn = document.createElement("button")
        deleteBtn.textContent = "Delete"
        deleteBtn.className = "delete"
        deleteBtn.dataset.index = index
        
        actionsDiv.appendChild(editBtn)
        actionsDiv.appendChild(deleteBtn)
        actionsTd.appendChild(actionsDiv)
    
        tr.appendChild(titleTd)
        tr.appendChild(categoryTd)
        tr.appendChild(dateTd)
        tr.appendChild(typeTd)
        tr.appendChild(amountTd)
        tr.appendChild(actionsTd)
        
        tbody.appendChild(tr)
    });


}
    function applyCategoryFilter(){
        const selectedCategory = categoryFilter.value
        if(selectedCategory === "all"){
            showTransactions(transactions)
            return
        }

        const filtered = transactions.filter(t => t.category === selectedCategory)
        showTransactions(filtered)
    }


tbody.addEventListener("click",(e)=>{
    if(e.target.tagName !== "BUTTON")
        return

    const index = Number(e.target.dataset.index)

    if(e.target.classList.contains("delete")){
        deleteTransactionByIndex(index)
        transactions = loadTransactions()
        applyCategoryFilter()
        return
    }

    if(e.target.classList.contains("edit")){
        localStorage.setItem("editIndex",index)
        window.location.href = "./index.html"
    }
})

categoryFilter.addEventListener("change",applyCategoryFilter)
    
showTransactions(transactions)