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

function deleteCookie(name){
    document.cookie = `${name}=; expires= Thu, 01 Jan 1970 00:00:00 UTC; path=/`
}




function loadTransactions(){
    const even = JSON.parse(localStorage.getItem("evenTransactions")) || []
    const odd = JSON.parse(getCookie("oddTransactions")) || []

    const merged = []
    const maxLength = Math.max(even.length,odd.length)

    for(let i = 0 ; i < maxLength; i++){
        if(even[i])
            merged.push(even[i])

        if(odd[i])
            merged.push(odd[i])
    }

    return merged
}



function saveTransactions(transactions) {
    const evenTransactions = []
    const oddTransactions = []

    transactions.forEach((t,index)=>{
        if(index % 2 == 0){
            evenTransactions.push(t)
        }else{
            oddTransactions.push(t)
        }
    })

    localStorage.setItem("evenTransactions", JSON.stringify(evenTransactions));
    setCookie("oddTransactions",JSON.stringify(oddTransactions))
    console.log("Even --> Local storage...",evenTransactions)
    console.log("Odd --> Cookies",oddTransactions)

}


function deleteTransactionByIndex(index){
    index = Number(index)
    if(index % 2 ==0){
        const even = JSON.parse(localStorage.getItem("evenTransactions")) || [];
        const evenIndex = Math.floor(index / 2)
        even.splice(evenIndex , 1)
        localStorage.setItem("evenTransactions",JSON.stringify(even))
    }else{
        const odd = JSON.parse(getCookie("oddTransactions")) || "[]"
        const oddIndex = Math.floor(index / 2)
        odd.splice(oddIndex , 1)
        setCookie("oddTransactions",JSON.stringify(odd))
    }
}
