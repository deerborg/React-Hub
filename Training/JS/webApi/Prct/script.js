function back() {
    history.back();
}

function go() {
    history.go(-2);
}

function forward() {
    history.forward(1);
}


const value = document.getElementById("value");
const value2 = document.getElementById("value2");

const input = document.getElementById("input");
const input2 = document.getElementById("input2");


function setItem() {

    localStorage.setItem("value", input.value);
    sessionStorage.setItem("value", input2.value);
}

function getItem() {
    if (localStorage.getItem("value") == null) {
        value.innerText = "Localde herhangi bir veri yok"
        value2.innerText = "Sessionda herhangi bir veri yok";
    } else {
        value.innerText = "Local : " + "" + localStorage.getItem("value");
        value2.innerText = "Session : " + "" + sessionStorage.getItem("value");
    }
}

function removeItem() {
    localStorage.removeItem("value");
    sessionStorage.removeItem("value");
}

function fetchData(){
    fetch("https://jsonplaceholder.typicode.com/users")
        .then((response) => {
        return response.json();
    }).then((data) => {
        console.log(data);
    })
}