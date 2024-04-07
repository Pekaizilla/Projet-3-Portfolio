import { GetCategories, PostWork } from "../request/callAPI.js";
import { AlertBox, HideAlertBox } from "../utils/alertBox.js";

export let isImageValid = false;
export let isTitleValid = false;

export async function CreateAddContent() {
    const form = document.createElement("form");

    form.setAttribute("id", "add-content-form");

    form.style.width = "100%";
    form.style.height = "100%";
    form.style.minHeight = "446px"
    form.style.display = "flex";
    form.style.flexDirection = "column";
    form.style.alignItems = "center";
    form.style.justifyContent = "space-around";

    const alert = document.createElement("div");
    alert.setAttribute("id", "alert-box");

    const imgContainer = document.createElement("div");
    imgContainer.setAttribute("id", "img-container");
    imgContainer.style.width = "100%";
    imgContainer.style.height = "200px";
    imgContainer.style.backgroundColor = "#E8F1F6";
    imgContainer.style.display = "flex";
    imgContainer.style.flexDirection = "column";
    imgContainer.style.alignItems = "center";
    imgContainer.style.justifyContent = "space-around";

    const imgIcon = document.createElement("i"); 
    imgIcon.classList.add("fa-regular", "fa-image", "fa-6x");
    imgIcon.style.color = "#B9C5CC";

    imgContainer.appendChild(imgIcon);
    imgContainer.appendChild(CreateImageInput());

    const titleContainer = document.createElement("div");
    titleContainer.setAttribute("id", "title-container");
    titleContainer.style.display = "flex";
    titleContainer.style.flexDirection = "column";
    titleContainer.style.alignItems = "center";
    titleContainer.style.gap = "10px";
    titleContainer.style.width = "100%";

    const titleLabel = document.createElement("label");
    titleLabel.setAttribute("for", "title-input");
    titleLabel.textContent = "Titre";
    StyleLabel(titleLabel);

    const titleInput = document.createElement("input");
    titleInput.setAttribute("type", "text");
    titleInput.setAttribute("id", "title-input");

    titleInput.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
            e.preventDefault();
        }
    });

    titleInput.addEventListener("input", (e) => {
        e.preventDefault();
        const titleRegex = /^[a-zA-Z0-9!@#$%^&*()_+{}\[\]:;"'<>,.?/~`|-]+$/;
        if (titleRegex.test(titleInput.value) && titleInput.value !== "") {
            isTitleValid = true;
            HideAlertBox("alert-box");
            if (isImageValid) {
                const submit = document.getElementById("modal-submit");
                if (submit !== null) {
                    submit.disabled = false;
                    submit.style.backgroundColor = "#1D6154";
                    submit.style.cursor = "pointer";
                }
            }
        } else {
            isTitleValid = false;
            AlertBox("Veuillez verifier votre titre", "warning", "alert-box", "530px", "530px");
        }
    });

    const categoryContainer = document.createElement("div");
    categoryContainer.setAttribute("id", "category-container");
    categoryContainer.style.display = "flex";
    categoryContainer.style.flexDirection = "column";
    categoryContainer.style.alignItems = "center";
    categoryContainer.style.gap = "10px";
    categoryContainer.style.width = "100%";

    const categoryLabel = document.createElement("label");
    categoryLabel.setAttribute("for", "category-select");
    categoryLabel.textContent = "Catégorie";
    StyleLabel(categoryLabel);
    const div = document.createElement("div");
    const categoryInput = document.createElement("select");
    categoryInput.setAttribute("id", "category-select");
    
    categoryInput.style.width = "100%";
    categoryInput.style.height = "100%";
    categoryInput.style.background = "none";
    categoryInput.style.border = "none";
    categoryInput.style.outline = "none";
    categoryInput.style.font = "inherit";

    
    const array = await GetCategories();
    array.forEach(category => {
        const option = document.createElement("option");
        option.setAttribute("value", category.id);
        option.textContent = category.name;
        categoryInput.appendChild(option);
    });

    StyleInput(titleInput);
    StyleInput(div);

    div.appendChild(categoryInput);

    titleContainer.appendChild(titleLabel);
    titleContainer.appendChild(titleInput);

    categoryContainer.appendChild(categoryLabel);
    categoryContainer.appendChild(div);

    form.appendChild(alert);
    form.appendChild(imgContainer);
    form.appendChild(titleContainer);
    form.appendChild(categoryContainer);

    return form;
}

