let timeDisplay = document.querySelector(".time");

const refreshTime = () => {
  let dateString = new Date().toLocaleString("en-US", {timeZone: "America/Sao_Paulo"});
  let formattedString = dateString.replace(", ", " - ");
  timeDisplay.innerHTML = formattedString;
}

setInterval(refreshTime, 1000);