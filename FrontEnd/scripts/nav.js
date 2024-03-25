/* Adding redirection to li Element */
//  Get all li Elements
const links = document.querySelectorAll("li");

// Loop through all li Elements and add event listener to each one
links.forEach( link => {
    switch(link.textContent) {
        case "projets":
            link.addEventListener("click", () => {
                window.location.href = "index.html#portfolio";
            });
            break;
        case "contact":
            link.addEventListener("click", () => {
                window.location.href = "index.html#contact";
            });
            break;
        case "login":
// If User not connected, redirect to login page
            if (window.localStorage.getItem("user") === null) {
                link.addEventListener("click", () => {
                    window.location.href = "login.html";
                });
// Else modify text, remove User and reload page
            } else {
                link.textContent = "logout";
                link.addEventListener("click", () => {
                    window.localStorage.removeItem("user");
                    window.location.reload();
                });
            }
            break;
            
    }
});
