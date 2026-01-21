

const tbody = document.getElementById("transactionsBody");
const categoryFilter = document.getElementById("categoryfilter");
const typeFilter = document.getElementById("typeFilter")
const table = document.getElementById("table")
const noItems = document.getElementById("noItems")

// let transactions = JSON.parse(localStorage.getItem("transactions")) || [];
let transactions = loadTransactions();
console.log(transactions);

showTransactions = (data = transactions) => {
    
    tbody.innerHTML = "";
    data.forEach((t) => {
        
        const tr = document.createElement("tr");

        const hiddenInput = document.createElement('input');
        hiddenInput.setAttribute('type', 'hidden');
        hiddenInput.setAttribute('id', localStorage.getItem('Id')); // The 'hidden id'
        hiddenInput.setAttribute('class', 'hiddenInput');

        const hiddenEditInput = document.createElement('input');
        hiddenEditInput.setAttribute('type', 'hidden');
        hiddenEditInput.setAttribute('id', localStorage.getItem('Id')); // The 'hidden id'
        hiddenEditInput.setAttribute('class', 'hiddenInput');

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
        amountTd.className = t.type === 'income' 
        ? "amount-income" 
        : "amount-expense";

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


showNoItemsAvl = () => {
    console.log("IMHERE");
    table.style.display = "none"
    noItems.innerHTML = "NO ITEMS TO DISPLAY"
}

applyCategoryFilter = () => {
    const selectedCategory = categoryFilter.value;
    if (selectedCategory === "all") {
        noItems.innerHTML = ""
        if(transactions.length === 0){
            noItems.innerHTML = "NO ITEMS TO DISPLAY"
        }
        table.style.display = "block"
        showTransactions(transactions);
        return;
    }

    const filtered = transactions.filter(t => t.category === selectedCategory);
    console.log(filtered.length)
    if( filtered.length !== 0){
        noItems.innerHTML = ""
        table.style.display = "block"
        console.log(filtered)
        showTransactions(filtered);
    }else{
        showNoItemsAvl();
    }
    
}


applyTypeFilter = () => {
    const selectedType = typeFilter.value;
    if(selectedType === "all"){
        noItems.innerHTML = ""
        if(transactions.length === 0){
            noItems.innerHTML = "NO ITEMS TO DISPLAY"
        }
        table.style.display = "block"
        showTransactions(transactions);
        return;
    }

    const filtered = transactions.filter(t => t.type === selectedType)
    showTransactions(filtered)

        if( filtered.length !== 0){
        noItems.innerHTML = ""
        table.style.display = "block"
        console.log(filtered)
        showTransactions(filtered);
    }else{
        showNoItemsAvl();
    }
}

tbody.addEventListener("click", (e) => {
    if (e.target.tagName !== "BUTTON")
        return;

    let hiddenInput = e.target.dataset.id;

    console.log(hiddenInput);

    if (e.target.classList.contains("delete")) {
        deleteTransactionById(hiddenInput);
        applyCategoryFilter();
        applyTypeFilter();
        transactions = loadTransactions();
        console.log(transactions);
        showTransactions(transactions);
        return;
    }

    if (e.target.classList.contains("edit")) {
        let hiddenEditInput = e.target.dataset.id;

        console.log(hiddenEditInput);

        localStorage.setItem("editId", hiddenEditInput);
        window.location.href = "./index.html";
    }
})

categoryFilter.addEventListener("change", applyCategoryFilter);

showTransactions(transactions);


deleteTransactionById = (id) => {
    try {
        let transactions = loadTransactions();
        let updatedTransactions = transactions.filter(t => t.id !== id);

        console.log(updatedTransactions);
        saveTransactions(updatedTransactions);
    } catch (err) {
        console.log(err.message);
    }
};


typeFilter.addEventListener("change",applyTypeFilter)