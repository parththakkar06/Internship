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

const titleInput = document.getElementById("title");
const amountInput = document.getElementById("amt");
const typeInput = document.getElementById("choose");
const totalIncome = document.getElementById("totalIncome");
const totalExpense = document.getElementById("totalExpense");
const balance = document.getElementById("balance");
const btn = document.getElementById("btn");
const list = document.getElementById("list");
const descriptionInput = document.getElementById("description");
const categoryInput = document.getElementById("category");
const currencyInput = document.getElementById("currency");
let transactions = []
let id = localStorage.getItem("Id");
const login = document.getElementById("login");
const logout = document.getElementById("logout");
const resigter = document.getElementById("register");
const btn1 = document.getElementById("btn1")
const searchparam = new URLSearchParams(window.location.search)
let editId = searchparam.get("transactionId")
console.log(editId)
//-----------------------------------------------------------------------------
const fetchTransactions = async () => {
  try {
    const res = await fetch("http://localhost:3000/transactions", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
    });

    transactions = await res.json();
    console.log(transactions.transactions);
    return transactions.transactions;
  } catch (e) {
    console.error("error...", e)
    error.textContent = "Server error";
  }
};
fetchTransactions()

const addTransaction = async () => {

  const title = titleInput.value;
  const amount = Number(amountInput.value);
  const type = typeInput.value;
  const description = descriptionInput.value;
  const category = categoryInput.value;
  const date = new Date().toLocaleDateString();
  let currency = currencyInput.value;

  if (!title || amount <= 0 || category === "none" || type === "none") {
    alert("Fill all the required fields correctly!");
    return;
  }
  if (currency === "none") {
    currency = "INR";
  }

  try {
    console.log("try")
    const res = await fetch("http://localhost:3000/transactions", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify({
        title,
        amount,
        type,
        description,
        category,
        date,
        currency,
        id,
      })
    })

    if (!res) {
      console.log("1234")
    }
    console.log("res...", res)
  } catch (err) {
    console.log(err)
  }


  updateSummary();

  window.location.href = "./index.html";

};


updateSummary = () => {
  console.log(transactions)
  const income = transactions.transactions
    .filter((t) => t.type === "income")
    .reduce((sum, t) => sum + Number(t.amount), 0);
  const expense = transactions.transactions
    .filter((t) => t.type === "expense")
    .reduce((sum, t) => sum + Number(t.amount), 0);

  const convertIncomeDollar = transactions.transactions
    .filter((t) => t.currency === "Dollar" && t.type === "income")
    .reduce((sum, t) => sum + Number(t.amount) * 91, 0);
  const convertExpenseDollar = transactions.transactions
    .filter((t) => t.currency === "Dollar" && t.type === "expense")
    .reduce((sum, t) => sum + Number(t.amount) * 91, 0);

  const convertIncomeCanadianDollar = transactions.transactions
    .filter((t) => t.currency === "CanadianDollar" && t.type === "income")
    .reduce((sum, t) => sum + Number(t.amount) * 65, 0);
  const convertExpenseCanadianDollar = transactions.transactions
    .filter((t) => t.currency === "CanadianDollar" && t.type === "expense")
    .reduce((sum, t) => sum + Number(t.amount) * 65, 0);

  const convertIncomeYen = transactions.transactions
    .filter((t) => t.currency === "Yen" && t.type === "income")
    .reduce((sum, t) => sum + Number(t.amount) * 0.5, 0);
  const convertExpenseYen = transactions.transactions
    .filter((t) => t.currency === "Yen" && t.type === "expense")
    .reduce((sum, t) => sum + Number(t.amount) * 0.5, 0);

  const convertIncomePound = transactions.transactions
    .filter((t) => t.currency === "Pound" && t.type === "income")
    .reduce((sum, t) => sum + Number(t.amount) * 121, 0);
  const convertExpensePound = transactions.transactions
    .filter((t) => t.currency === "Pound" && t.type === "expense")
    .reduce((sum, t) => sum + Number(t.amount) * 121, 0);

  const ConvertedIncome =
    convertIncomeCanadianDollar +
    convertIncomeDollar +
    convertIncomePound +
    convertIncomeYen +
    income;
  const ConvertedExpense =
    convertExpenseCanadianDollar +
    convertExpenseDollar +
    convertExpensePound +
    convertExpenseYen +
    expense;

  totalIncome.textContent = ConvertedIncome;
  totalExpense.textContent = ConvertedExpense;
  balance.textContent = ConvertedIncome - ConvertedExpense;
};

updateTransaction = async () => {

  title = titleInput.value;
  amount = Number(amountInput.value);
  currency = currencyInput.value || "INR";
  type = typeInput.value;
  description = descriptionInput.value;
  category = categoryInput.value;
  date = new Date().toLocaleDateString();

  try {

    const res = await fetch(`http://localhost:3000/transactions/${editId}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify({
        title,
        amount,
        type,
        description,
        category,
        date,
        currency,
        id,
      })
    })

    updateSummary();
    editId = null;
    window.location.href = "Transactions.html";

  } catch (e) {
    console.error(e)
  }
};

checkEditMode = async () => {
  if (editId === null) return;

  console.log(editId);
  // editId = Number(editIndex)
  // const t = transactions.map((c) => {
  try {
    const res = await fetch(`http://localhost:3000/transactions/${editId}`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
      credentials: "include"
    })

    let data = await res.json()
    console.log(data)
    let c = data.data[0]
    titleInput.value = c.title;
    amountInput.value = c.amount;
    typeInput.value = c.type;
    descriptionInput.value = c.description;
    categoryInput.value = c.category;
    currencyInput.value = c.currency;

    btn.textContent = "Update";

  } catch (e) {
    console.error(e)
  }

};

// EVENT LISTENERS

btn.addEventListener("click", () => {
  if (editId === null) {
    console.log("....")
    addTransaction();
  } else {
    updateTransaction();
  }
});
btn1.addEventListener("click", () => {
  updateSummary()
})



checkEditMode(); 
