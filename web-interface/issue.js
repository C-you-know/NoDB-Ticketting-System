window.onload = function() {
    let user = localStorage.getItem("username");
    let station = localStorage.getItem("station");
    let station_name = localStorage.getItem("stationName");

    document.getElementById("displayName").innerText += " " + user;
    document.getElementById("displayStop").innerText += " " + station_name;

}

function encodeString(inputString) {
    let encodedStr = btoa(unescape(encodeURIComponent(inputString)));
    return encodedStr;
}


function generateTicket() {
    //Issuer Details
    let user = localStorage.getItem("username");
    let station = localStorage.getItem("station");

    //Time Details
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');

    var text = station + "_" + `${hours}:${minutes}:${seconds}` + "_" + document.getElementById("endBusstop").value + "_" + user + "_" + "TI:DB";
    text = encodeString(text);
    var qrCodeContainer = document.getElementById("ticketdetails");

    // Clear previous QR code
    qrCodeContainer.innerHTML = "";

    // Generate new QR code
    new QRCode(qrCodeContainer, {
        text: text,
        width: 128,
        height: 128
    });

}

function updateTime() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    
    document.getElementById('displayTime').textContent = `Time:${hours}:${minutes}:${seconds}`;
}

setInterval(updateTime, 1000); // Update every second
updateTime(); // Initial call to display the time right away