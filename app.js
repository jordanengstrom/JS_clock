const secondHand = document.querySelector('.sec-hand');
const minuteHand = document.querySelector('.min-hand');
const hourHand   = document.querySelector('.hour-hand');

function setDate() {
    const now = new Date();

    const second = now.getSeconds();
    const secondsDegrees = ((second / 60) * 360) + 90;
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

    const minute = now.getMinutes();
    const minutesDegrees = ((minute / 60) * 360) + 90;
    // minuteHand.style.transform = `rotate(${minutesDegrees}deg)`; //discontinuous motion, updates once a minute
    minuteHand.style.transform = `rotate(${(minute + (second / 60) / 60 * 360) + 90}deg)`; //continuous motion

    const hour = now.getHours();
    const hoursDegrees = ((hour / 12) * 360) + 90;
    // hourHand.style.transform = `rotate(${hoursDegrees}deg)`; //discontinuous motion, updates once per hour
    hourHand.style.transform = `rotate(${(hour + (minute / 60) + (second / 3600)) / 12 * 360 + 90}deg)`; //continuous motion
}

setInterval(setDate, 1000);