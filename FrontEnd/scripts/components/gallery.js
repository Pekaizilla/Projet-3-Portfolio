import { GetWorks } from "../request/callAPI.js";
import { Category } from "../utils/categoriesEnum.js";


/* Function creating Work Element */
function CreateWork(imgUrl, title) {
    const figure = document.createElement("figure");

    const img = document.createElement("img");
    img.setAttribute("src", imgUrl);
    img.setAttribute("alt", title);

    const figcaption = document.createElement("figcaption");
    figcaption.textContent = title;

    figure.appendChild(img);
    figure.appendChild(figcaption);

    return figure;
}

/* Async Function loading Work Element in DOM */
export async function LoadWork(category) {
    const array = await SortWorks(category);
    const galleryElement = document.querySelector(".gallery");
    if (galleryElement !== null) {
        galleryElement.innerHTML = '';

        for (let i = 0; i < array.length; i++) {
            const figure = CreateWork(array[i].imageUrl, array[i].title);
            galleryElement.appendChild(figure);
        }
    }
    else {
        console.log("This element doesn't exist");
    }

}

/* Async Function sorting Works by Categories and returning an Array */
async function SortWorks(category) {
    const array = await GetWorks();
    let newArray = [];
    switch (category) {
        case Category.All:
            return array;
        
        case Category.Object:
            array.forEach( work => {
                if(work.category.id === 1) {
                    newArray.push(work);
                }
            });
            return newArray;

        case Category.Appartment:
            array.forEach( work => {
                if(work.category.id === 2) {
                    newArray.push(work);
                }
            });
            return newArray;

        case Category.Hostel:
            array.forEach( work => {
                if(work.category.id === 3) {
                    newArray.push(work);
                }
            });
            return newArray;
    }
}
