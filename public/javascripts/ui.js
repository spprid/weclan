$(function(){
    var lnb = function(){
        $win_width = $(window).outerWidth();
        $('.lnb_wrap').css({
            'left' : -($win_width)
        });
        $('.header .btn_lnb').click(function(event) {
            $('.lnb_wrap').addClass('active');
            $('.lnb_wrap').css({
                'left' : '0'
            });
            if($('.mask').length){
                $('.mask').fadeIn();
            } else {
                $('<div class="mask" />').appendTo('body');
                $('.mask').fadeIn();
            }
        });
        $('.lnb_wrap .btn_close').click(function(event) {
            $('.lnb_wrap').removeClass('active');
            $('.lnb_wrap').css({
                'left' : -($win_width)
            });
            $('.mask').fadeOut();
        });
        /* LNB - accodion*/
        var $lnb_depth1 = $('.lnb_menu_wrap ul.lnb_menu .menu_depth1');
        $lnb_depth1.click(function(e){
            e.preventDefault();
            var _this = $(this);
            if(_this.siblings('.menu_depth2').length) {
                _this.parent('li').toggleClass('active');
                _this.siblings('.menu_depth2').stop().slideToggle();
            }
        });
    }
    lnb();
});