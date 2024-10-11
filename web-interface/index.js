function verify() {
    let user = document.getElementById("Username").value;
    let pass = document.getElementById("Password").value;
    let station = document.getElementById("Station").value;
    let station_name = document.getElementById("Station").options[document.getElementById("Station").selectedIndex].text;


    if(user == "ramesh" && pass == "ram@123")
    {
        localStorage.setItem("username",user);
        localStorage.setItem("station",station);
        localStorage.setItem("stationName",station_name);

        window.location.href = "issue.html";
    }
    else
        alert("You entered the wrong username or password!");


}
