$(function(){
    let winWidth;
    /* resize 윈도우 창이 변경되면 이걸수행해주세요*/
    $(window).resize(function() {
        winWidth=$(this).width();
        if(winWidth <= 1024){
            $('.main-menu').off('mouseenter');
            $('.main-menu').off('mouseleave')
            $('.nav').prependTo('.h-top');
            $('.jordan-logo').find('img').attr('src','images/AIR-JORDAN-LOGO-b.svg')
        }else{
            $('nav').appenTo('header');
            $('.jordan-logo').find('img').attr('src','images/AIR-JORDAN-LOGO.svg')
            $('.main-menu').on({
                mouseenter:function() {
                    $('.sub-menu, .sub-bg').show();
                },
                mouseleave:function() {
                    $('.sub-menu, .sub-bg').hide();
                }
            });
        }
    }); //resize 이벤트 종료
    $(window).trigger('resize'); // trigger 강제이벤트 발생
    $('.menu-btn').click(function (event) {
        event.stopPropagation(); /* 내 부모 이벤트 전달 막음  */
        $('.index-wrap').css('filter' , 'blur(10px)');
        $('body, html').css({
            height:'100vh',
            overflow:'hidden'
        });
        $('.menu-area').show();
        $('.h-top').animate({
            right:'0%'
        },'fast')
    }); //태블릿 , 모바일에서 사용하는 메뉴
    $('.main-menu>li>a').click(function() {
        $(this).siblings('.sub-menu').animate({
             
        },fast);
    });
});