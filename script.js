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
        var light = stoplight.style.backgroundColor;
    if (light !== 'red') {
        stoplight.style.backgroundColor = 'red';
    } else {
        stoplight.style.backgroundColor = '#111';
    }
  });

  var slow = document.getElementById('slowButton');
  slow.addEventListener('click', function () {
    var slowLight = document.getElementById('slowLight');
    var light = slowLight.style.backgroundColor;
    if (light !== 'yellow') {
        slowLight.style.backgroundColor = 'yellow';
    } else {
        slowLight.style.backgroundColor = '#111';
    }
  });

  var go = document.getElementById('goButton');
  go.addEventListener('click', function () {
    var goLight = document.getElementById('goLight');
    var light = goLight.style.backgroundColor;
    if (light !== 'green') {
        goLight.style.backgroundColor = 'green';
    } else {
        goLight.style.backgroundColor = '#111';
    }
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
