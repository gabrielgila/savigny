// === REFRESH on resize === //
$(window).bind('resize', function(e) {
    this.location.reload(false);
});

// === VIDEO HOME === //
$(document).ready(function () {
    function scaleToFill() {
        $('video.video-background').each(function(index, videoTag) {
            var $video = $(videoTag),
                videoRatio = videoTag.videoWidth / videoTag.videoHeight,
                tagRatio = $video.width() / $video.height(),
                val;
            if (videoRatio < tagRatio) {
                val = tagRatio / videoRatio * 1.02; <!-- size increased by 2% because value is not fine enough and sometimes leaves a couple of white pixels at the edges -->
            } else if (tagRatio < videoRatio) {
                val =
                    videoRatio / tagRatio * 1.02;
            }
            $video.css('transform','scale(' + val  + ',' + val + ')');
        });
    }

    $(function () {
        scaleToFill();
        $('.video-background').on('loadeddata', scaleToFill);
        $(window).resize(function() {
            scaleToFill();
        });
    });
};


// === NAVBAR === //
$(window).scroll(function () {
    let position = $(this).scrollTop();
    if (window.innerWidth > 768) {
        if (position >= 100) {
            $(".nav-menu").addClass("costum-navbar pt-2 pb-2");
            $(".dulani").removeClass("dark-text");
            $(".dulani-logo").removeClass("white-fill");
        } else {
            $(".nav-menu").removeClass("costum-navbar pt-2 pb-2");
            $(".dulani").addClass("dark-text");
            $(".dulani-logo").addClass("white-fill");
        }
    }
});

// === HAMBURGER BUTTON === //
$(document).ready(function () {
    $(".nav-button").click(function () {
        $(".nav-button").toggleClass("change");
        $(".nav-menu").toggleClass("costum-navbar pt-2 pb-2");
    });
});


// === FILTER Our Products === //
$(document).ready(function () {
    $(".all-selected").click(function () {
        $("#adiran").show();
        $("#idara").show();
        $("#xenia").show();
        $("#dulani").show();
    });

    $(".woman-selected").click(function () {
        $("#adiran").hide();
        $("#idara").hide();
        $("#xenia").show();
        $("#dulani").show();
    });

    $(".sport-selected").click(function () {
        $("#adiran").show();
        $("#idara").show();
        $("#xenia").hide();
        $("#dulani").hide();
    });
});
