// Função para "explodir" os títulos com a palavra inserida
function GAME_WORD() {
    // Captura a palavra inserida no campo de texto
    const palavra = document.getElementById("palavra").value;

    // Se o campo não estiver vazio, altera os títulos
    if (palavra !== "") {
        document.getElementById("Filme_1").textContent = palavra;
        document.getElementById("Filme_2").textContent = palavra;
        document.getElementById("Filme_3").textContent = palavra;
        document.getElementById("Filme_4").textContent = palavra;
        document.getElementById("Filme_5").textContent = palavra;
    } else {
        alert("Por favor, insira uma palavra para substituir!");
    }
}

// Função para resetar os títulos para os nomes originais
function resetar() {
    // Resetando os títulos para os valores iniciais
    document.getElementById("Filme_1").textContent = "aventura";
    document.getElementById("Filme_2").textContent = "mundo";
    document.getElementById("Filme_3").textContent = "universo";
    document.getElementById("Filme_4").textContent = "super";
    document.getElementById("Filme_5").textContent = "avo";
    
    // Limpa o campo de texto
    document.getElementById("palavra").value = "";
}
function toggleMenu() {
    const menu = document.getElementById("menu-lateral");
    menu.classList.toggle("ativo");
}