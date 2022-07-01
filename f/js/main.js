
// Завдання
// Необхідно реалізувати наступний функціонал як на відео, а саме:
// •	повернути поточну дату в форматі: день.місяць.рік
// •	повернути поточний час в форматі: година:хвилина:секунда
// •	розробити секундомір в якого є можливість запуску, паузи, запам’ятовування поточного часу та скидування часу(мілісекунди не обов’язково реалізовувати)
// •	розробити таймер в якого є можливість визначення часового проміжку, а також запуск, пауза ти скидування часу


let simpleDate = document.getElementById("simpleDate")
let complexDate = document.getElementById("complexDate")
let milisecondsDate = document.getElementById("milisecondsDate")
let START = document.getElementById("START")
let LOOP = document.getElementById("LOOP")
let STOP = document.getElementById("STOP")
let RESET = document.getElementById("RESET")
let milisecondsDateArea = document.getElementById("milisecondsDateArea")
let timerClock = document.getElementById("timerClock")
let btnPlus = document.getElementById("btnPlus")
let btnMinus = document.getElementById("btnMinus")
let btnStart = document.getElementById("btnStart")
let btnStop = document.getElementById("btnStop")
let btnReset = document.getElementById("btnReset")
let timerArea = document.getElementById("timerArea")

//flags for bottom form top
let watchStartStopTimer = false
//flags for bottom form bottom
let watchStartStop = false 

//time start position
let h = 0
let s = 0
let m = 0
let mm = 0
//time start position button form
let Tm = 25
let Ts = 0

//midle form
STOP.addEventListener("click", stopwatchSTOP)
LOOP.addEventListener("click", stopwatchLOOP)
RESET.addEventListener("click", stopwatchReset)
START.addEventListener("click", stopwatchStart)

//bottom form
btnPlus.addEventListener("click", btnPlusTodo)
btnMinus.addEventListener("click", btnMinusTodo)

btnStart.addEventListener("click", btnStartTodo)
btnReset.addEventListener("click", btnResetTodo)

btnStop.addEventListener("click", btnStopTodo)


// changing flags
function changeFlag1() {
if (watchStartStop) return watchStartStop = false
 else return watchStartStop = true
}

function changeFlag() {
    if (watchStartStopTimer) {
        return watchStartStopTimer = false
    } else return watchStartStopTimer = true
}


//simple Data in topic
setInterval(function () {
    let d = new Date();
    let h = d.getDate();
    let m = 1 + d.getMonth();
    let y = d.getFullYear();
    if (h < 10) h = '0' + h;
    if (m < 10) m = '0' + m;
    simpleDate.innerHTML = `${h}:${m}:${y}`;
}, 1000)

//simple Time in topic
setInterval(function () {
    let d = new Date();
    let s = d.getSeconds();
    let m = 1 + d.getMinutes();
    let h = d.getHours();
    if (h < 10) h = '0' + h;
    if (m < 10) m = '0' + m;
    if (s < 10) s = '0' + s;
    console.log(d)
    complexDate.innerHTML = `${h}:${m}:${s}`;
}, 1000)



if (h < 10) h = '0' + h;
if (m < 10) m = '0' + m;
if (s < 10) s = '0' + s;
if (mm < 10) mm = '00' + mm;
if (mm > 10 && mm < 100) mm = '0' + mm;



//midle form starting time
function stopwatchStart() {
    changeFlag1()
    setInterval(function () {

        if (watchStartStop) {
            mm++
            if (mm == 999) {s++, mm = 0} 
            else if (s == 59) {m++, s = 0} 
            else if (m == 59) {h++, m = 0}
            milisecondsDate.innerHTML = `${h}:${m}:${s}:${mm}`;

        } else return false
    }, 1)
}
/////btns

function stopwatchSTOP() {
    if (watchStartStop) changeFlag1()
}

function stopwatchLOOP() {
    milisecondsDateArea.innerHTML += milisecondsDate.innerHTML + "<br>"
}

function stopwatchReset() {
    milisecondsDateArea.innerHTML = ""
    h, s, m, mm = 0
    milisecondsDate.innerHTML = `${h}:${m}:${s}:${mm}00`;
}



//increment-decrement btn
function btnPlusTodo() {
    Tm++
    timerClock.innerHTML = `${Tm}`;
}

function btnMinusTodo() {
    Tm--
    timerClock.innerHTML = `${Tm}`;
}

function btnStartTodo() {
    if (!watchStartStopTimer) {
        changeFlag()
    }
}
function btnResetTodo() {

    if (watchStartStopTimer) {
        changeFlag()
    }
    Tm = 25
    Ts = 0
    timerArea.innerHTML = `00:00`;
}
function btnStopTodo() {
    if (watchStartStopTimer) {
        changeFlag()
    }
}



setInterval(
    function timerClockShow() {
        if (watchStartStopTimer) {
            if (Ts == 0) {Tm--, Ts = 59}
            Ts--
            if (Ts < 10) { Ts = '0' + Ts; }
            timerArea.innerHTML = `${Tm}:${Ts}`;
        }
    }, 100)













