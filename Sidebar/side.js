const crossbtn=document.getElementById('cross');
const sidebar=document.querySelector('.container')
// const hamburger=document.getElementById('Layer_1');
// const line1=hamburger.getElementById('XMLID_1_');
// const line2=hamburger.getElementById('XMLID_2_');
// const line3=hamburger.getElementById('XMLID_3_');

// const lines=[line1,line2,line3];
// const tlm=new TimelineMax({})

// const toggleMenu= new TimelineMax({paused:true, reversed:true})
// toggleMenu
//     .to(line1,0.125,{rotation:45, transformOrigin:"50% 50%", y:40},"cross")
//     .to(line2,0.125,{scaleX:0},0)
//     .to(line3,0.125,{rotation:-45,transformOrigin:"50% 50%",y:-35},"cross");

//     hamburger.addEventListener('click',()=>{
//         toggleMenu.reversed()?toggleMenu.play():toggleMenu.reverse()
//     })
crossbtn.addEventListener('click',()=>{
    sidebar.classList.toggle('ishidden');
    // console.log('button is clicked')
});
// crossbtn.addEventListener('click',()=>{
// if (sidebar.classList.contains('ishidden')) {
//     sidebar.classList.remove('ishidden')
//   } else {
//     sidebar.classList.add('ishidden')
//   }
// });
