
window.onload = async () => {
    await loadData();
    formSetup();
}

function formSetup() {
    const form = document.querySelector("#game-form");
    form.onsubmit = handleFormSubmit;
}

async function handleFormSubmit(event) {
    event.preventDefault(); //prevent the form from submitting

    console.log("Submitted");

    const bodyData = readForm();

    //"Submit" the form using fetch()
    const uri = "http://localhost:8001/api/v1/games/game";
    const config = {
        method: "post",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(bodyData)
    }
    
    const response = await fetch(uri, config);
    const responseBody = await response.json();

    console.log(responseBody);
}

function readForm() {
    return {
        id: document.querySelector("#id").value,
        title: document.querySelector("#title").value,
        franchise: document.querySelector("#franchise").value,
        genre: document.querySelector("#genre").value,
    }
}

async function loadData() {
    let uri = 'http://localhost:8001/api/v1/games';
    let config = {
        method: "get",
        mode: "cors"
    }

    const response = await fetch(uri, config);
    console.log(response);  
    const data = await response.json();
    console.log(data);

    // document.querySelector("#output").innerHTML = data[0].title;
    renderOnLoad(data);
}

function renderOnLoad(data) {
    for (const record of data) {
        addTableRow(record);
    }
}

function addTableRow(rowData) {
    const html = `<tr>
        <td>${rowData.id}</td>
        <td>${rowData.title}</td>
        <td>${rowData.franchise}</td>
        <td>${rowData.genre[0]}</td>
    </tr>`;

    const tbody = document.querySelector("#games-list");
    tbody.innerHTML += html;
}