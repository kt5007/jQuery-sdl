$(function(){
  $("a[href*=#]:not([href=#])").click(function(){
    let target = $($(this).attr("href")).offset().top();
    target -= 70;
    $("html, body").animate({scrollTop:target},500);
    return false;
  })
});
