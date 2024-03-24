import { Category } from "./categoriesEnum.js";
import { LoadWork } from "./gallery.js";

/* Function creating Filters Elements */
function CreateFilters() {
    const div = document.createElement("div");
    div.setAttribute("id", "filters-container");

    const firstButton = document.createElement("button");
    firstButton.textContent = "Tous";
    firstButton.classList.add("filter");
    firstButton.addEventListener("click", () => {
        LoadWork(Category.All);
        ToggleFilter();
        firstButton.classList.toggle("filter-selected");
        StyleSelectedFilter();

    });
    firstButton.click();

    const secondButton = document.createElement("button");
    secondButton.textContent = "Objets";
    secondButton.classList.add("filter");
    secondButton.addEventListener("click", () => {
        LoadWork(Category.Object);
        ToggleFilter();
        secondButton.classList.toggle("filter-selected");
        StyleSelectedFilter();
    });

    const thirdButton = document.createElement("button");
    thirdButton.textContent = "Appartements";
    thirdButton.classList.add("filter");
    thirdButton.addEventListener("click", () => {
        LoadWork(Category.Appartment);
        ToggleFilter();
        thirdButton.classList.toggle("filter-selected");
        StyleSelectedFilter();
    });

    const fourthButton = document.createElement("button");
    fourthButton.textContent = "Hotels & restaurants";
    fourthButton.classList.add("filter");
    fourthButton.addEventListener("click", () => {
        LoadWork(Category.Hostel);
        ToggleFilter();
        fourthButton.classList.toggle("filter-selected");
        StyleSelectedFilter();
    });

    div.appendChild(firstButton);
    div.appendChild(secondButton);
    div.appendChild(thirdButton);
    div.appendChild(fourthButton);

    return div;
}

/* Function toggle Button CSS class */
function ToggleFilter() {
    const button = document.querySelector(".filter-selected");

    if (button !== null) {
        button.style.color = "#1D6154";
        button.style.backgroundColor = "white";
        button.classList.toggle("filter-selected");  
    } else {
        console.log("No Element with CSS class filter-selected found");
    }
}

/* Function styling Filters Container */
function StyleFiltersContainer() {
    const container = document.getElementById("filters-container");

    if (container !== null) {
        container.style.display = "flex";
        container.style.justifyContent = "center";
        container.style.alignItems = "center";
        container.style.gap = "15px";
    } else {
        console.log("No Element with ID filters-container found");
    }
}

/* Function styling Filters Element */
function StyleFilters() {
    const buttons = document.querySelectorAll(".filter");

    if (buttons !== null) {
        console.log(buttons);
        for(const button of buttons) {
            button.style.height = "50px";
            button.style.fontSize = "1.2rem";
            button.style.border = "2px solid #1D6154";
            button.style.fontFamily = "Syne";
            button.style.fontWeight = "700";
            button.style.color = "#1D6154";
            button.style.backgroundColor = "white";
            button.style.marginBottom = "2em";
            button.style.padding = "0 30px";
            button.style.textAlign = "center";
            button.style.borderRadius = "60px";
        }
    } else {
        console.log("No Element with CSS class filter found");
    }

    StyleSelectedFilter();
}

/* Function styling Selected Filter Element */
function StyleSelectedFilter() {
    const button = document.querySelector(".filter-selected");

    button.style.color = "white";
    button.style.backgroundColor = "#1D6154";
}

/* Function inserting Filter Element in DOM before Gallery */
function LoadFilters() {
    const portfolioElement = document.getElementById("portfolio");
    const galleryElement = document.querySelector(".gallery");

    portfolioElement.insertBefore(CreateFilters(), galleryElement);

    StyleFiltersContainer();
    StyleFilters();
}

LoadFilters();