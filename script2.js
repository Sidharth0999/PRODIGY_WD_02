let timer = document.querySelector('.timer');
let startStopBtn = document.getElementById('startStopBtn');
let resetBtn = document.getElementById('resetBtn');
let lapsContainer = document.getElementById('laps');

let hours = 0, minutes = 0, seconds = 0;
let interval = null;
let isRunning = false;

function updateTime() {
    seconds++;
    if (seconds === 60) {
        seconds = 0;
        minutes++;
    }
    if (minutes === 60) {
        minutes = 0;
        hours++;
    }

    let formattedTime = 
        (hours < 10 ? "0" + hours : hours) + ":" +
        (minutes < 10 ? "0" + minutes : minutes) + ":" +
        (seconds < 10 ? "0" + seconds : seconds);
    
    timer.textContent = formattedTime;
}

function startStop() {
    if (isRunning) {
        clearInterval(interval);
        startStopBtn.textContent = "Start";
    } else {
        interval = setInterval(updateTime, 1000);
        startStopBtn.textContent = "Stop";
    }
    isRunning = !isRunning;
}

function reset() {
    clearInterval(interval);
    timer.textContent = "00:00:00";
    startStopBtn.textContent = "Start";
    isRunning = false;
    hours = minutes = seconds = 0;
    lapsContainer.innerHTML = '';
}

startStopBtn.addEventListener('click', startStop);
resetBtn.addEventListener('click', reset);
