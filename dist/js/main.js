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

function X() {
  // Bind Click event to the drop down navigation button
  document.querySelector('.nav-button').addEventListener('click', function() {
    /*  Toggle the CSS closed class which reduces the height of the UL thus
        hiding all LI apart from the first */
    this.parentNode.parentNode.classList.toggle('closed')
  }, false);
}
X();