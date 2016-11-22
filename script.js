document.addEventListener('DOMContentLoaded', function() {
    var stop = document.getElementById('stopButton');
    stop.addEventListener('click', function () {
        var stopLight = document.getElementById('stopLight');
        var redLight = stopLight.style.backgroundColor;
        if (redLight !== 'red') {
            stopLight.style.backgroundColor = 'red';
            slowLight.style.backgroundColor = '#111';
            goLight.style.backgroundColor = '#111';
        } else {
            stopLight.style.backgroundColor = '#111';
        }
    });
    var slow = document.getElementById('slowButton');
    slow.addEventListener('click', function () {
        var slowLight = document.getElementById('slowLight');
        var light = slowLight.style.backgroundColor;
        if (light !== 'yellow') {
            slowLight.style.backgroundColor = 'yellow';
            stopLight.style.backgroundColor = '#111';
            goLight.style.backgroundColor = '#111';
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
            slowLight.style.backgroundColor = '#111';
            stopLight.style.backgroundColor = '#111';
        } else {
            goLight.style.backgroundColor = '#111';
        }
    });
});
