import { GetWorks } from "../request/callAPI.js";
import { DeleteWork } from "../request/callAPI.js";
import { SuccessPopup } from "../utils/alertBox.js";
import { LoadGalleryContent } from "./modal-content.js";


export async function CreateGalleryContent () {
    const div = document.createElement("div");

    div.setAttribute("id", "gallery-content");

    div.style.width = "100%";
    div.style.height = "100%";
    div.style.display = "grid";
    div.style.gridRowGap = "30px";
    div.style.gridColumnGap = "10px";
    div.style.gridTemplateColumns = "repeat(5, 1fr)";
    div.style.overflowY = "auto";

    const array = await GetWorks();

    array.forEach( work => {
        div.appendChild(CreateGalleryElement(work));
    });

    return div;
}

function CreateGalleryElement (work) {
    const div = document.createElement("div");

    div.style.width = "100%";
    div.style.height = "100%";
    div.style.position = "relative";

    const img = document.createElement("img");
    img.setAttribute("src", work.imageUrl);
    img.setAttribute("alt", work.title);

    img.style.height = "100%";
    img.style.width = "100%";

    const icon = document.createElement("i");
    icon.classList.add("fa-solid", "fa-trash-can");

    icon.style.color = "#fff";
    icon.style.position = "absolute";
    icon.style.backgroundColor = "#000000";
    icon.style.padding = "4px";
    icon.style.borderRadius = "5px";
    icon.style.zIndex = "1";
    icon.style.top = "5px";
    icon.style.right = "5px";
    icon.style.cursor = "pointer";

    icon.addEventListener("click", (e) => {
        e.preventDefault();
        DeleteWork(work.id);
        SuccessPopup("Le contenu a bien été supprimé");
        LoadGalleryContent();
    });

    div.appendChild(img);
    div.appendChild(icon);
    
    return div;
}