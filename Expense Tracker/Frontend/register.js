document.getElementById("registerForm").addEventListener("submit", async function (e) {
    e.preventDefault();

    const id = document.getElementById("id").value.trim();
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;
    const age = document.getElementById("age").value;
    const error = document.getElementById("error");

    error.textContent = "";

    if (!id || !name || !email || !password || !age) {
        error.textContent = "All fields are required";
        return;
    }

    if (age < 16 || age > 80) {
        error.textContent = "Enter a valid age";
        return;
    }

    if (password.length < 6) {
        error.textContent = "Password must be at least 6 characters";
        return;
    }

    try {
        const res = await fetch("http://localhost:3000/user/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            credentials : 'include',
            body: JSON.stringify({
                id,
                name,
                email,
                password,
                age
            })
        });

        const data = await res.json();

        if (!res.ok) {
            error.textContent = data.message
            return;
        }
        console.log(data)
        // alert(data);
        // e.target.reset();

    }catch(err){
        error.textContent = "Server Not reachable"
    }

});
