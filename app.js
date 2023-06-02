var timerDisplay = document.querySelector('.timerDisplay');
var stopBtn = document.getElementById('stopBtn');
var startBtn = document.getElementById('startBtn');
var resetBtn = document.getElementById('resetBtn');

var msec = 00;
var secs = 00;
var mins = 00;

var timerId = null;

startBtn.addEventListener('click', function(){
    if(timerId !== null){
        clearInterval(timerId);
    }
    timerId = setInterval(startTimer, 10);
});

stopBtn.addEventListener('click', function(){
    clearInterval(timerId);
});

resetBtn.addEventListener('click', function(){
    clearInterval(timerId);
    timerDisplay.innerHTML = `00 : 00 : 00`;
    msec = secs = mins = 00;
});

function startTimer(){
    msec++;
    if(msec == 100){
        msec = 0;
        secs++;
        if(secs == 60){
            secs = 0;
mins++;
        }
    }

    var msecString = msec < 10 ? `0${msec}` : msec;
    var secsString = secs < 10 ? `0${secs}` : secs;
    var minsString = mins < 10 ? `0${mins}` : mins;
    

    timerDisplay.innerHTML = `${minsString} : ${secsString} : ${msecString}`;

}