const hoursTime = document.querySelector(".time.hours")
const minutesTime = document.querySelector(".time.seconds")
const secondsTime = document.querySelector(".time.minutes")

const setRotation = (element, rotationPercentege) => {
    element.style.setProperty("--rotation", rotationPercentege * 360)
}

const setClock = () => {
    const currentDate = new Date();

    const secondsPercentege = currentDate.getSeconds() / 60;
    const minutesPercentege = (secondsPercentege + currentDate.getMinutes()) / 60
    const hoursPercentege = (minutesPercentege + currentDate.getHours()) / 12

    setRotation(secondsTime, secondsPercentege);
    setRotation(minutesTime, minutesPercentege);
    setRotation(hoursTime , hoursPercentege)
}

setClock();

setInterval(setClock, 1000)

