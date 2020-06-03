function reqListener () {
    var username = document.getElementById("uname");
    console.log(username);
    var password = document.getElementById("password");
    console.log(password);
}

function checkUserCred() {
    var oReq = new XMLHttpRequest();
    oReq.addEventListener("load", reqListener);
    oReq.open("POST", "localhost:8081/api/user/:username");
    oReq.send(username, password);
}
