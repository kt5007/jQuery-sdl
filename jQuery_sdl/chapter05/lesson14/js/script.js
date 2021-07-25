$(function(){
  let h = 0;
  $("main div").each(function(){
    let hi=$(this).height();
    if(hi>h){
      h=hi;
    }
  });
  $("main div").css("height",h+"px");
});
