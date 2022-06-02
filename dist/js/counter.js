// counter function
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
  
  