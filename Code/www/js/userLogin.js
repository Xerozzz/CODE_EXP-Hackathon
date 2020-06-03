function reqListener () {
    var username = document.getElementById("uname");
    var password = document.getElementById("password");
}

function checkUserCred() {
    var oReq = new XMLHttpRequest();
    oReq.addEventListener("load", reqListener);
    oReq.open("POST", "localhost:8081/api/user/login");
    oReq.send(username, password);
}
