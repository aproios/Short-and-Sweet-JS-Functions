// Set the date you're counting down to
var countDownDate = new Date("Nov 4, 2044 00:00:25").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var day = Math.floor(distance / (1000 * 60 * 60 * 24));
  var days = Math.floor(day % 365);
  var years = Math.floor((day/365));

  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="countdownTimer"
  document.getElementById("demo").innerHTML = years + "y " + days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";

  // If the count down is finished, display 'ELECTION DAY'
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "ELECTION DAY";
  }
}, 1000);
