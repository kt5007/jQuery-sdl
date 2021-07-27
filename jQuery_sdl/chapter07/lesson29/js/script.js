$(function () {
  $(window).mousemove(function (e) {
    let A = e.pageX >= $("#thumb").offset().left;
    let B = e.pageX <= $("#thumb").offset().left + $("#thumb").width();
    let C = e.pageY >= $("#thumb").offset().top;
    let D = e.pageY <= $("#thumb").offset().top + $("#thumb").height();
    if (A && B && C && D) {
      let posX = e.pageX;
      let posY = e.pageY;

      let overA = e.pageX <= $("#thumb").offset().left + 20;
      let overB =
        e.pageX >= $("#thumb").offset().left + $("#thumb").width() - 20;
      if (overA) {
        posX = $("thumb").offset().left;
      } else if (overB) {
        posX = $("#thumb").offset().left + $("#thumb").width() - 40;
      } else {
        posX -= 20;
      }

      let overC = e.pageY <= $("#thumb").offset().top + 20;
      let overD =
        e.pageY >= $("#thumb").offset().top + $("#thumb").height() - 20;
      if (overC) {
        posY = $("thumb").offset().top;
      } else if (overD) {
        posY = $("#thumb").offset().top + $("#thumb").height() - 40;
      } else {
        posY -= 20;
      }

      $("span").css({ top: posY, left: posX });
      $("span").show();
      $("#zoom img").css("top",($("#thumb").offset().top - posY)*10);
      $("#zoom img").css("left",($("#thumb").offset().top - posX)*10);
    } else {
      $("span").hide();
    }
  });
});
