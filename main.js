const alarme = document.querySelector("audio")
var sec = 59;
var min = 24;
var interval;

function start(){
    interval =setInterval(watch, 10);
}
function pause(){
    clearInterval(interval);
}
function stop(){
    clearInterval(interval)
    sec = 00;
    min = 00;
    document.getElementById('watch').innerText = '00:00';
    alert("Para começar novamente pressione F5");
    
}

function watch(){
    sec--;
    
    if(sec == 0){
        min --;
        sec = 60;
    }
    if (min == 0){
        sec = 0;
        document.getElementById('count').innerText = '00:00';
        clearInterval(interval);
        alarme.play();
    }

    document.getElementById('watch').innerText = min +':'+ sec;
}
// ---------------------------------------------------- Intervalo---------------------------------------------

var seconds = 59;
var minutes = 4;
var intervalBreak;


function startBreak(){
    intervalBreak = setInterval(count,10);

}
function pauseBreak(){
    clearInterval(intervalBreak);

}
function stopBreak(){
    clearInterval(intervalBreak);
    seconds = 00;
    minutes = 00;
    document.getElementById('count').innerText = '00:00';
    alert("Para começar novamente pressione F5");



}

function count(){
    seconds --;

    if(seconds == 0){
        minutes --;
        seconds = 59;
    }
    else if(minutes == 0){
        seconds = 0;
        clearInterval(intervalBreak);
        document.getElementById('count').innerText = '00:00';
        alarme.play();
    
        
    }
    document.getElementById('count').innerText = minutes + ':' + seconds;

}



