var casas = [9, 9, 9, 9, 9, 9, 9, 9, 9];
var vez = 1;
var contaclique = 0;
var iPontosX = 0;
var iPontosO = 0;
var iPontosV = 0;
var sResposta = "";
var ultimoVencedor = 1; // novo: controla quem começa a próxima rodada


function verifica(casa){
    if(casas[casa] == 9){
        casas[casa] = vez;
        if(vez == 1){
            document.getElementById("img"+casa);
            var img = document.getElementById("img" + casa);
            img.src = "imagem/pedrarosa.webp";
            img.style.width = "150px";
            img.style.height = "150px";
            img.style.display = "block";
            img.style.margin = "auto";
            img.style.position = "relative";
            img.style.top = "50%";
            img.style.transform = "translateY(-50%)";
        }else{
            document.getElementById("img"+casa);
            var img = document.getElementById("img" + casa);
            img.src = "imagem/pedrabranca.webp";
            img.style.width = "150px";
            img.style.height = "150px";
            img.style.display = "block";
            img.style.margin = "auto";
            img.style.position = "relative";
            img.style.top = "50%";
            img.style.transform = "translateY(-50%)";
        }
        vez = -vez;
        contaclique++;
        confere();
    }
}

function confere(){
    var i;
    var iGanhou = false;
    var iAcabou = true;

    if (iPontosO === 3 || iPontosX === 3) {
        setTimeout(() => {
            alert("Jogo zerado! " + (iPontosO === 3 ? "Ruby" : "Safira") + " venceu 3 vezes.");
            iPontosO = 0;
            iPontosX = 0;
            iPontosV = 0;
            document.getElementById("xis").innerHTML = "RUBY: 0";
            document.getElementById("bola").innerHTML = "SAFIRA: 0";
            document.getElementById("velha").innerHTML = "EMPATE: 0";
        }, 100); // timeout pequeno para mostrar o resultado antes do alert
    }
    
    for(i=0;i<casas.length;i++){
        if(casas[i]==9){
            iAcabou = false;
        }
    }

    if(contaclique == 9) iAcabou = true;

    var Soma = [];
    Soma[0]=casas[0]+casas[1]+casas[2];
    Soma[1]=casas[3]+casas[4]+casas[5];
    Soma[2]=casas[6]+casas[7]+casas[8];
    Soma[3]=casas[0]+casas[3]+casas[6];
    Soma[4]=casas[1]+casas[4]+casas[7];
    Soma[5]=casas[2]+casas[5]+casas[8];
    Soma[6]=casas[0]+casas[4]+casas[8];
    Soma[7]=casas[2]+casas[4]+casas[6];

    for(i=0;i<Soma.length;i++){
        if(Soma[i]==3){
            iGanhou = true;
            sResposta = "RUBY GANHOU!!!";
            iPontosO++;
            ultimoVencedor = 1; // Ruby venceu
            document.getElementById("xis").innerHTML = "RUBY: " + iPontosO;
            break;
        }else if(Soma[i]==-3){
            iGanhou = true;
            sResposta = "SAFIRA GANHOU!!!";
            iPontosX++;
            ultimoVencedor = -1; // Safira venceu
            document.getElementById("bola").innerHTML = "SAFIRA: " + iPontosX;
            break;
        }        
    }

    if(iGanhou==false && iAcabou==true){
        sResposta="Deu EMPATE!!!";
        iPontosV++;
        document.getElementById("velha").innerHTML="EMPATE: "+iPontosV;
    }

    if(iGanhou || iAcabou){
        for(i=0;i<casas.length;i++){
            document.getElementById("casa"+i).disabled=true;
            casas[i] = 0;
        }
        document.getElementById("resposta").innerHTML = sResposta;
        document.getElementById("resposta").style.color = "#eb17a4";
        document.getElementById("resposta").style.fontSize = "";
        
    }

    if (iPontosO === 3 || iPontosX === 3) {
        setTimeout(() => {
            alert("Jogo zerado! " + (iPontosO === 3 ? "Ruby" : "Safira") + " venceu 3 vezes.");
            iPontosO = 0;
            iPontosX = 0;
            iPontosV = 0;
            document.getElementById("xis").innerHTML = "RUBY: 0";
            document.getElementById("bola").innerHTML = "SAFIRA: 0";
            document.getElementById("velha").innerHTML = "EMPATE: 0";
        }, 100);
    }
    
}

function recomeca() {
    for (let i = 0; i < casas.length; i++) {
        document.getElementById("img" + i).ondragstart = function() { return false; };
        document.getElementById("casa" + i).disabled = false;

        let img = document.getElementById("img" + i);
        img.src = "";
        img.style.display = "none";
        casas[i] = 9;
    }

    // Resetando o texto do resultado
    const resposta = document.getElementById("resposta");
    resposta.innerHTML = "RESULTADO:";
    resposta.style.color = "";
    resposta.style.fontSize = "large";

    iGanhou = false;
    iAcabou = true;
    contaclique = 0;
    vez = ultimoVencedor; // Agora quem ganhou joga primeiro
}

function toggleMenu() {
    const menu = document.getElementById("menu-lateral");
    if (menu.style.left === "0px") {
        menu.style.left = "-250px";
    } else {
        menu.style.left = "0px";
    }
}

