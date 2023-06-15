const circulo = document.querySelector('#circulo');

function seguirMouse(event) {    
  circulo.style.top = event.x + "px";
  circulo.style.left = event.y + "px";
}

window.addEventListener('mousemove', seguirMouse);