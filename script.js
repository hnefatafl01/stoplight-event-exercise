/*
  Write JS to make this stoplight work.

  When I click on the 'stop' button,
    the top light should turn red.
  When I click on the 'slow' button
    the middle light should turn orange.
  When I click on the 'go' button
    the bottom light should turn green.
*/



document.addEventListener('DOMContentLoaded', function() {
  // var buttons = document.getElementsByName('button');
  var stop = document.getElementById('stopButton');

  stop.addEventListener('click', function () {
    var stoplight = document.getElementById('stopLight');
    stoplight.style.backgroundColor = 'red';
  });

  var slow = document.getElementById('slowButton');
  slow.addEventListener('click', function () {
    var slowLight = document.getElementById('slowLight');
    slowLight.style.backgroundColor = 'yellow';
  });

  var go = document.getElementById('goButton');
  go.addEventListener('click', function () {
    var goLight = document.getElementById('goLight');
    goLight.style.backgroundColor = 'green';
  });
});



////jquery
// $(document).ready(function () {
//   $('#stopButton').click(function(t) {
//     $('#stopLight.bulb').css("background-color", "red");
//   })
//   $('#slowButton').click(function() {
//     $('#slowLight.bulb').css("background-color", "yellow");
//   })
//   $('#goButton').click(function() {
//     $('#goLight.bulb').css("background-color", "green");
//
//   })
// })
