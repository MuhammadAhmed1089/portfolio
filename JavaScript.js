var mouse=document.querySelector("#mouse");
var container=document.querySelector("#container-1");
container.addEventListener("mousemove",function(dets){
    gsap.to(mouse,{
        x:dets.clientX,
        y:dets.clientY,
        duration:1,
        ease:"back.out"
    });
});

var timer=gsap.timeline();
   
    timer.to(".menu",{
    right:0,
    duration:0.76
});

timer.from(".menu .menu-items",{
    x:150,
    opacity:0,
    stagger:0.3,
    duration:0.5,
    
});

timer.pause();
var menuIcon=document.querySelector("#container-1 i");
menuIcon.addEventListener("click",function(){
    timer.play();
});

var menuClose=document.querySelector(".menu i");
menuClose.addEventListener("click",()=>{
    timer.reverse();
})
function BreaktheText(){
var name1=document.querySelector(".name h1");
var splittedText=name1.textContent.split("");
var clutter='';
var halfLength=Math.floor(splittedText.length/2)+1;

splittedText.forEach(function(element,idx){
    if(idx<halfLength){
    clutter+=`<span class="Muhammad">${element}</span>`;
    }
    else{
    clutter+=`<span class="Ahmed">${element}</span>`;
    }
});
name1.innerHTML=clutter;
}
BreaktheText();
var iconTimer=gsap.timeline();
iconTimer.from(".name h1 .Muhammad",{
    y:100,
    opacity:0,
    duration:0.45,
     
    stagger:-0.2
})
iconTimer.from(".name h1 .Ahmed",{
    y:-100,
    duration:0.45,
    stagger:0.2,
     
    opacity:0
})
iconTimer.from(".text",{
    x:-300,
    opacity:0,
    
    duration:1.2
})


iconTimer.from(".CS",{
    y:-100,
    opacity:0,

    duration:0.5
})
iconTimer.from(".Front",{
    y:-100,
    opacity:0,
     
    duration:0.5
})
iconTimer.from(".loc",{
    y:-100,
    opacity:0,
     
    duration:0.5
})


gsap.registerPlugin(ScrollTrigger);

let eduTimeline = gsap.timeline({
    scrollTrigger: {
        trigger: ".education",
        start: "top 65%", 
        end:"bottom top",  // when top of .education hits 80% viewport height
        toggleActions: "restart none restart none", // play once
        
    }
});

eduTimeline.from(".title",{
    opacity: 0,
    x: -150,
    duration: 0.5
})
.from("#matric", {
    opacity: 0,
    x: -150,
    duration: 0.5
})
.from("#mat-quals h3", {
    opacity: 0,
    x: 450,
    duration: 0.5,
    stagger: 0.3
})
.from("#inter", {
    opacity: 0,
    x: -150,
    duration: 0.5
})
.from("#inter-quals h3", {
    opacity: 0,
    x: 450,
    duration: 0.5,
    stagger: 0.3
})
.from("#ug", {
    opacity: 0,
    x: -150,
    duration: 0.5
})
.from("#ug-quals h3", {
    opacity: 0,
    x: 450,
    duration: 0.5,
    stagger: 0.3
});
let skillTimeline = gsap.timeline({
    scrollTrigger: {
        trigger: ".skills",
        start: "top 65%", 
        end:"bottom top",  // when top of .education hits 80% viewport height
        toggleActions: "restart none restart none", // play once
        
    }
});
skillTimeline.from("#head-skil-1 h1",{
    y:-50,
    duration:1.3,
    opacity:0
})
skillTimeline.from("#skil-1 img",{
    y:-50,
    duration:0.3,
    opacity:0,
    stagger: 0.2
})
skillTimeline.from("#head-skil-2 h1",{
    y:-50,
    duration:1.3,
    opacity:0
})
skillTimeline.from("#skil-2 img",{
    y:-50,
    duration:0.3,
    opacity:0,
    stagger: 0.2
})
skillTimeline.from("#head-skil-3 h1",{
    y:-50,
    duration:1.3,
    opacity:0
})
skillTimeline.from("#skil-3 img",{
    y:-50,
    duration:0.3,
    opacity:0,
    stagger: 0.2
})
let projectTimeline = gsap.timeline({
    scrollTrigger: {
        trigger: ".projects",
        start: "top 65%",
        end:"bottom top",  // when top of .education hits 80% viewport height
        toggleActions: "restart none restart none", // play once
        
    }
});
projectTimeline.from("#space-1 h1",{
    y:50,
    duration:0.7,
    opacity:0,
    stagger: 0.2
})
projectTimeline.from("#space-1 h4",{
    y:-50,
    duration:0.7,
    opacity:0,
    stagger: 0.2
})
projectTimeline.from("#space-2 h1",{
    y:50,
    duration:0.7,
    opacity:0,
    stagger: 0.2
})
projectTimeline.from("#space-2 h4",{
    y:-50,
    duration:0.7,
    opacity:0,
    stagger: 0.2
})
let contactTimeline = gsap.timeline({
    scrollTrigger: {
        trigger: ".contacts",
        start: "top 65%", 
        end:"bottom top",  // when top of .education hits 80% viewport height
        toggleActions: "restart none restart none", // play once
        
    }
});
contactTimeline.from(".form",{
    x:250,
    duration:0.7,
    opacity:0
})
contactTimeline.from(".type",{
    x:-250,
    duration:0.7,
    opacity:0
})
contactTimeline.from(".phonenum",{
    y:50,
    duration:0.7,
    opacity:0,
    stagger:0.6
})
contactTimeline.from(".social",{
    y:-50,
    duration:0.7,
    opacity:0,
    stagger:0.6
})
var nav=document.querySelectorAll(".menu-items a");
nav.forEach(a=>{
    a.addEventListener("click",function(e){
        e.preventDefault();
        const tag=document.querySelector(this.getAttribute('href'));
        tag.scrollIntoView({
             behavior: 'smooth',
               block: 'start'
        });
    });
});