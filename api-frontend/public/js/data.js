
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

    document.querySelector("#output").innerHTML = data[0].title;
}

