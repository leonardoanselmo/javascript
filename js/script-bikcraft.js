// Seleciona todas as imagens que estão na lista
const imagens = document.querySelectorAll("#galeria li img");

// Seleciona a imagem principal para mudar por outra imagem quando for clicada
function galeriaTrocar(event) {
  const principal = document.querySelector("#imagem-principal");
  const clicada = event.currentTarget;
  principal.src = clicada.src;
  principal.alt = clicada.alt;  
}

//Seleciona a imagem menor pelo evento:click para ficar no lugar da principal
function galeriaClique(imagem) {
  imagem.addEventListener('click', galeriaTrocar);
}

imagens.forEach(galeriaClique);