function CreateImageInput() {
    const div = document.createElement("div");
    div.style.display = "flex";
    div.style.flexDirection = "column";
    div.style.alignItems = "center";
    div.style.gap = "5px";
    
    const input = document.createElement("input");
    input.setAttribute("type", "file");
    input.setAttribute("id", "img-input");
    input.setAttribute("accept", ".png, .jpg");
    input.style.opacity = "0";
    input.style.position = "absolute";

    input.addEventListener("change", () => {
        if (input.files.length > 0) {
            const file = input.files[0];
            if (file) {
                if (file.size < 4 * 1024 * 1024) {
                    if (file.type === "image/png" || file.type === "image/jpg") {
                        HideAlertBox("alert-box");
                        isImageValid = true;

                        const imgButton = document.getElementById("imgButton");
                        imgButton.style.opacity = "0";
                        const preview = document.createElement("img");  

                        preview.setAttribute("src", URL.createObjectURL(file));
                        preview.style.height = "100%";
                        preview.style.position = "absolute";
                        preview.style.zIndex = "1";
        
                        const container = document.getElementById("img-container");
                        container.style.position = "relative";
                        container.appendChild(preview);
                        if (isTitleValid) {
                            const submit = document.getElementById("modal-submit");
                            if (submit !== null) {
                                submit.disabled = false;
                                submit.style.backgroundColor = "#1D6154";
                                submit.style.cursor = "pointer";
                            }
                        }
                    } else {
                        isImageValid = false;
                        AlertBox("Le fichier doit être une image au format .png ou .jpg", "warning", "alert-box", "530px", "530px");
                    }
                } else {
                    isImageValid = false;
                    input.value = "";
                    AlertBox("Le fichier est trop volumineux (max 4Mo)", "warning", "alert-box", "530px", "530px");
                }

            }
        }
    });

    const button = document.createElement("button");
    button.setAttribute("id", "imgButton");

    button.style.width = "175px";
    button.style.height = "40px";
    button.style.borderRadius = "50px";
    button.style.color = "#3D6685";
    button.style.backgroundColor = "#CBD6DC";
    button.style.border = "none";
    button.style.cursor = "pointer";

    const label = document.createElement("label");
    label.setAttribute("for", "imgButton");
    label.style.fontFamily = "Work Sans";
    label.style.fontSize = "16px";
    label.style.fontWeight = "550";
    label.style.cursor = "pointer";
    
    const icon = document.createElement("i");
    icon.classList.add("fa-solid", "fa-plus", "fa-xs");

    label.appendChild(icon);
    label.innerHTML += " Ajouter photo";


    button.addEventListener("click", (e) => {
        e.preventDefault();
        input.click();
    });

    button.appendChild(label);

    const imgLabel = document.createElement("label");
    imgLabel.textContent = "jpg, png : 4mo max";
    imgLabel.style.color = "#444444";
    imgLabel.style.fontSize = "10px";
    imgLabel.style.fontFamily = "Work Sans";

    div.appendChild(input);
    div.appendChild(button);
    div.appendChild(imgLabel);

    return div;
}

function StyleInput(input) {
    input.style.fontFamily = "Work Sans";
    input.style.fontSize = "16px";
    input.style.color = "black";
    input.style.backgroundColor = "white";
    input.style.border = "none";
    input.style.textAlign = "start";
    input.style.boxSizing = "border-box";
    input.style.paddingRight = "15px";
    input.style.boxShadow = "0 4px 14px rgba(0, 0, 0, 0.1)";
    input.style.width = "100%";
    input.style.height = "50px";
    input.style.outline = "none";
}

function StyleLabel(label) {
    label.style.fontFamily = "Work Sans";
    label.style.fontSize = "14px";
    label.style.fontWeight = "bold";
    label.style.color = "#3D3D3D";
    label.style.alignSelf = "start";
}

export async function AddWork() {
    try {
        const image = document.getElementById("img-input");
        const title = document.getElementById("title-input");
        const category = document.getElementById("category-select");

        await PostWork(image, title, category);
    } catch (error) {
        console.error(error);
    }
}