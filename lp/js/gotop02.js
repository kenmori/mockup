/** ver1.1 **/
$(function(){
    var speed = 80,
    end = 0,
    switcher = 0,
    stop,
    windowScroll = 0;


    footer_position = $("#top_footer").offset().top - $("#top_footer").innerHeight() - $(".gotop02").innerHeight();

    $('.gotop02').on('click',function(){
        windowScroll = $(document).scrollTop();
        if(end < windowScroll) {
            stop = setInterval(function(){
                windowScroll = windowScroll - speed;
                window.scroll(0,windowScroll);
                return;
            },0.5);
        }
    });

    $(window).on('scroll',function(){
        windowScroll = $(document).scrollTop();

        if(end > windowScroll || end == windowScroll) {
            clearInterval(stop);
        }
        if(300 < windowScroll && footer_position > windowScroll) {
            $(".gotop02").css('display','block');
        }else {
            $(".gotop02").css('display','none');
        }
    });
});
