// usual jquery style
$(document).ready(function () {

    /********** jQuery for Google Analytics **********/
    // there's probably a way to reduce this to one function
    $('#homeBtn').click(function () {
        var pageTitle = $('title').text();
        var linkText = $(this).text();
        ga('send', 'event', pageTitle, linkText);
    });

    $('#careerBtn').click(function () {
        var pageTitle = $('title').text();
        var linkText = $(this).text();
       ga('send', 'event', pageTitle, linkText);
    });

    $('#contactBtn').click(function () {
        var pageTitle = $('title').text();
        var linkText = $(this).text();
       ga('send', 'event', pageTitle, linkText);
    });
    /******** END jQuery for Google Analytics ********/

    //hides navbar sections on small screens, replaces with '3 horizontal bars' icon
    //is there a better way to utilize jquery for this?
    $('#navToggle').click(function () {
        var x = document.getElementById("customNav");
        if (x.className === "topnav") {
            x.className += " responsive";
        } else {
            x.className = "topnav";
        }
    });
});


// attempting module pattern
//$(function () {

//    $('#homeBtn').click(function () {
//        var pageTitle = $('title').text();
//        var linkText = $(this).text();
//        alert("pagetitle: " + pageTitle + " linktext: " + linkText);
//        ga('send', 'event', pageTitle, linkText);
//    });

//    $('#careerBtn').click(function () {
//        var pageTitle = $('title').text();
//        var linkText = $(this).text();
//        alert("pagetitle: " + pageTitle + " linktext: " + linkText);
//        ga('send', 'event', pageTitle, linkText);
//    });

//    $('#contactBtn').click(function () {
//        var pageTitle = $('title').text();
//        var linkText = $(this).text();
//        alert("pagetitle: "+pageTitle+" linktext: "+ linkText);
//        ga('send', 'event', pageTitle, linkText);
//    });

//notes (approximate syntax):
// @section pagescripts
// ex:
// var contacthelper = $function()
// on ready:
//   bindings

// need .js files for each page!

//});


