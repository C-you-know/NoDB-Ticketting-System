window.onload = function() {
    let user = localStorage.getItem("username");
    let station = localStorage.getItem("station");

    document.getElementById("displayName").innerText += " " + user;
    document.getElementById("displayStop").innerText += " " + station;

}