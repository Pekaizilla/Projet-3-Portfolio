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