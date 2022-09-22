/* 스크롤이 되면 헤더 배경색이 들어감 */
$(window).scroll(function(){
    $('#header_wrap').addClass('scroll');
    
    //.scrollTop(): 스크롤바 위치를 알아오거나 정함 
    if($(window).scrollTop() == 0){
        $('#header_wrap').removeClass('scroll');
    }
});


/* 모바일 상태에서 햄버거 버튼을 누르면 메뉴보임*/
$('.m_menuBtn').click(function(){
    $('.m_menuBtn').toggleClass('on');

    //내가 .on을 가지고 있다면 메뉴가 나타나고 메뉴창이 켜진 상태에서는 스크롤 안됨.
    if($(this).hasClass('on')){
        $('.menu_container').fadeIn(300);
        $('body').css({'overflow':'hidden'});
    }else{
        $('.menu_container').fadeOut(300);
        $('body').css({'overflow':'auto'});
    }
    //fadeToggle, fadeIn, toggle
});

$(window).resize(function(){
    let winW = $(window).width();    //브라우저의 가로길이를 변수에
    console.log('브라우저의 가로길이는? ', winW);

    if(winW > 1023 && $('.menu_container').is(':hidden')){
        console.log('.menu_container가 안보여요.');
        $('.menu_container').removeAttr('style');
    }
});