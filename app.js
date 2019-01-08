const secondHand = document.querySelector('.second');
const minuteHand = document.querySelector('.minute');
const hourHand   = document.querySelector('.hour');

function setDate() {
    var current = new Date();
    var seconds = current.getHours() * 3600 + current.getMinutes() * 60 + current.getSeconds();

    var secondsDegrees = ((seconds % 60) * 360 / 60 + 180);
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
  
    var hourRotate = ((seconds % 43200) * 360 / 43200 + 180);
    hourHand.style.transform = `rotate(${hourRotate}deg)`;

    var minuteRotate = ((seconds % 3600) * 360 / 3600 + 180);
    minuteHand.style.transform = `rotate(${minuteRotate}deg)`;

    var secondRotate = ((seconds % 60) * 360 / 60 + 180);
    secondHand.style.transform = `rotate(${secondRotate}deg)`;
}

setInterval(setDate, 1000);