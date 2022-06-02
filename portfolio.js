$(function () {
  $(window).scroll(function () {
    var height = $(document).scrollTop();
    if (height >= 670 && height <= 1340) {
      $(".hanwha dt").removeClass("animate__animated animate__fadeInLeft");
      $(".hanwha dt").addClass("animate__animated animate__fadeInLeft");
    } else if (height >= 1341 && height <= 2000) {
      $(".H_Point dt").removeClass("animate__animated animate__fadeInRight");
      $(".H_Point dt").addClass("animate__animated animate__fadeInRight");
    } else if (height >= 2001 && height <= 2700) {
      $(".line dt").removeClass("animate__animated animate__rotateInDownLeft");
      $(".line dt").addClass("animate__animated animate__rotateInDownLeft");
    } else if (height >= 2701 && height <= 3330) {
      $(".boxResponsive dt").removeClass(
        "animate__animated animate__rotateInDownRight"
      );
      $(".boxResponsive dt").addClass(
        "animate__animated animate__rotateInDownRight"
      );
    } else if (height >= 3331 && height <= 4180) {
      $(".hansol dt").removeClass("animate__animated animate__fadeInLeft");
      $(".hansol dt").addClass("animate__animated animate__fadeInLeft");
    } else if (height >= 4181 && height <= 4550) {
      $(".Clova dt").removeClass("animate__animated animate__fadeInRight");
      $(".Clova dt").addClass("animate__animated animate__fadeInRight");
    } else if (height >= 4551 && height <= 5700) {
      $(".OnD dt").removeClass("animate__animated animate__fadeInUpBig");
      $(".OnD dt").addClass("animate__animated animate__fadeInUpBig");
    }
  });
});
