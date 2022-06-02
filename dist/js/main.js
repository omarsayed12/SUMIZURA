/*
(function () {
    $(".menu-wrapper").on("click", function () {
      $(".hamburger-menu").toggleClass("animate");
      $(this).toggleClass("bg");
      $(".site-wrapper").toggleClass("blur");
    });
 })();
*/

const selectLang = document.querySelector('.nav-button');
// function select language
function changeLabg() {
  selectLang.addEventListener('click', function() {
    this.parentNode.parentNode.classList.toggle('closed')
  }, false);
}
changeLabg()
