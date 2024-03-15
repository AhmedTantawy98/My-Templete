let ourskillsContainer= document.querySelector(".our-skills");
let skillsSpan= document.querySelectorAll(".skill .progress span");

let nums = document.querySelectorAll(".stats .number");
let statsSection = document.querySelector(".stats");
let started = false;

window.onscroll= function() {
    if(window.scrollY >= ourskillsContainer.offsetTop - 200){
        skillsSpan.forEach((span) => {
            span.style.width= span.dataset.width
        })
    }

    if (window.scrollY >= statsSection.offsetTop - 250) {
        if(!started) {
            nums.forEach((num) => startCount(num));
        }
        started = true;
    }
};

function startCount(el) {
    let num = el.dataset.goal;
    let count = setInterval(() => {
        el.textContent++;
        if (el.textContent == num) {
            clearInterval(count);
        }
    }, 2000 / num);
};



let countDownDate= new Date("Dec 30 2024 23:59:59").getTime();
let counter= setInterval(() => {
    let dataNow= new Date().getTime();
    let dataDiff= countDownDate - dataNow;

    let days= Math.floor(dataDiff / (1000 * 60 * 60 * 24));
    let hours= Math.floor(dataDiff % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
    let minutes= Math.floor(dataDiff % (1000 * 60 * 60)/ (1000 * 60));
    let seconds= Math.floor(dataDiff % (1000 * 60) / 1000);

    document.querySelector(".unit .days").innerHTML= days < 10 ? `0${days}` : days
    document.querySelector(".unit .hours").innerHTML= hours < 10 ? `0${hours}` : hours
    document.querySelector(".unit .minutes").innerHTML= minutes < 10 ? `0${minutes}` : minutes
    document.querySelector(".unit .seconds").innerHTML= seconds < 10 ? `0${seconds}` : seconds

    if(dataDiff <= 0){
        clearInterval(counter)
    }
}, 1000);
