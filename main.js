// clock 
// variables
const hourHand = document.querySelector('#hour');
const minuteHand = document.querySelector('#minute');
const secondHand = document.querySelector('#second');

// functions of clock
function setTime(){
    const currentDate = new Date();
    const secondRatio = currentDate.getSeconds()/60;
    const minuteRatio = (secondRatio + currentDate.getMinutes())/60;
    const hourRatio = (minuteRatio + currentDate.getHours())/12;

    wareegSameey(secondHand,secondRatio)
    wareegSameey(minuteHand,minuteRatio)
    wareegSameey(hourHand,hourRatio)
}

function wareegSameey(element,rotationRatio){
    element.style.setProperty('--wareeg',rotationRatio *360)
}

setTime();
setInterval(setTime,1000);


// buttons
// variabels

const btnOne = document.querySelector('#button1');
const btnTwo = document.querySelector('#button2');
const btnThree = document.querySelector('#button3');
const btnFour = document.querySelector('#button4');
const clock = document.querySelector('.clock');
const buttons = document.querySelectorAll('.button');

// changing nodeList to an array

const buttonArray = Array.from(buttons);
const colors = ['#fad490','#f19292','#edf0f2','#ffe100',"#3bbdf5"];

//EventListener

buttonArray[0].addEventListener('click',changeColorOrange)
buttonArray[1].addEventListener('click',changeColorRed)
buttonArray[2].addEventListener('click',changeColorGrey)
buttonArray[3].addEventListener('click',changeColorYellow)
buttonArray[4].addEventListener('click',changeColorLightBlue)

// functions

function changeColorOrange(){
    clock.style.background = colors[0];
}
function changeColorRed(){
    clock.style.background = colors[1];
}
function changeColorGrey(){
    clock.style.background = colors[2];
}
function changeColorYellow(){
    clock.style.background = colors[3];
}
function changeColorLightBlue(){
    clock.style.background = colors[4];
}
