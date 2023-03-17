const API_KEY = "5jJ7wUdSTSd2rU7GEbyY5akM9cE";
const API_URL = "https://ci-jshint.herokuapp.com/api";
const resultsModel = new bootstrap.Modal(document.getElementById("resultsModal"));

document.getElementById("status").addEventListener("click", e => getStatus(e));
document.getElementById("submit").addEventListener("click", e => postForm(e));

async function postForm(e) {

    const form = new FormData(document.getElementById("checksform"));

    const response = await fetch(API_URL, {
        method: "POST",
        headers: {
            "Authorization": API_KEY,
        },
        body: form,
    });

}


async function getStatus(e) {
    const querryString = `${API_URL}?api_key=${API_KEY}`;

    const response = await fetch(querryString);

    const data = await response.json();

    if (response.ok) {
        console.log(data)
    } else {
        throw new Error(data.Error);
    }
}

function displayStatus(data) {

    let heading = "API Key Status";
    let results = `<div>Your key is valid until</div>`;
    results += `<div class="key-status">${data.expiry}</div>`;

    document.getElementById("resultsModalTitle").innerText = heading;
    document.getElementById("results-content").innerHTML = results;
    resultsModal.show();

}