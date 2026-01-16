//
// Expense Tracker Application is a JavaScript-based web application developed using  JavaScript.
// It allows users to record, manage, and analyze their income and expenses in a structured manner.
// The application dynamically updates the user interface using DOM manipulation, stores all 
// financial records in LocalStorage to ensure data persistence across browser sessions,
// and uses cookies to manage user preferences such as selected currency or theme.
// It performs real-time calculations to display total income, total expenses, current 
// balance, and monthly financial summaries without requiring a page reload.

// DOM Manipulation – For rendering and updating UI dynamically.
// LocalStorage – For storing income and expense data persistently.
// Cookies – For saving user preferences.
// Array & Object Data Structures – For managing transaction records.
// Array Methods (map, filter, reduce) –
// filter() for monthly or category-based data
// map() for UI rendering
// reduce() for calculating totals and balances
// Event Handling & Event Delegation – For better performance.
// CRUD Operations – Create, Read, Update, and Delete transactions.


//----------------------------------------------------------------------------

const titleInput = document.getElementById("title")
const amountInput = document.getElementById("amt")
const typeInput = document.getElementById("choose")
const totalIncome = document.getElementById("totalIncome")
const totalExpense = document.getElementById("totalExpense")
const balance = document.getElementById("balance")
const btn = document.getElementById("btn")
const list = document.getElementById("list")
const descriptionInput = document.getElementById("description")
const categoryInput = document.getElementById("category")
const currencyInput = document.getElementById("currency")
let transactions = loadTransactions()
let editIndex = localStorage.getItem("editIndex")


//-----------------------------------------------------------------------------


function addTransaction() {
    const title = titleInput.value
    const amount = Number(amountInput.value)
    const type = typeInput.value
    const description = descriptionInput.value
    const category = categoryInput.value
    const date = new Date().toLocaleDateString()
    const currency = currencyInput.value || "INR"
    

    if (!title || amount <= 0 ){
        alert("Fill all the required fields correctly!")
        return
    }  

    transactions.push({ title, amount, type, description, category, date, currency })

    saveTransactions(transactions)
    transactions = loadTransactions()

    updateSummary()
    localStorage.removeItem("editIndex")
    clearAll()
    editIndex = null
}



function updateSummary() {
    const income = transactions.filter(t => t.type === 'income')
        .reduce((sum, t) => sum + Number(t.amount), 0)
    const expense = transactions.filter(t => t.type === 'expense')
        .reduce((sum, t) => sum + Number(t.amount), 0)


    console.log(income)
    console.log(expense)
    console.log(balance)
    totalIncome.textContent = income;
    totalExpense.textContent = expense;
    balance.textContent = (income - expense)
}


function updateTransaction() {
    if (editIndex === null) return

    transactions[editIndex].title = titleInput.value
    transactions[editIndex].amount = Number(amountInput.value)
    transactions[editIndex].currency = currencyInput.value || 'INR'
    transactions[editIndex].type = typeInput.value
    transactions[editIndex].description = descriptionInput.value
    transactions[editIndex].category = categoryInput.value
    transactions[editIndex].date = new Date().toLocaleDateString()

    saveTransactions(transactions)
    transactions = loadTransactions()
    updateSummary()

    localStorage.removeItem("editIndex")
    btn.textContent = "Add"
    editIndex = null;
    clearAll()
}


function clearAll() {
    titleInput.value = ""
    amountInput.value = ""
    descriptionInput.value = ""
    currencyInput.value = ""
}

function checkEditMode(){
    if(editIndex === null)
        return

    editIndex = Number(editIndex)
    const t = transactions[editIndex]

    if(!t)
        return

    titleInput.value = t.title
    amountInput.value = t.amount
    typeInput.value = t.type
    descriptionInput.value = t.description
    categoryInput.value = t.category

    btn.textContent = "Update"
}


// EVENT LISTENERS


btn.addEventListener("click", () => {
    if (editIndex === null) {
        addTransaction()
    } else {
        updateTransaction()
        clearAll()
    }
})

updateSummary()
checkEditMode()