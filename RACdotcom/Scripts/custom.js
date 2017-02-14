var clickHelper = (function (jQuery) {
    var module = {
        onready: function () {
            $('#resumeBtn').on("click", function () {
                ga('send', 'event', 'resume');
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