document.addEventListener('DOMContentLoaded', function() {

    var stopButton = document.getElementById('stopButton');



        stopButton.addEventListener('click', function () {
            var stopLight = document.getElementById('stopLight');
            var redLight = stopLight.style.backgroundColor;
            function stop() {
                if (redLight !== 'red') {
                    stopLight.style.backgroundColor = 'red';
                    slowLight.style.backgroundColor = '#111';
                    goLight.style.backgroundColor = '#111';
                } else {
                    stopLight.style.backgroundColor = '#111';
                }
            };
            stop();
        });








    var slowButton = document.getElementById('slowButton');
    slowButton.addEventListener('click', function () {
        var slowLight = document.getElementById('slowLight');
        var light = slowLight.style.backgroundColor;
        var slow = function() {
            if (light !== 'yellow') {
                slowLight.style.backgroundColor = 'yellow';
                stopLight.style.backgroundColor = '#111';
                goLight.style.backgroundColor = '#111';
            } else {
                slowLight.style.backgroundColor = '#111';
            }
        };
        slow();
    });



    var goButton = document.getElementById('goButton');



    goButton.addEventListener('click', function () {
        var goLight = document.getElementById('goLight');
        var light = goLight.style.backgroundColor;
        function go() {
            if (light !== 'green') {
                goLight.style.backgroundColor = 'green';
                slowLight.style.backgroundColor = '#111';
                stopLight.style.backgroundColor = '#111';
            } else {
                goLight.style.backgroundColor = '#111';
            }
        };
        go();
    });
});
