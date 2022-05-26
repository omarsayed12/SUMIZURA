// (function () {
//     $(".menu-wrapper").on("click", function () {
//       $(".hamburger-menu").toggleClass("animate");
//       $(this).toggleClass("bg");
//       $(".site-wrapper").toggleClass("blur");
//     });
//   })();

const selectLang = document.querySelector('.nav-button');
// function select language
function changeLabg() {
  selectLang.addEventListener('click', function() {
    this.parentNode.parentNode.classList.toggle('closed')
  }, false);
}
changeLabg()

const parralaxes = document.querySelector('.parralax');
//make a parralax effect
addEventListener('scroll' , ()=> {
    let scrollOffset = window.scrollY;
    parralaxes.style.backgroundPositionY = (scrollOffset - parralaxes.offsetTop) * .1  + "px"
})

function numCounter(tagId,maxCount,speed){
  var initialNumber = 0;
  function counter(){
    document.getElementById(tagId).innerHTML = initialNumber;
    ++initialNumber;
  }
  var counterDelay = setInterval(counter,speed);
  function totalTime(){
    clearInterval(counterDelay);
  }
  var totalPeriod = speed * (maxCount);
  setTimeout(totalTime, totalPeriod);
}
numCounter("fCount",15,100);
numCounter("sCount",4.9,200);
numCounter("tCount",4,200);
numCounter("foCount",200,10);

