const condicao = Boolean(true);

console.log(condicao);

const elemento = document.querySelector("section");

if(elemento || document.querySelector("body")) {
  console.log("Existe a TAG");
}

