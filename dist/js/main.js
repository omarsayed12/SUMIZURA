(function () {
    $(".menu-wrapper").on("click", function () {
      $(".hamburger-menu").toggleClass("animate");
      $(this).toggleClass("bg");
      $(".site-wrapper").toggleClass("blur");
    });
  })();


const parralaxes = document.querySelector('.parralax');
//make a parralax effect
addEventListener('scroll' , ()=> {
    let scrollOffset = window.scrollY;
    parralaxes.style.backgroundPositionY = (scrollOffset - parralaxes.offsetTop) * .1  + "px"

})
