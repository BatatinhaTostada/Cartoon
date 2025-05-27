let sPerguntas = [
    ["MELAO", "FRUTA"],
    ["UVA", "FRUTA"], 
    ["BANANA", "FRUTA"], 
    ["MELANCIA", "FRUTA"],

    ["SAO PAULO", "CIDADE"], 
    ["RIO", "CIDADE"], 
    ["BRASILIA", "CIDADE"], 
    ["CURITIBA", "CIDADE"], 
    ["SALVADOR", "CIDADE"],

    ["FERNANDA MONTENEGRO", "ATRIZ/ATOR"], 
    ["WAGNER MOURA", "ATRIZ/ATOR"], 
    ["SERGIO MALLANDRO", "ATRIZ/ATOR"],
    ["GLORIA PIRES", "ATRIZ/ATOR"], 
    ["TONY RAMOS", "ATRIZ/ATOR"], 
    ["REGINA CASE", "ATRIZ/ATOR"],
    ["SELTON MELLO", "ATRIZ/ATOR"], 
    ["PAOLLA OLIVEIRA", "ATRIZ/ATOR"], 
    ["CAUA REYMOND", "ATRIZ/ATOR"], 
    ["LAZARO RAMOS", "ATRIZ/ATOR"],

    ["MARTELLO", "FERRAMENTA"], 
    ["CHAVE", "FERRAMENTA"], 
    ["SERRA", "FERRAMENTA"], 
    ["ALICATE", "FERRAMENTA"],
    ["FURADEIRA", "FERRAMENTA"],

    ["CADEIRA", "OBJETO"], 
    ["MESA", "OBJETO"], 
    ["SOFA", "OBJETO"], 
    ["COPO", "OBJETO"],

    ["MICKEY", "PERSONAGEM"], 
    ["MINNIE", "PERSONAGEM"], 
    ["BATMAN", "PERSONAGEM"], 
    ["HOMEM ARANHA", "PERSONAGEM"], 
    ["SUPER HOMEM", "PERSONAGEM"]
];

let iSorteados = [];
let iJogada = 0;
let sPalavraSorteada = "";
let iAcertos = 0;
let iErros = 0;
let iCertas = 0;
let iErradas = 0;

function sorteia() {
    for (let i = 0; i < sPerguntas.length; i++) {
        iSorteados.push(i);
    }
    iSorteados = shuffleArray(iSorteados);
    novaPalavra();
}

function novaPalavra() {
    sPalavraSorteada = limpa(sPerguntas[iSorteados[iJogada]][0]);
    document.getElementById("tema").innerText = "TEMA: " + sPerguntas[iSorteados[iJogada]][1];
    criaInputs(sPalavraSorteada);
    resetTeclado();
    iAcertos = 0;
    iErros = 0;
    document.getElementById('imagem').src = 'img/forca0.png';
    atualizaAcertos();

    verificaImagem('img/forca' + iErros + '.png', function(existe) {
    if (existe) {
        document.getElementById('imagem').src = 'img/forca' + iErros + '.png';
    } else {
        document.getElementById('imagem').style.display = 'none';
    }
});

}

function criaInputs(palavra) {
    let tenta = document.getElementById("tenta");
    tenta.innerHTML = "";
    for (let i = 0; i < palavra.length; i++) {
        let input = document.createElement("input");
        input.type = "text";
        input.disabled = true;
        input.size = 1;
        input.id = "tenta" + i;
        input.classList.add("input-letra");
        tenta.appendChild(input);
    }
}

function Confere(letra) {
    let achou = false;
    for (let i = 0; i < sPalavraSorteada.length; i++) {
        if (letra === sPalavraSorteada[i]) {
            document.getElementById("tenta" + i).value = letra;
            iAcertos++;
            achou = true;
        }
    }

    document.getElementById(letra).disabled = true;

    if (!achou) {
        iErros++;
        document.getElementById('imagem').src = 'img/forca' + iErros + '.png';
    }
    atualizaAcertos();
    acabou();

    
}

function acabou() {
    if (iAcertos === sPalavraSorteada.length) {
        alert("PARABÉNS, VOCÊ CONSEGUIU!!!!");
        iCertas++;
        proximaRodada();
    } else if (iErros === 7) {
        alert("ENFORCADO!!!!!! A palavra era: " + sPalavraSorteada);
        iErradas++;
        proximaRodada();
    }
}

function proximaRodada() {
    iJogada++;
    if (iJogada < iSorteados.length) {
        novaPalavra();
    } else {
        alert("Fim do jogo! Você acertou " + iCertas + " e errou " + iErradas);
    }
    atualizaPlacar();
}

function atualizaAcertos() {
    document.getElementById("acerto").innerText = "ACERTOS: " + iAcertos;
}

function atualizaPlacar() {
    document.getElementById("palcerta").innerHTML = 
        "PALAVRAS CERTAS: " + iCertas + " <br> PALAVRAS ERRADAS: " + iErradas;
}

function resetTeclado() {
    const botoes = document.querySelectorAll('#letras button');
    botoes.forEach(btn => btn.disabled = false);
}

function limpa(palavra) {
    return palavra.normalize('NFD').replace(/[\u0300-\u036f]/g, "").replace(/ /g, "");
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function toggleMenu() {
    const menu = document.getElementById("menu-lateral");
    menu.classList.toggle("ativo");
}
