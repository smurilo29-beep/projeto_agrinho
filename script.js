let pontos = 0;
let tamanhoFonte = 100;

const btnDesafio = document.getElementById("btnDesafio");
const campoPontos = document.getElementById("pontos");

btnDesafio.addEventListener("click", () => {
    pontos += 10;
    campoPontos.textContent = pontos;

    alert("Parabéns! Você ganhou 10 pontos ecológicos 🌱");
});

function alterarFonte(acao) {
    if (acao === "aumentar") {
        tamanhoFonte += 10;
    } else {
        tamanhoFonte -= 10;
    }

    if (tamanhoFonte < 80) {
        tamanhoFonte = 80;
    }

    document.body.style.fontSize = tamanhoFonte + "%";
}

function alternarContraste() {
    document.body.classList.toggle("contraste");
}