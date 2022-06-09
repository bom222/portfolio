$(function () {
  $(window).scroll(function () {
    var height = $(document).scrollTop();
    if (height >= 680 && height <= 1350) {
      $(".hanwha dt").removeClass("animate__animated animate__fadeInLeft");
      $(".hanwha dt").addClass("animate__animated animate__fadeInLeft");
    } else if (height >= 1351 && height <= 2010) {
      $(".H_Point dt").removeClass("animate__animated animate__fadeInRight");
      $(".H_Point dt").addClass("animate__animated animate__fadeInRight");
    } else if (height >= 2011 && height <= 2710) {
      $(".line dt").removeClass("animate__animated animate__rotateInDownLeft");
      $(".line dt").addClass("animate__animated animate__rotateInDownLeft");
    } else if (height >= 2711 && height <= 3340) {
      $(".boxResponsive dt").removeClass("animate__animated animate__rotateInDownRight");
      $(".boxResponsive dt").addClass("animate__animated animate__rotateInDownRight");
    } else if (height >= 3341 && height <= 4190) {
      $(".hansol dt").removeClass("animate__animated animate__fadeInLeft");
      $(".hansol dt").addClass("animate__animated animate__fadeInLeft");
    } else if (height >= 4191 && height <= 4800) {
      $(".Clova dt").removeClass("animate__animated animate__fadeInRight");
      $(".Clova dt").addClass("animate__animated animate__fadeInRight");
    } else if (height >= 4801 && height <= 6000) {
      $(".OnD dt").removeClass("animate__animated animate__fadeInUpBig");
      $(".OnD dt").addClass("animate__animated animate__fadeInUpBig");
    }
  });
});
