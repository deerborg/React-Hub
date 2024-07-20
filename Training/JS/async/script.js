function close() {
    console.log("callback:close")
}

function signIn() {
    console.log("callback:sign")
}

function open(nextstep) {
    console.log("callback:open")

    setTimeout(function () {
        nextstep();
    }, 2000)
}


document.getElementById("callback").addEventListener("click", () => {
    if (false) {
        open(close)
    } else {
        open(signIn)
    }
});



const proccess = new Promise((resolve, reject) => {
    let status = false;
    if(status){
        return resolve("Success")
    }else{
        return reject("Failed")
    }
})


proccess.then(msg => {
    console.log(msg);
}).catch(err => {
    console.log(err)
})





