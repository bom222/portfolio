$(function () {
  // 500px아래로 내려가면 .btn_top 보이기
  $(window).scroll(function () {
    if ($(this).scrollTop() > 500) {
      $(".btn_top").fadeIn();
    } else {
      $(".btn_top").fadeOut();
    }
  });
  $(".btn_top, .logo").on("click", function () {
    $("html, body").animate({ scrollTop: 0 }, 500);
  });

  // 스크롤 이동 시 해당 영역의 메뉴색 변경
  $(window).scroll(function () {
    var height = $(document).scrollTop();

    if (height >= 570 && height <= 1270) {
      $(".header_main>ul>li").removeClass("on on2");
      $(".header_main>ul>li:nth-child(1)").addClass("on on2");
    } else if (height >= 1271 && height <= 5249) {
      $(".header_main>ul>li").removeClass("on on2");
      $(".header_main>ul>li:nth-child(2)").addClass("on on2");
    } else if (height >= 5250) {
      $(".header_main>ul>li").removeClass("on on2");
      $(".header_main>ul>li:nth-child(3)").addClass("on on2");
    } else {
      $(".header_main>ul>li").removeClass("on on2");
    }
  });

  // 각 메뉴 클릭 시 해당 컨텐츠영역으로 이동
  $(".header_main>ul>li:nth-child(1)").on("click", function () {
    var about = $("#skill").position();
    $("html, body").animate({ scrollTop: about.top - 80 }, 400);
  });

  $(".header_main>ul>li:nth-child(2)").on("click", function () {
    var about = $("#portfolio").position();
    $("html, body").animate({ scrollTop: about.top - 80 }, 400);
  });

  $(".header_main>ul>li:nth-child(3)").on("click", function () {
    var about = $("#etc").position();
    $("html, body").animate({ scrollTop: about.top - 40 }, 400);
  });

  // etc 자세히보기 클릭 시 팝업 나타내기
  // etc1
  $("#etc>.etc_main>.etc_1 strong").on("click", function (e) {
    e.preventDefault();
    $("#popup>.popup_main>.bg, #popup1").fadeIn();
  });
  // etc2
  $("#etc>.etc_main>.etc_2 strong").on("click", function (e) {
    e.preventDefault();
    $("#popup>.popup_main>.bg, #popup2").fadeIn();
  });
  // etc3
  $("#etc>.etc_main>.etc_3 strong").on("click", function (e) {
    e.preventDefault();
    $("#popup>.popup_main>.bg, #popup3").fadeIn();
  });
  // etc4
  $("#etc>.etc_main>.etc_4 strong").on("click", function (e) {
    e.preventDefault();
    $("#popup>.popup_main>.bg, #popup4").fadeIn();
  });
  // etc5
  $("#etc>.etc_main>.etc_5 strong").on("click", function (e) {
    e.preventDefault();
    $("#popup>.popup_main>.bg, #popup5").fadeIn();
  });

  // bg클릭 시 팝업창 사라짐
  $("#popup>.popup_main>.popup>.popList>.popImg, .bg").on("click", function () {
    $("#popup>.popup_main>.bg, .popup").fadeOut();
  });

  // prev, next버튼 페이드인아웃
  $("#popup>.popup_main>.popup").mouseenter(function () {
    $("#popup>.popup_main>.popup>button").stop().fadeIn();
  });
  $("#popup>.popup_main>.popup").mouseleave(function () {
    $("#popup>.popup_main>.popup>button").stop().fadeOut();
  });

  // popup slide
  var max = 0;
  var current = 0;
  var container; //선언

  function animate($direction) {
    if ($direction == "next") {
      $(container.children()[1]).css("margin-left", "800px");
      container.append(container.children()[0]);
      TweenMax.to(container.children()[0], 0.8, {
        marginLeft: 0,
        ease: Expo.easeOut,
      });
    } else if ($direction == "prev") {
      container.prepend(container.children()[max - 1]);
      $(container.children()[0]).css("margin-left", "800px");
      // container.append(container.children()[0]);
      TweenMax.to(container.children()[0], 0.8, {
        marginLeft: 0,
        ease: Expo.easeOut,
      });
    }
  }

  // prev, next Event
  function prev() {
    current--;
    if (current < 0) current = max - 1;
    animate("prev");
  }
  function next() {
    current++;
    if (current > max - 1) current = 0;
    animate("next");
  }

  // prev
  $("#popup>.popup_main>.popup>button.prev").on("click", function () {
    container = $(this).parent(".popup").find(".popList");
    max = container.children().length;
    container.addClass("margin-left", "-800px");
    container.prepend(container.children()[max - 1]);
    prev();
  });

  // next
  $("#popup>.popup_main>.popup>button.next").on("click", function () {
    container = $(this).parent(".popup").find(".popList");
    max = container.children().length;
    container.addClass("margin-left", "-800px");
    container.append(container.children()[max - 1]);
    next();
  });

}); //end
