const perguntas = [
    {
        pergunta: "¿De qué color es el perro?",
        opcoes: ["Rojo", "Amarillo", "Verde"],
        respostaCorreta: 1,
        feedback: "¡Correcto! El perro es amarillo.",
        imagem: "imagem/jake.gif"
    },
    {
        pergunta: "¿De qué color es la bulto princesa?",
        opcoes: ["Amarillo", "Verde", "Púrpura"],
        respostaCorreta: 2,
        feedback: "¡Correcto! La bulto princesa es púrpura.",
        imagem: "imagem/caroco.webp"
    },
    {
        pergunta: "¿Qué sonido hace este animal?",
        opcoes: ["Auau", "Gwank", "Quack"],
        respostaCorreta: 1,
        feedback: "¡Correcto! El gunter dice 'gwank'.",
        imagem: "imagem/gunter.gif"
    },
    {
        pergunta: "¿Cuál de estos está casado con doña Tromba?",
        opcoes: ["Señor cerdo", "Mayordomo de menta", "Limoncillo"],
        respostaCorreta: 0,
        feedback: "¡Correcto! Es el señor cerdo.",
        imagem: "imagem/donatromba.webp"
    },
    {
        pergunta: "¿Qué instrumento toca Marceline?",
        opcoes: ["Bajo", "Guitarra", "Viola"],
        respostaCorreta: 0,
        feedback: "¡Correcto! Marceline toca el bajo.",
        imagem: "imagem/marceline.gif"
    },
    {
        pergunta: "¿Cuántos elementos principales hay en la serie?",
        opcoes: ["5", "2", "4"],
        respostaCorreta: 2,
        feedback: "¡Correcto! Hay 4 elementos.",
        imagem: "imagem/fogo.gif"
    },
    {
        pergunta: "¿Cómo se llama este personaje?",
        opcoes: ["Golb", "Billy", "Lich"],
        respostaCorreta: 2,
        feedback: "¡Correcto! Su nombre es Lich.",
        imagem: "imagem/lich.webp"
    },
    {
        pergunta: "¿Quién es este caballo?",
        opcoes: ["James baxter", "Rey de hielo", "Señor monocromicornio"],
        respostaCorreta: 1,
        feedback: "¡Correcto! Este caballo es el rey del hielo.",
        imagem: "imagem/cavalo.webp"
    },
    {
        pergunta: "¿Cuál fue la primera espada de Finn?",
        opcoes: ["Escarlata", "Espada raíz", "Espada de hierba"],
        respostaCorreta: 0,
        feedback: "¡Correcto! La primera espada de Finn es la Escarlata.",
        imagem: "imagem/finn.gif"
    },
    {
        pergunta: "¿Quién es el personaje más fuerte de Hora de Aventura?",
        opcoes: ["Prismo", "Golb", "Lich"],
        respostaCorreta: 1,
        feedback: "¡Correcto! El personaje más fuerte es Golb.",
        imagem: "imagem/prismo.gif"
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
        feedbackDiv.innerText = "¡Incorrecto!";
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
        <h2>¡Felicidades! Has completado el juego.</h2>
        <br>
        <p>¡Acertaste ${acertos} de ${perguntas.length} preguntas!</p>
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
    document.getElementById("menu-lateral").classList.toggle("ativo");
  }
