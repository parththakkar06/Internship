const tbody = document.getElementById("transactionsBody");
const categoryFilter = document.getElementById("categoryfilter");
const typeFilter = document.getElementById("typeFilter");
const table = document.getElementById("table");
const noItems = document.getElementById("noItems");
let transactions = []
// let transactions = JSON.parse(localStorage.getItem("transactions")) || [];
// let transactions = loadTransactions();
// console.log(transactions);
    let showTransactions = (data) => {
      tbody.innerHTML = "";
      data.forEach((t) => {
        const tr = document.createElement("tr");

        const hiddenInput = document.createElement("input");
        hiddenInput.setAttribute("type", "hidden");
        hiddenInput.setAttribute("id", localStorage.getItem("Id")); // The 'hidden id'
        hiddenInput.setAttribute("class", "hiddenInput");

        const hiddenEditInput = document.createElement("input");
        hiddenEditInput.setAttribute("type", "hidden");
        hiddenEditInput.setAttribute("id", localStorage.getItem("Id")); // The 'hidden id'
        hiddenEditInput.setAttribute("class", "hiddenInput");

        const titleTd = document.createElement("td");
        titleTd.textContent = t.title;

        const categoryTd = document.createElement("td");
        categoryTd.textContent = t.category;

        const dateTd = document.createElement("td");
        dateTd.textContent = t.date;

        const typeTd = document.createElement("td");
        typeTd.textContent = t.type;

        const descriptionTd = document.createElement("td");
        descriptionTd.textContent = t.description;

        const amountTd = document.createElement("td");
        amountTd.textContent = `${t.amount} ${t.currency}`;
        amountTd.className =
          t.type === "income" ? "amount-income" : "amount-expense";

        const actionsTd = document.createElement("td");
        const actionsDiv = document.createElement("div");
        actionsTd.className = "actions";

        const editBtn = document.createElement("button");
        editBtn.textContent = "Edit";
        editBtn.className = "edit";
        editBtn.dataset.id = t.id;

        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.className = "delete";
        deleteBtn.dataset.id = t.id;

        actionsDiv.appendChild(editBtn);
        deleteBtn.appendChild(hiddenInput);
        actionsDiv.appendChild(deleteBtn);
        actionsTd.appendChild(actionsDiv);
        editBtn.appendChild(hiddenEditInput);

        tr.appendChild(titleTd);
        tr.appendChild(categoryTd);
        tr.appendChild(dateTd);
        tr.appendChild(typeTd);
        tr.appendChild(amountTd);
        tr.appendChild(descriptionTd);
        tr.appendChild(actionsTd);

        tbody.appendChild(tr);
      });
    };

const fetchTransactions = async () => {
  try {
    const res = await fetch("http://localhost:3000/transactions", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
    });

    transactions = await res.json();
    console.log(transactions.transactions);
    showTransactions(transactions.transactions)
    return transactions.transactions;
  } catch(e){
    console.error("error...",e)
    error.textContent = "Server error";
  }
};

    // let transactions = fetchTransactions();
    // console.log(transactions);
showNoItemsAvl = () => {
  console.log("IMHERE");
  table.style.display = "none";
  noItems.innerHTML = "NO ITEMS TO DISPLAY";
};

applyCategoryFilter = () => {
  const selectedCategory = categoryFilter.value;
  if (selectedCategory === "all") {
    noItems.innerHTML = "";
    
    if (transactions.length === 0) {
      noItems.innerHTML = "NO ITEMS TO DISPLAY";
    }
    table.style.display = "block";
    showTransactions(transactions.transactions);
    return;
  }
  const filtered = transactions.transactions.filter((t) => t.category === selectedCategory);
  console.log(filtered.length);
  if (filtered.length !== 0) {
    noItems.innerHTML = "";
    table.style.display = "block";
    console.log(filtered);
    showTransactions(filtered);
  } else {
    showNoItemsAvl();
  }
};

applyTypeFilter = () => {
  const selectedType = typeFilter.value;
  if (selectedType === "all") {
    noItems.innerHTML = "";
    if (transactions.transactions.length === 0) {
      noItems.innerHTML = "NO ITEMS TO DISPLAY";
    }
    table.style.display = "block";
    showTransactions(transactions.transactions);
    return;
  }

  const filtered = transactions.transactions.filter((t) => t.type === selectedType);
  showTransactions(filtered);

  if (filtered.length !== 0) {
    noItems.innerHTML = "";
    table.style.display = "block";
    console.log(filtered);
    showTransactions(filtered);
  } else {
    showNoItemsAvl();
  }
};

tbody.addEventListener("click", async(e) => {
  if (e.target.tagName !== "BUTTON") return;

  let hiddenInput = e.target.dataset.id;

  if (e.target.classList.contains("delete")) {
    try{
      const res = await fetch(`http://localhost:3000/transactions/${hiddenInput}`,{
        method: "DELETE",
        headers: {"Content-Type" : "application/json"},
        credentials: "include"
      })
    }catch(e){
      console.error(e)
    }
    applyCategoryFilter();
    applyTypeFilter();
    fetchTransactions()
    showTransactions(transactions.transactions)
    return;
  }

  if (e.target.classList.contains("edit")) {
    let hiddenEditInput = e.target.dataset.id;
    window.location.href = `index.html?transactionId=${hiddenEditInput}`;
  }
});

categoryFilter.addEventListener("change", applyCategoryFilter);

fetchTransactions()
// showTransactions(transactions);

// deleteTransactionById = (id) => {
//   try {
//     let transactions = loadTransactions();
//     let updatedTransactions = transactions.filter((t) => t.id !== id);

//     console.log(updatedTransactions);
//     saveTransactions(updatedTransactions);
//   } catch (err) {
//     console.log(err.message);
//   }
// };

typeFilter.addEventListener("change", applyTypeFilter);
