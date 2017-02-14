var clickHelper = (function (jQuery) {
    var module = {
        onready: function () {
            $('#resumeBtn').on("click", function () {
                ga('create', 'UA-77132406-2', 'auto');
                ga('send', 'pageview', 'Resume');
            });
            $('#navToggle').on("click", function () {
                var x = document.getElementById("customNav");
                if (x.className === "topnav") {
                    x.className += " responsive";
                } else {
                    x.className = "topnav";
                }
            });
            $('#mypic').bind('mouseenter mouseleave', function () {
                $(this).attr({
                    src: $(this).attr('data-other-src')
                    , 'data-other-src': $(this).attr('src')
                })
            });
        }
    }//module
    return module;
})(jQuery);