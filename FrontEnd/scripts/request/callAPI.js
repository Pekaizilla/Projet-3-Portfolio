const url = "http://localhost:5678/api";

/* Async Function fetching Works from API */
export async function GetWorks () {
    const workList = await fetch(url + "/works");
    const response = await workList.json();

    return response;
}

/* Async Function posting User info to connect */
export async function PostUser (email, password) {
    const user = await fetch(url + "/users/login",
    {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({"email": email, "password": password})
    });

    const response = await user.json();

    if (user.status !== 200) {
        throw new Error("API Error");
    }

    return response;
}

/* Async Function fetching Categories from API */
export async function GetCategories () {
    const categoryList = await fetch(url + "/categories");
    const response = await categoryList.json();

    return response;
}

/* Async Function deleting Work from API */
export async function DeleteWork(id) {
    const work = await fetch(url + "/works/" + id, 
    {
        method: "DELETE",
        headers: {"Authorization": "Bearer " + JSON.parse(window.localStorage.getItem("user")).token}
    });

    if (!work.ok) {
        throw new Error("API Error : " + work.status);
    }
}

export async function PostWork (image, title, categoryId) {
    const formData = new FormData();
    formData.append('image', image.files[0]);
    formData.append('title', title.value);
    formData.append('category', categoryId.value);

    return await fetch(url + "/works",
    {
        method: "POST",
        headers: {"Authorization": "Bearer " + JSON.parse(window.localStorage.getItem("user")).token},
        body: formData
    });
}