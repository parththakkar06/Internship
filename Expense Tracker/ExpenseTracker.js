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

function setCookie(name,value, days = 365){
    const expires = new Date(Date.now() + days *864e5).toUTCString()
    document.cookie = name + "=" + value + ";" + expires + ";path=/";
}

function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for(let i = 0; i <ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}


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
let transactions = JSON.parse(localStorage.getItem("transactions")) || [];
let editIndex = null


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

    saveData()
    showTransactions()
    updateSummary()

    clearAll()
}


function saveData() {
    localStorage.setItem("transactions", JSON.stringify(transactions));
    console.log(transactions)
}


function showTransactions() {
    list.innerHTML = ""

    transactions.map((transaction, index) => {
        const li = document.createElement("li")
        li.className = transaction.type
        li.innerHTML = `
            <div class="txn-main">
                <span class="txn-title">${transaction.title}</span>
                <span class="txn-amount">
                    ${transaction.amount} ${transaction.currency}
                </span>
            </div>

            <div class="txn-meta">
                <span>${transaction.category}</span>
                <span>${transaction.type}</span>
            </div>

            ${transaction.description ? `
            <div class="txn-desc">
                ${transaction.description}
            </div>
            ` : ""}

            <div class="txn-actions">
                <button data-index="${index}" data-action="edit">Edit</button>
                <button data-index="${index}" data-action="delete" class="danger">
                    Delete
                </button>
            </div>
        `;

        list.appendChild(li)
    })
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

    saveData()
    showTransactions()
    updateSummary()

    btn.textContent = "Add"
    editIndex = null;
}


function clearAll() {
    titleInput.value = ""
    amountInput.value = ""
    descriptionInput.value = ""
    currencyInput.value = ""
}


// EVENT LISTENERS

list.addEventListener("click", (e) => {
    if (e.target.tagName !== "BUTTON") {
        return
    }

    const action = e.target.dataset.action
    const index = e.target.dataset.index

    if (action === "delete")
        transactions.splice(index, 1);

    if (action === "edit") {
        const t = transactions[index]

        titleInput.value = t.title
        amountInput.value = t.amount
        currencyInput.value = t.currency
        typeInput.value = t.type
        categoryInput.value = t.category
        descriptionInput.value = t.description

        editIndex = index
        btn.textContent = "Update"
        return
    }

    saveData()
    showTransactions()
    updateSummary()

})

btn.addEventListener("click", () => {
    if (editIndex === null) {
        addTransaction()
    } else {
        updateTransaction()
        clearAll()
    }
})

showTransactions();
updateSummary()