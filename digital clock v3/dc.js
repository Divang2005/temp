const $ = (selector) => {
    return document.querySelector(selector);
}

const hour = $('.hour');
const dot = $('.dot');
const min = $('.min');
const dat = $('.dat');
const sec = $('.sec');
const week = $('.week');
let showDot = true;
let showDat = true;  

function update() {
    showDot = !showDot;
    showDat = !showDat;
    const now = new Date();
    if (showDot) {
        dot.classList.add('invisible'); 
    }
    else{
        dot.classList.remove('invisible');
    }

    if (showDat) {
        dat.classList.add('invisible');
    }
    else{
        dat.classList.remove('invisible');
    }

    hour.textContent = String(now.getHours())
    .padStart(2, '0');
    min.textContent = String(now.getMinutes()) 
    .padStart(2, '0'); 
    sec.textContent = String(now.getSeconds())
    .padStart(2, '0');

    Array
    .from(week.children)
    .forEach(
        (ele) => {
            ele.classList.remove('active'); 
        }
    ); 

    week
    .children[now.getDay()]
    .classList
    .add('active');
}; 

setInterval(update, 500);
update(); 