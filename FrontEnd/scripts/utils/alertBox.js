export function AlertBox(message, type, id, width, maxWidth) {
    const alertBox = document.getElementById(id);

    if (alertBox !== null) {
        switch(type) {
            case "error":
                alertBox.style.backgroundColor = "#F7D7DA";
                alertBox.style.border = "#F7D3D7 2px solid";
                alertBox.style.color = "#723036";
                alertBox.style.width = width;
                alertBox.style.maxWidth = maxWidth;
                alertBox.style.boxSizing = "border-box";
                break;
            case "warning":
                alertBox.style.backgroundColor = "#FAEDCB";
                alertBox.style.border = "#FAECC7 2px solid";
                alertBox.style.color = "#806826";
                alertBox.style.width = width;
                alertBox.style.maxWidth = maxWidth;
                alertBox.style.boxSizing = "border-box";
                break;
        }
        alertBox.style.display = "block";
        alertBox.style.opacity = "1";
        alertBox.innerHTML = message;
    } else {
        console.log("No Element with ID alert-box found");
    }
}

export function HideAlertBox(id) {
    const alertBox = document.getElementById(id);

    if (alertBox !== null) {
        alertBox.style.display = "none";
    } else {
        console.log("No Element with ID alert-box found");
    }

}

export function SuccessPopup(message) {
    const popup = document.createElement("div");

    const icon = document.createElement("i");
    icon.classList.add("fa-regular", "fa-circle-check", "fa-2x");
    icon.style.color = "#2DDB0A";

    const p = document.createElement("p");
    p.textContent = message;
    p.style.fontFamily = "Work Sans";
    p.style.fontSize = "20px";
    p.style.color = "#2DDB0A";

    const button = document.createElement("i");
    button.classList.add("fa-solid", "fa-xmark", "fa-xl");
    button.style.color = "#2DDB0A";
    button.addEventListener("click", ClosePopup);

    popup.setAttribute("id", "success-popup");

    popup.style.width = "fit-content";
    popup.style.height = "fit-content";
    popup.style.padding = "20px";
    popup.style.zIndex = "100";
    popup.style.position = "fixed";
    popup.style.top = "10px";
    popup.style.right = "50vw";
    popup.style.transform = "translateX(50%)";
    popup.style.gap = "10px";

    popup.style.backgroundColor = "#ACF7A0";
    popup.style.border = "#2DDB0A 2px solid";
    popup.style.display = "flex";
    popup.style.flexDirection = "row";
    popup.style.alignItems = "center";
    popup.style.justifyContent = "space-between";

    popup.appendChild(icon);
    popup.appendChild(p);
    popup.appendChild(button);

    const body = document.querySelector("body");

    body.appendChild(popup);
}

function ClosePopup() {
    const popup = document.getElementById("success-popup");

    popup.outerHTML = "";
}