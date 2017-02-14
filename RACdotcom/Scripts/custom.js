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