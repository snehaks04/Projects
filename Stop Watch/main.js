let Start= document.getElementById('start');
let Stop=document.getElementById('stop');
let Res=document.getElementById('reset');

const min= document.getElementById("mini")
const sec= document.getElementById("seconds");
let MilliSec=document.getElementById('milli');
let timerTime = '00';
let ms=0;
let s=0;
let minute=0;

  let isRunning = false;
  let interval;

  Start.addEventListener('click', ()=>{
    if(isRunning){
      return;
    }
    isRunning=true;
    interval=setInterval(Timer,10);
    });
  
function stop(){
  if(isRunning){
    clearInterval(interval);
  }
  isRunning=false;
}

function reset(){
  stop();
  // timerTime=0;
  ms=0
  s=0
  minute=0
  min.innerHTML='00';
  sec.innerHTML='00';
  MilliSec.innerHTML='00';

}

function Timer(){
  // timerTime++;
  // const m= Math.floor(timerTime/60);
  // const s= timerTime % 60;
ms++;
if(ms==100){
  s++;
  ms=0;
}
if(s>=60){
  minute++;
  s=0;
}

   min.innerHTML= minute <10 ? "0"+ minute  : minute;
   sec.innerHTML= s<10 ? "0"+s : s;
   MilliSec.innerHTML=ms<10 ? "0" + ms : ms;
}

// function milliii(){
//   mm++;
//   if(mm==100){
//     mm=0;
//   }
// }

Stop.addEventListener('click',stop);
Res.addEventListener('click',reset);

