//change backgroundColor while Scrolling
let link1=document.querySelectorAll('.img7 p > a');
let link2=document.querySelectorAll('.img6 p > a');

let body = document.getElementsByTagName('body')[0];
        body.style.backgroundColor = '#ff608c';

        window.onscroll = function (event) {
            var scroll = window.scrollY;


            if(scroll >0 && scroll<=400){
               body.style.backgroundColor='#ff608c';
               link1.forEach(x=>x.style.color='#fff')
              
            }
            else if (scroll >400 && scroll<= 800) {
               //white
               body.style.backgroundColor = '#fff';
               link1.forEach(x=>x.style.color='#ff608c')
               link2.forEach(x=>x.style.color='#ff608c')

            } 
            else if (scroll >1000 && scroll<= 1800) {
                // Ananda Color
                body.style.backgroundColor = '#00c1b5';
                link2.forEach(x=>x.style.color='#fff')
            } 
            
            else if (scroll >2000 && scroll<= 2500) {
                // orange
                body.style.backgroundColor = '#ff651a';
            } 
            else if (scroll >2500 && scroll<= 3500) {
                // yellow
                body.style.backgroundColor = '#ffbe00';
            } 
            
            else if (scroll >3500 && scroll<= 4000) {
                // blue
                body.style.backgroundColor = '#1d3fbb';
            } 
            else if(scroll > 4000 && scroll<= 4500) {
                // Red
                body.style.backgroundColor = '#e30512';
            }
        }