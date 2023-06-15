const botao = document.querySelector(".adicionar");

function somar(){
  const div = document.querySelector(".nula");
  const total = Number(div.innerHTML) + 1;
  if(total <= 10) {
    div.innerHTML = total;
  } else {
    div.innerHTML = "Não é possível adicionar mais!";
  }
}

if(botao) {
  botao.addEventListener('click', somar);
}
