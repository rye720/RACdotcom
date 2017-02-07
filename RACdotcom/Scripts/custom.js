
//hides navbar sections on small screens, replaces with '3 horizontal bars' icon
function navSwitch() {
    var x = document.getElementById("customNav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}
