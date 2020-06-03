function reqListener () {
    console.log(this.responseText);
}

function checkUserCred() {
    var oReq = new XMLHttpRequest();
    oReq.addEventListener("load", reqListener);
    oReq.open("POST", "localhost:8081/api/user/:username");
    oReq.send();
}
