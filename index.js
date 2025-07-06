let imagemBanda = document.querySelectorAll(".grid-imagem-banda");
let discos = document.querySelectorAll(".flex-foto-disco");
let sobre = document.querySelectorAll(".sobre-a-formacao");
let espacoFotos = document.querySelectorAll(".grid-fotos-discos");
let texto = document.querySelectorAll(".grid-fotos-discos h3");

imagemBanda.forEach((imagem, index) => {
  imagem.addEventListener("mouseenter", () => {
    discos[index].style.opacity = "1";
    texto[index].style.opacity = "1";
    sobre[index].style.opacity = "0";

    sobre[index].style.gridArea = "";
    espacoFotos[index].style.gridArea = "text";
  });

  imagem.addEventListener("mouseleave", () => {
    discos[index].style.opacity = "0";
    texto[index].style.opacity = "0";
    sobre[index].style.opacity = "1";

    sobre[index].style.gridArea = "text";
    espacoFotos[index].style.gridArea = "";
  });

});
