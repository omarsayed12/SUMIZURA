(function () {
    $(".menu-wrapper").on("click", function () {
      $(".hamburger-menu").toggleClass("animate");
      $(this).toggleClass("bg");
      $(".site-wrapper").toggleClass("blur");
    });
  })();
