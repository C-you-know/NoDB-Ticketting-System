function verify() {
    let user = document.getElementById("Username").value;
    let pass = document.getElementById("Password").value;
    let station = document.getElementById("Station").value;

    if(user == "ramesh" && pass == "ram@123")
    {
        localStorage.setItem("username",user);
        localStorage.setItem("station",station);

        window.location.href = "issue.html";
    }
    else
        alert("You entered the wrong username or password!");


}
