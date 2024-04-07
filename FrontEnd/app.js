import { Redirection } from "./scripts/components/nav.js";

import { Category } from "./scripts/utils/categoriesEnum.js";
import { LoadWork } from "./scripts/components/gallery.js";
import { LoadFilters } from "./scripts/components/filters.js";

import { Login } from "./scripts/components/login.js";

import { LoadButton } from "./scripts/components/modal.js";

Redirection();

if (window.location.pathname.endsWith("index.html")) {
    /* Check if User is connected or not */
    if (window.localStorage.getItem("user") === null) {
        LoadFilters();
    } else {
        LoadButton();
        LoadWork(Category.All);
    }
} else if (window.location.pathname.endsWith("login.html")) {
    const button = document.getElementById("login-submit");

    if (button !== null) {
        button.addEventListener("click", (event) => {
            event.preventDefault();
            Login();
        });
    }
}