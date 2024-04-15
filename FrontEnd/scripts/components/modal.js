import { ClosePopup } from "../utils/alertBox.js";
import { Category } from "../utils/categoriesEnum.js";
import { LoadWork } from "./gallery.js";
import { LoadGalleryContent } from "./modal-content.js";

/* ---------- Edit Button ---------- */
// Create Edit Button
function CreateButton () {
    const button = document.createElement("button");
    const icon = document.createElement("i");

    icon.classList.add("fa-regular", "fa-pen-to-square");

    button.appendChild(icon);
    button.innerHTML += "modifier";

    button.setAttribute("type", "button");

    button.addEventListener("click", async () => {
        LoadModalContainer();
        await LoadGalleryContent();
    });
    
    ButtonStyles(button)

    return button;
}

// Style Edit Button
function ButtonStyles(button) {
    button.style.position = "absolute";
    button.style.top = "25%";
    button.style.left = "calc(50% + 125px)";
    button.style.border = "none";
    button.style.background = "none";
    button.style.fontFamily = "Work Sans";
    button.style.display = "flex";
    button.style.gap = "7px";
    button.style.cursor = "pointer";
}

// Load Edit Button in DOM
export function LoadButton () {
    const title = document.getElementById("portfolio").querySelector("h2");
    title.style.position = "relative";

    title.append(CreateButton());
}

/* ---------- Modal Container Element ---------- */
// Create Modal Container Element
function CreateModalContainer () {
    const modalContainer = document.createElement("aside");

    AttributesModalContainer(modalContainer);
    StyleModalContainer(modalContainer);

    modalContainer.addEventListener("click", (event) => {
        if (event.target.id === "modal-container") {
            CloseModalContainer();
        }
    });

    window.addEventListener("keydown", (e) => {
        if (e.key === "Escape" || e.key === "Esc") {
            CloseModalContainer();
        }
    });

    modalContainer.appendChild(CreateModal());

    document.querySelector("body").style.overflow = "hidden";

    return modalContainer;
}

// Add Attributes to Modal Container Element
function AttributesModalContainer (modalContainer) {
    modalContainer.setAttribute("id", "modal-container");
    modalContainer.setAttribute("aria_hidden", "true");
    modalContainer.setAttribute("role", "dialog");
    modalContainer.setAttribute("aria-modal", "true");
}

// Style Modal Container Element
function StyleModalContainer(modalContainer) {
    modalContainer.style.position = "fixed";
    modalContainer.style.top = "0";
    modalContainer.style.left = "0";
    modalContainer.style.width = "100vw";
    modalContainer.style.height = "100vh";
    modalContainer.style.zIndex = "1";
    modalContainer.style.background = "rgba(0, 0, 0, 0.8)";
    modalContainer.style.display = "flex";
    modalContainer.style.justifyContent = "center";
    modalContainer.style.alignItems = "center";
}

// Load Modal Container Element in DOM
function LoadModalContainer () {
    document.querySelector("body").append(CreateModalContainer());
}

// Close Modal Container Element
export function CloseModalContainer () {
    const modalContainer = document.getElementById("modal-container");

    if (modalContainer !== null) {
        document.querySelector("body").removeAttribute("style");

        modalContainer.outerHTML = "";

        window.removeEventListener("keydown", () => {});

        ClosePopup();

        LoadWork(Category.All);
    }
}

/* ---------- Modal Element ---------- */
function CreateModal () {
    const modal = document.createElement("div");

    AttributesModal(modal);
    StyleModal(modal);

    AppendChildModal(modal);

    return modal;
}

// Add Attributes to Modal Element
function AttributesModal (modal) {
    modal.setAttribute("id", "modal");
}

// Style Modal Content
function StyleModal(modal) {
    modal.style.width = "630px";
    modal.style.height = "688px";
    modal.style.borderRadius = "10px";
    modal.style.background = "#fff";
    modal.style.fontFamily = "Work Sans";
    modal.style.display = "flex";
    modal.style.flexDirection = "column";
    modal.style.padding = "40px";
}

// Append Child to Modal Content
function AppendChildModal(modal) {
    modal.appendChild(CreateModalHeader());
    modal.appendChild(CreateModalMain());
    modal.appendChild(CreateModalFooter());
}

// Close Button
function CloseButton () {
    const button = document.createElement("i");

    button.setAttribute("id", "modal-close");

    button.classList.add("fa-solid", "fa-xmark", "fa-xl");

    button.style.cursor = "pointer";

    button.addEventListener("click", CloseModalContainer);


    return button;
}

// Previous Button
function PreviousButton () {
    const button = document.createElement("i");

    button.setAttribute("id", "modal-previous");

    button.classList.add("fa-solid", "fa-arrow-left", "fa-2xl");

    button.style.cursor = "pointer";

    button.addEventListener("click", LoadGalleryContent);

    return button;
}

function CreateModalHeader () {
    const div = document.createElement("div");
    div.setAttribute("id", "modal-header");
    div.style.display = "flex";
    div.style.flexDirection = "column";
    div.style.alignItems = "center";
    div.style.gap = "30px";

    const buttonContainer = document.createElement("div");
    buttonContainer.setAttribute("id", "modal-button-container");
    buttonContainer.style.display = "flex";
    buttonContainer.style.justifyContent = "space-between";
    buttonContainer.style.width = "100%";

    const h3 = document.createElement("h3");
    h3.setAttribute("id", "modal-title");
    h3.style.fontFamily = "Work Sans";
    h3.style.fontSize = "30px";

    buttonContainer.appendChild(PreviousButton());
    buttonContainer.appendChild(CloseButton());

    div.appendChild(buttonContainer);
    div.appendChild(h3);

    return div;
}

function CreateModalMain () {
    const div = document.createElement("div");
    div.setAttribute("id", "modal-main");
    div.style.margin = "50px";
    div.style.flex = "1";

    return div;
}

function CreateModalFooter () {
    const div = document.createElement("div");

    div.setAttribute("id", "modal-footer");

    div.style.display = "flex";
    div.style.flexDirection = "column";
    div.style.alignItems = "center";
    div.style.margin = "0 50px";

    div.appendChild(CreateModalSeparator());
    div.appendChild(CreateModalSubmit());

    return div;
}

function CreateModalSeparator () {
    const separator = document.createElement("span");

    separator.setAttribute("id", "modal-separator");
    separator.style.width = "100%";
    separator.style.height = "1px";
    separator.style.background = "#B3B3B3";
    separator.style.marginBottom = "20px";

    return separator;
}

function CreateModalSubmit () {
    const button = document.createElement("input");

    button.setAttribute("id", "modal-submit");
    button.setAttribute("type", "submit");

    button.style.height = "40px";
    button.style.width = "240px";
    button.style.border = "none";
    button.style.fontSize = "14px";
    button.style.cursor = "pointer";

    return button;
}