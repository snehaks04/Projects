let  initialCount =0;

//select value and buttons
const count=document.querySelector('#count');

const button=document.querySelectorAll('.btn');

button.forEach((item)=>{
    item.addEventListener('click',(e)=>{
        const curbtn=e.currentTarget.classList;
        // console.log(curbtn)
        if(curbtn.contains('decrease')){
            initialCount--;
        }
        else if(curbtn.contains('reset')){
            initialCount=0;
        } else{
            initialCount++;
        }
        count.textContent=initialCount;
    });
});