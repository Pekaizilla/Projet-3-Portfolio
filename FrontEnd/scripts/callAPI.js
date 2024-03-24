const url = "http://localhost:5678/api";

/* Async Function fetching Works from API */
export async function GetWorks () {
    const workList = await fetch(url + "/works");
    const reponse = await workList.json();

    return reponse;
}