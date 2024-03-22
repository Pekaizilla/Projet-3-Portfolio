async function getWorks () {
    const workList = await fetch("http://localhost:5678/api/works");
    const reponse = await workList.json();

    return reponse;
}

function createWork(imgUrl, title) {
    const figure = document.createElement("figure");

    const img = document.createElement("img");
    img.setAttribute("src", imgUrl);
    img.setAttribute("alt", title);

    const figcaption = document.createElement("figcaption");
    figcaption.textContent = title;

    figure.appendChild(img);
    figure.appendChild(figcaption);

    console.log("Element created : " + figure.outerHTML);

    return figure;
}

async function loadWork() {
    const array = await getWorks();
    const galleryElement = document.querySelector(".gallery");
    if (galleryElement !== null) {
        galleryElement.innerHTML = '';

        for (let i = 0; i < array.length; i++) {
            const figure = createWork(array[i].imageUrl, array[i].title);
            galleryElement.appendChild(figure);
        }
    }
    else {
        console.log("This element doesn't exist");
    }

}
loadWork();