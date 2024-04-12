import { CreateGalleryContent } from "./modal-gallery-content.js";
import { AddWork, CreateAddContent, isImageValid, isTitleValid } from "./modal-add-content.js";
import { SuccessPopup } from "../utils/alertBox.js";

function ModifyModalTitle(title) {
    const h3 = document.getElementById("modal-title");

    if (h3 !== null) {
        h3.textContent = title;
    }
}

/* ---------- Modal Gallery Content ---------- */
export async function LoadGalleryContent () {
    ModifyModalTitle("Galerie photo");

    const previous = document.getElementById("modal-previous");
    if (previous!== null) {
        previous.style.visibility = "hidden";
    }

    const main = document.getElementById("modal-main");
    if (main !== null) {
        main.innerHTML = "";
        main.appendChild(await CreateGalleryContent());
    }

    const submit = document.getElementById("modal-submit");
    if (submit !== null) {
        submit.setAttribute("value", "Ajouter une photo");
        submit.addEventListener("click", LoadAddContent);
    }
}

/* ---------- Modal Add Content ---------- */
async function LoadAddContent () {
    ModifyModalTitle("Ajout photo");

    const previous = document.getElementById("modal-previous");
    if (previous!== null) {
        previous.style.visibility = "visible";
    }

    const main = document.getElementById("modal-main");
    if (main!== null) {
        main.innerHTML = "";
        main.appendChild(await CreateAddContent());
    }

    const submit = document.getElementById("modal-submit");
    if (submit!== null) {
        submit.setAttribute("value", "Valider");
        submit.removeEventListener("click", LoadAddContent);
        submit.setAttribute("form", "add-content-form");
        submit.disabled = true;
    }

    // Form Validation 
    const form = document.getElementById("add-content-form");

    if (form!== null) {
        form.addEventListener("submit", async (e) => {
            e.preventDefault();
            if (isImageValid && isTitleValid) {
                await AddWork();
                SuccessPopup("Votre photo a bien été ajoutée");
                LoadAddContent();
            }
        });
    }

    if (submit.disabled) {
        submit.style.backgroundColor = "#A7A7A7";
        submit.style.cursor = "not-allowed";
    }
}

