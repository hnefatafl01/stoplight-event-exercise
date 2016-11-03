/*
  Write JS to make this stoplight work.

  When I click on the 'stop' button,
    the top light should turn red.
  When I click on the 'slow' button
    the middle light should turn orange.
  When I click on the 'go' button
    the bottom light should turn green.
*/



// document.addEventListener("DOMContentLoaded", function() {
//   var buttons = document.getElementsByName('button');
//
//   var stop = document.getElementById('stopButton');
//
//   stop.addEventListener("click", function () {
//     console.log(buttons.stoplight);
//     // console.log(buttons.stopLight[0].style.backgroundColor = "red");
//   });
//   // //
//   // var slow = document.getElementById('slowButton');
//   // slow.addEventListener("click", function () {
//   //   buttons.slowLight[0].style.backgroundColor = "yellow";
//   // });
//   //
//   // var go = document.getElementById('goButton');
//   // go.addEventListener("click", function () {
//   //
//   //     buttons.goLight[0].style.backgroundColor = "green";
//   //   })
// });
$(document).ready(function () {
  $('#stopButton').click(function(t) {
    $('#stopLight.bulb').css("background-color", "red");
  })
  $('#slowButton').click(function() {
    $('#slowLight.bulb').css("background-color", "yellow");
  })
  $('#goButton').click(function() {
    $('#goLight.bulb').css("background-color", "green");

  })
})
