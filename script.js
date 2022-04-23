const secondHand = document.querySelector(".second-hand");
const minHand = document.querySelector(".min-hand");
const hourHand = document.querySelector(".hour-hand");


function setDate(){
  const now = new Date();
  const second = now.getSeconds();
  const setSecond = ((second / 60) * 360) + 90;
  secondHand.style.transform = `rotate(${setSecond}deg)`;

  const min = now.getMinutes();
  const setMin = ((min / 60) * 360) + 90;
  minHand.style.transform = `rotate(${setMin}deg)`;

  const hour = now.getHours();
  hourHand.style.transform = `rotate(${hour}deg)`;
}

setInterval(setDate,100);
