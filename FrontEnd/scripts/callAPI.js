const url = "http://localhost:5678/api";

/* Async Function fetching Works from API */
export async function GetWorks () {
    const workList = await fetch(url + "/works");
    const response = await workList.json();

    return response;
}

/* Async Function posting User info to connect */
export async function PostUser (email, password) {
    const user = await fetch(url + "/users/login",{
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({"email": email, "password": password})
    });

    const response = await user.json();

    if (user.status !== 200) {
        throw new Error(response.message);
    }

    return response;
}