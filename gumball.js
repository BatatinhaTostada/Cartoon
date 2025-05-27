const perguntas = [
    {
        pergunta: "What is Anais full name??",
        opcoes: ["Anais Errrrrr Watterson", "Anais Buckley Watterson", "Anais Watterson"],
        respostaCorreta: 0,
        feedback: "Correct! That's the Anais full name.",
        imagem: "imagem/anais.gif"
    },
    {
        pergunta: "What is Nicole's husband's name?",
        opcoes: ["Yuki", "Larry", "Richard"],
        respostaCorreta: 2,
        feedback: "Correct! Nicole's husband's name is Ricardo.",
        imagem: "imagem/nicole.gif"
    },
    {
        pergunta: "who is darwin's girlfriend?",
        opcoes: ["Teri", "Carrie", "Carmen"],
        respostaCorreta: 1,
        feedback: "Correct! Carrie is Darwin's girlfriend.",
        imagem: "imagem/darwin.gif"
    },
    {
        pergunta: "Who is the favorite child?",
        opcoes: ["Anais", "Gumball", "Darwin"],
        respostaCorreta: 0,
        feedback: "Correct! Anais is the favorite daughter.",
        imagem: "imagem/senha.PNG"
    },
    {
        pergunta: "Who is Gumball's secret (not so secret) love??",
        opcoes: ["Carrie", "Penny", "Anais"],
        respostaCorreta: 1,
        feedback: "Correct! Gumball is in love with Penny.",
        imagem: "imagem/gumball.gif"
    },
    {
        pergunta: "Who is the director of Elmore?",
        opcoes: ["Sr. Small", "Sr. Robinson", "Sr. Brown"],
        respostaCorreta: 2,
        feedback: "Correct! Mr. Brown is the principal of Elmore Junior High School.",
        imagem: "imagem/sr.brown.gif"
    },
    {
        pergunta: "Who is Gumball's enemy?",
        opcoes: ["Rob", "Tobias", "Larry"],
        respostaCorreta: 0,
        feedback: "Correct! Gumball's enemy is rob.",
        imagem: "imagem/rob.webp"
    },
    {
        pergunta: "What is the name of the episode where Gumball and Darwin discover that they live in an animated world?",
        opcoes: ["The Origin", "The Collapse", "The Comet"],
        respostaCorreta: 1,
        feedback: "Correct! The Collapse, reality begins to crumble and they realize that the world is literally animated.",
        imagem: "imagem/vazio.webp"
    },
    {
        pergunta: "What is the name of the artificial intelligence that takes control of Elmore?",
        opcoes: [" Caos 2.0", "Boberto", "Elmore+"],
        respostaCorreta: 2,
        feedback: "Correct! The whole story takes place in Elmore.",
        imagem: "imagem/elmore.gif"
    },
    {
        pergunta: "Which character was deleted from reality and only Gumball remembers him?",
        opcoes: ["Rob", "Molly", "Rocky"],
        respostaCorreta: 1,
        feedback: "Correct! In the episode “The Nothing”, Molly Collins is erased from existence..",
        imagem: "imagem/molly.gif"
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
        botao.onclick = () => verificarResposta(index);
        opcoesDiv.appendChild(botao);
    });

    // Limpa feedback anterior ao mostrar nova pergunta
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
        feedbackDiv.innerText = "Wrong!";
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
    menu.classList.toggle("ativo");
}