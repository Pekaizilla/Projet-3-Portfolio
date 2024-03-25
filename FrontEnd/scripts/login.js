import { PostUser } from "./callAPI.js";

let user;
window.localStorage.removeItem("user");

async function Login() {
    try {
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        
        if (email === "" || password === "") {
            throw new Error("Please fill all fields");
        } else {
            user = await PostUser(email, password);
            if (user !== null) {
                window.localStorage.setItem("user", JSON.stringify(user));
                window.location.href = "/FrontEnd/index.html";
            }
        }
    } catch (error) {
        console.error(error);
        if (error.message === "Please fill all fields") {
            AlertBox("Veuillez remplir tous les champs", "warning");;
        } else {
            AlertBox("Une erreur est survenue, veuillez réessayer et verifier votre email et mot de passe", "error");
        }
    }
}

function AlertBox(message, type) {
    const alertBox = document.getElementById("alert-box");

    if (alertBox !== null) {
        switch(type) {
            case "error":
                alertBox.style.backgroundColor = "#F7D7DA";
                alertBox.style.border = "#F7D3D7 2px solid";
                alertBox.style.color = "#723036";
                break;
            case "warning":
                alertBox.style.backgroundColor = "#FAEDCB";
                alertBox.style.border = "#FAECC7 2px solid";
                alertBox.style.color = "#806826";
                break;
        }
        alertBox.style.display = "block";
        alertBox.style.opacity = "1";
        alertBox.textContent = message;
    } else {
        console.log("No Element with ID alert-box found");
    }
}

const button = document.getElementById("login-submit");

if (button !== null) {
    button.addEventListener("click", (event) => {
        event.preventDefault();
        Login();
    });
}
