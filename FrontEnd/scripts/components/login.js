import { PostUser } from "../request/callAPI.js";
import { AlertBox } from "../utils/alertBox.js";

export async function Login() {
    try {
        // Regular Expression for email validation to check if part before and after '@' contains letters, numbers or special characters
        const emailRegEx = new RegExp(/[A-Za-z0-9_!#$%&'*+=.-]+@[A-Za-z0-9.-]+$/, "gm");

        // Regular Expression for password valdation to check if
        const passwordRegEx = new RegExp(/(?=.*\d)(?=.*[A-Z])[a-zA-Z0-9]{6,20}$/);

        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        
        if (email === "" || password === "") {
            throw new Error("Input Error");
        } else if (!emailRegEx.test(email)) {
            throw new Error("Email RegEx Error");
        } else if (!passwordRegEx.test(password)) {
            throw new Error("Password RegEx Error");
        } else {
            let user = await PostUser(email, password);
            if (user !== null) {
                window.localStorage.setItem("user", JSON.stringify(user));
                window.location.href = "./index.html";
            }
        }
    } catch (error) {
        console.error(error);
        switch(error.message) {
            case "Input Error":
                AlertBox("Veuillez remplir tous les champs", "warning", "alert-box", "fit-content", "40%");
                break;
            case "Email RegEx Error":
                AlertBox(`Votre email est invalide.<br/><br/> - Utilisez uniquement des lettres, des chiffres et les caractères spéciaux (_!#$%&'*+=.-) avant '@'`, "warning", "alert-box", "fit-content", "40%");
                break;
            case "Password RegEx Error":
                AlertBox(`Votre mot de passe est invalide.<br/><br/> - Il doit contenir entre 6 à 20 caractères<br/> - Utilisez au moins une majuscule et un chiffre`, "warning", "alert-box", "fit-content", "40%");
                break;
            case "API Error":
                AlertBox("Une erreur est survenue, veuillez réessayer et verifier votre email et mot de passe", "error", "alert-box", "fit-content", "40%");
                break;
        }
    }
}
