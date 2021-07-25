$(function(){
  $(window).scroll(function(){
    let top = $(window).scrollTop()+100;
    $("nav").stop().animate({"top":top},500);
  })
});
