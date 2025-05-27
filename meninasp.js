const perguntas = [
    {
        pergunta: "Qual é o nome da cidade onde as Meninas Superpoderosas moram?",
        opcoes: ["Metropolis", "Townsville", "Gotham"],
        respostaCorreta: 1,
        feedback: "Correto! A cidade onde as meninas spuerpoderosas moram é Townsville.",
        imagem: "imagem/powerpuff.gif"
    },
    {
        pergunta: "Quem é o principal vilão das Meninas Superpoderosas?",
        opcoes: ["Macaco louco", "Fuzzy Confusão", "Gangue da gangrena"],
        respostaCorreta: 0,
        feedback: "Correto! Principal vilão é Macaco louco.",
        imagem: "imagem/mojo jojo.gif"
    },
    {
        pergunta: "Qual dos poderes das Meninas Superpoderosas é exclusivo da personagem Florzinha?",
        opcoes: ["Visão de raios-X", "Soprar gelo", "Super velocidade"],
        respostaCorreta: 1,
        feedback: "Correto! O Superpoder exclusivo é Soprar gelo.",
        imagem: "imagem/florzinha.gif"
    },
    {
        pergunta: "Como as Meninas Superpoderosas ganharam seus poderes?",
        opcoes: ["Um feitiço mágico", "Experimentos científicos", "Um raio extraterrestre"],
        respostaCorreta: 1,
        feedback: "Correto! Ganharam poderes atraves de Experimentos científicos.",
        imagem: "imagem/x.gif"
    },
    {
        pergunta: "Qual é a habilidade especial da Lindinha?",
        opcoes: ["Controlar o fogo", "Super audição", " Falar com animais"],
        respostaCorreta: 2,
        feedback: "Correto! A habilidade especial de Lindinha é Falar com animais.",
        imagem: "imagem/lindinha.gif"
    },
    {
        pergunta: "Em qual episódio as Meninas Superpoderosas enfrentam uma versão distorcida delas mesmas?",
        opcoes: ["Speed Demon", "The Powerpuff Girls Rule", "Collect Her"],
        respostaCorreta: 0,
        feedback: "Correto! O episódio é Speed Demon.",
        imagem: "imagem/boys.gif"
    },
    {
        pergunta: "Qual personagem é conhecido por sempre fazer planos complicados e tentar destruir Townsville?",
        opcoes: ["Fuzzy Confusão", "Ele", "Macaco louco"],
        respostaCorreta: 2,
        feedback: "Correto! O personagem é o Macaco louco.",
        imagem: "imagem/fuzzy.gif"
    },
    {
        pergunta: "O que faz o personagem 'Ele' ser considerado tão perigoso?",
        opcoes: ["Por ser a representação de satanás no desenho", "Ele é capaz de manipular os sentimentos e o medo das pessoas", "Ele controla a mente das Meninas"],
        respostaCorreta: 1,
        feedback: "Correto! Ele é capaz de manipular os sentimentos e o medo das pessoas.",
        imagem: "imagem/ele.gif"
    },
    {
        pergunta: "Qual é o nome do herói da cidade que frequentemente ajuda as Meninas Superpoderosas?",
        opcoes: ["O Professor", " O Moço Misterioso", "Batman"],
        respostaCorreta: 1,
        feedback: "Correto! O herói que ajuda as maninas é O Moço Misterioso.",
        imagem: "imagem/meninas.gif"
    },
    {
        pergunta: "Qual é o nome completo do vilão 'Macaco Louco' antes de se tornar um vilão?",
        opcoes: ["Macaco Utonium", "Macaco Louco Jr.", "Joseph Jojo"],
        respostaCorreta: 0,
        feedback: "Correto! O nome do macado louco era Macaco .",
        imagem: "imagem/professor.gif"
    }
];

let perguntaAtual = 0;
let acertos = 0;

function comecarJogo() {
    document.getElementById("jogo").style.display = "none";
    document.getElementById("container-pergunta").style.display = "block";
    mostrarPergunta();
}

function mostrarPergunta() {
    const perguntaObj = perguntas[perguntaAtual];
    document.getElementById("pergunta").innerText = perguntaObj.pergunta;

    // Mostrar a imagem correspondente à pergunta
    const imagemDiv = document.getElementById("imagem");
    imagemDiv.innerHTML = `<img src="${perguntaObj.imagem}" alt="Imagem da pergunta" class="imagem-pergunta">`;

    const opcoesDiv = document.getElementById("opcoes");
    opcoesDiv.innerHTML = ""; // Limpa opções anteriores

    perguntaObj.opcoes.forEach((opcao, index) => {
        const botao = document.createElement("button");
        botao.innerText = opcao;
        botao.classList.add("opcao");

        // Adiciona classe de cor com base no índice
        if (index === 0) botao.classList.add("vermelho");
        if (index === 1) botao.classList.add("verde");
        if (index === 2) botao.classList.add("azul");

        botao.onclick = () => verificarResposta(index);
        opcoesDiv.appendChild(botao);
    });

    document.getElementById("feedback").innerText = "";
}

function verificarResposta(indiceSelecionado) {
    const perguntaObj = perguntas[perguntaAtual];
    const feedbackDiv = document.getElementById("feedback");

    if (indiceSelecionado === perguntaObj.respostaCorreta) {
        acertos++;
        feedbackDiv.innerText = perguntaObj.feedback;
        feedbackDiv.style.color = "#66f507"; // Verde
    } else {
        feedbackDiv.innerText = "Errado!";
        feedbackDiv.style.color = "#a32929"; // Vermelho
    }
    
    perguntaAtual++;

    if (perguntaAtual < perguntas.length) {
        setTimeout(mostrarPergunta, 1000);
    } else {
        setTimeout(terminarJogo, 1000);
    }
}

function terminarJogo() {
    document.getElementById("container-pergunta").style.display = "none";
    const resultadoDiv = document.getElementById("jogo");
    resultadoDiv.innerHTML = `
        <h2>Congratulations!! You completed the game.</h2>
        <br>
        <p>You got ${acertos} out of ${perguntas.length} questions right!</p>
        <br>
        <button id="tentar-novamente" class="botao" onclick="reiniciarJogo()">Tentar Novamente</button>
    `;
    resultadoDiv.style.display = "block";
}

function reiniciarJogo() {
    // Reinicia o estado do jogo
    perguntaAtual = 0;
    acertos = 0;

    // Oculta o resultado e começa o jogo novamente
    document.getElementById("jogo").style.display = "none";
    document.getElementById("container-pergunta").style.display = "block";
    mostrarPergunta();
}

function toggleMenu() {
    const menu = document.getElementById("menu-lateral");
    if (menu.style.left === "0px") {
        menu.style.left = "-250px";
    } else {
        menu.style.left = "0px";
    }
}
