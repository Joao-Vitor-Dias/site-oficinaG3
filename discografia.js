let imagemDisco = document.querySelectorAll(".imagem-disco");

let musicaDisco = document.querySelectorAll(".musicas-do-disco");

imagemDisco.forEach((imagem,index) => {

    imagem.addEventListener("mouseenter", () => {

        musicaDisco[index].style.opacity = "1";
    });

    imagem.addEventListener("mouseleave", () => {

        musicaDisco[index].style.opacity = "0";

    });

});