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
let transactions = loadTransactions();
let editId = localStorage.getItem("editId");
let id = localStorage.getItem("Id");

//-----------------------------------------------------------------------------


addTransaction = ()=>{
    
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


    transactions.push({ title, amount, type, description, category, date, currency , id});
    saveTransactions(transactions);
    transactions = loadTransactions();

    updateSummary();
    localStorage.removeItem("editIndex");
    editIndex = null;

    window.location.href = "./index.html";

};



updateSummary = () => {
    const income = transactions.filter(t => t.type === 'income')
        .reduce((sum, t) => sum + Number(t.amount), 0);
    const expense = transactions.filter(t => t.type === 'expense')
        .reduce((sum, t) => sum + Number(t.amount), 0);

    const convertIncomeDollar = transactions.filter(t => t.currency === 'Dollar' && t.type === 'income')
        .reduce((sum, t) => sum + Number(t.amount) * 91, 0);
    const convertExpenseDollar = transactions.filter(t => t.currency === 'Dollar' && t.type === 'expense')
        .reduce((sum, t) => sum + Number(t.amount) * 91, 0);

    const convertIncomeCanadianDollar = transactions.filter(t => t.currency === 'CanadianDollar' && t.type === 'income')
        .reduce((sum, t) => sum + Number(t.amount) * 65, 0);
    const convertExpenseCanadianDollar = transactions.filter(t => t.currency === 'CanadianDollar' && t.type === 'expense')
        .reduce((sum, t) => sum + Number(t.amount) * 65, 0);


    const convertIncomeYen = transactions.filter(t => t.currency === 'Yen' && t.type === 'income')
        .reduce((sum, t) => sum + Number(t.amount) * 0.5, 0);
    const convertExpenseYen = transactions.filter(t => t.currency === 'Yen' && t.type === 'expense')
        .reduce((sum, t) => sum + Number(t.amount) * 0.5, 0);

    const convertIncomePound = transactions.filter(t => t.currency === 'Pound' && t.type === 'income')
        .reduce((sum, t) => sum + Number(t.amount) * 121, 0);
    const convertExpensePound = transactions.filter(t => t.currency === 'Pound' && t.type === 'expense')
        .reduce((sum, t) => sum + Number(t.amount) * 121, 0);

    const ConvertedIncome = convertIncomeCanadianDollar + convertIncomeDollar + convertIncomePound + convertIncomeYen + income;
    const ConvertedExpense = convertExpenseCanadianDollar + convertExpenseDollar + convertExpensePound + convertExpenseYen + expense;

    totalIncome.textContent = ConvertedIncome;
    totalExpense.textContent = ConvertedExpense;
    balance.textContent = (ConvertedIncome - ConvertedExpense);
};


updateTransaction = () => {
    if (editId === null) return

    const t = transactions.map((c) => {
        if (editId == c.id) {
            c.title = titleInput.value;
            c.amount = Number(amountInput.value);
            c.currency = currencyInput.value || 'INR';
            c.type = typeInput.value;
            c.description = descriptionInput.value;
            c.category = categoryInput.value;
            c.date = new Date().toLocaleDateString();
        }
    });

        saveTransactions(transactions);
        transactions = loadTransactions();
        updateSummary();

        localStorage.removeItem("editId");
        btn.textContent = "Add";
        editId = null;

        window.location.href = "./Transactions.html";

    };


checkEditMode = () => {
            if (editId === null)
                return;

            console.log(editId);
            // editId = Number(editIndex)
            const t = transactions.map((c) => {
                if (editId === c.id) {
                    titleInput.value = c.title;
                    amountInput.value = c.amount;
                    typeInput.value = c.type;
                    descriptionInput.value = c.description;
                    categoryInput.value = c.category;
                    currencyInput.value = c.currency;

                    btn.textContent = "Update";

                }
            });


            if (!t)
                return;

        };


idCheck = () => {

            try {
                if (localStorage.getItem("Id")) {
                    let id = localStorage.getItem("Id");
                    // console.log(id)
                    id++;
                    localStorage.setItem("Id", Number(id));
                } else {
                    localStorage.setItem("Id", 1);
                    // idCheck()
                }
            } catch (err) {
                console.log(err.message);
            }
        };

// EVENT LISTENERS


btn.addEventListener("click", () => {
            if (editId === null) {
                addTransaction();
                idCheck();
            } else {
                updateTransaction();
            }
        })

updateSummary();
checkEditMode();




