const colorButton = document.getElementById('colorButton');

colorButton.addEventListener('click', changeColor);

function changeColor() {
  const randomColor = `rgb(${getRandomNumber()}, ${getRandomNumber()}, ${getRandomNumber()})`; 
  document.body.style.backgroundColor = randomColor;
  document.container.style.backgroundColor = randomColor;
}

function getRandomNumber() {
  return Math.floor(Math.random() * 256);
}







