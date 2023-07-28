const hoursTime = document.querySelector(".time.hours")
const secondsTime = document.querySelector(".time.seconds")
const minutesTime = document.querySelector(".time.minutes")



const setRotation = (element, rotationPercentege) => {
    element.style.setProperty("--rotation", rotationPercentege * 360)
}

const setClock = () => {
    const currentDate = new Date();

    const secondsPercentage = currentDate.getSeconds() / 60
    const minutesPercentage = (secondsPercentage  + currentDate.getMinutes()) / 60
    const hoursPercentage = (minutesPercentage + currentDate.getHours()) / 12

    setRotation(secondsTime, secondsPercentage)
    setRotation(minutesTime, minutesPercentage)
    setRotation(hoursTime, hoursPercentage)
}

setClock();

setInterval(setClock, 1000)

