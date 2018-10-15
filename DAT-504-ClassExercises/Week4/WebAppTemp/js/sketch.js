window.onload = setInterval(navClock,100);

function navClock(){
  var x = new Date(); // Todays date

  	  var hour = x.getHours(); // Gets current hour (digital)
      var mins = x.getMinutes(); // Gets current minute
      var hourAMPM = '';
      hour = checkTime(hour);
      mins = checkTime(mins);
      hourAMPM = checkAMPM(hour);
      document.getElementById("myClock").innerHTML=hour +":"+ mins +' '+ hourAMPM; // Assigns the collective values to an ID to be used within HTML/CSS

};

function checkTime(i) {
    if (i < 10) {
      i = "0" + i
    };
    return i;
  };

function checkAMPM(y){
  if (y < 12){
    y =  "AM";
  } else{
    y =  "PM";
  }
  return y;
};
