
const targetdate=new Date("2027-8-20");

let dayscreen=document.querySelector("#day");
let hourscreen=document.querySelector("#hours");
let minutescreen=document.querySelector("#minutes");
let secondscreen=document.querySelector("#seconds");

setInterval(function(){
    let currentDate=new Date();

    const remainingDate= targetdate - currentDate;

    const remainingTime=timeLeft(remainingDate);

    dayscreen.value=remainingTime.days;
    hourscreen.value=remainingTime.hours;
    minutescreen.value=remainingTime.minutes;
    secondscreen.value=remainingTime.seconds;
},1000);



function timeLeft(milliseconds){
    const secondsInMillisecond = 1000;
    const minutesInSecond = 60;
    const hoursInMinute = 60;
    const daysInHour = 24;

    const totalSeconds = Math.floor(milliseconds / secondsInMillisecond);
    const days = Math.floor(totalSeconds / (daysInHour * hoursInMinute * minutesInSecond));
    const hours = Math.floor((totalSeconds % (daysInHour * hoursInMinute * minutesInSecond)) / (hoursInMinute * minutesInSecond));
    const minutes = Math.floor((totalSeconds % (hoursInMinute * minutesInSecond)) / minutesInSecond);
    const seconds = totalSeconds % minutesInSecond;
    return {days,hours,minutes,seconds};
}
