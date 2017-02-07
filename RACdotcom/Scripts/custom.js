/********** jQuery for Google Analytics **********/

// here is your chance to follow the 'module pattern?' do that here
// #homeBtn means refer to the element with id 'homeBtn'

//COME BACK AND TEST THIS STUFF AFTER SETTING UP HOSTING!

$(document).ready(function () {
    var pageTitle = $('title').text();

    $('#homeBtn').click(function () {
        var linkText = $(this).text();
        ga('send', 'event', 'pageTitle', 'linkText');
    });
    $('#careerBtn').click(function () {
        var linkText = $(this).text();
        ga('send', 'event', 'pageTitle', 'linkText');
    });
    $('#contactBtn').click(function () {
        var linkText = $(this).text();
        ga('send', 'event', 'pageTitle', 'linkText');
    });
});

/******** END jQuery for Google Analytics ********/

//hides navbar sections on small screens, replaces with '3 horizontal bars' icon
//consider switching this over to jquery also
//i think matt said onclick calls were bad
function navSwitch() {
    var x = document.getElementById("customNav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}