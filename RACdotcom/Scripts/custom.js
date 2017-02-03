function navSwitch() {
    var x = document.getElementById("customNav");
    if (x.className == "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}