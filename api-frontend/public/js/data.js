
window.onload = async () => {
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