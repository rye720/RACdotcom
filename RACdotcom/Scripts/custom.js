//// usual jquery style
//$(document).ready(function () {

//    /********** jQuery for Google Analytics **********/
//    // there's probably a way to reduce this to one function
//    $('#homeBtn').click(function () {
//        var pageTitle = $('title').text();
//        var linkText = $(this).text();
//        ga('send', 'event', pageTitle, linkText);
//    });

//    $('#careerBtn').click(function () {
//        var pageTitle = $('title').text();
//        var linkText = $(this).text();
//       ga('send', 'event', pageTitle, linkText);
//    });

//    $('#contactBtn').click(function () {
//        var pageTitle = $('title').text();
//        var linkText = $(this).text();
//       ga('send', 'event', pageTitle, linkText);
//    });
//    /******** END jQuery for Google Analytics ********/

//    //hides navbar sections on small screens, replaces with '3 horizontal bars' icon
//    //is there a better way to utilize jquery for this?
//    $('#navToggle').click(function () {
//        var x = document.getElementById("customNav");
//        if (x.className === "topnav") {
//            x.className += " responsive";
//        } else {
//            x.className = "topnav";
//        }
//    });
//});

//$(document).ready(function () {
//    $('#navToggle').on("click", function () {
//        var x = document.getElementById("customNav");
//        if (x.className === "topnav") {
//            x.className += " responsive";
//        } else {
//            x.className = "topnav";
//        }
//    });
//});

//var menuHelp = (function (jQuery) {
//    var module = {
//        onready: function () {
//            $('.navToggle').on("click", function () {
//                $('#customNav.topnav').addClass(" responsive");
//            });
//        }
//    }
//    return module;
//})(jQuery);

var clickHelper = (function (jQuery) {

    var module = {

        onready: function () {
            //alert("test");
            $('#resumeBtn').on("click", function () {
                alert("resume click detected");
                ga('send', 'event', 'resume');
            });

            $('#navToggle').on("click", function () {
                var x = document.getElementById("customNav");
                        if (x.className === "topnav") {
                            x.className += " responsive";
                        } else {
                            x.className = "topnav";
                        }
                //alert("navToggle click detected");
                //$('customNav.topnav').addClass("responsive");
                //$('customNav.responsive').removeClass("responsive");
            });

        }
    }//module

    return module;

})(jQuery);