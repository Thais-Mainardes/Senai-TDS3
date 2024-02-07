var nomeGlobal;
var mensagemGlobal;

function conferirMesagemWhatsApp(){
    var nome = document.getElementById("nome").value;
    var mensagem = document.getElementById("mensagem").value;

    nomeGlobal = nome;
    mensagemGlobal = mensagem; 

    document.getElementById("confNome").textContent = nome;
    document.getElementById("confMsg").textContent = mensagem;
}

function enviar(){ 
    var numeroTelefone = "5541996595585";

    var linkWhatsApp = "htps://wa.me/" + numeroTelefone + "?text=NOME: " + nomeGlobal + " - " + mensagemGlobal;

    window.open(linkWhatsApp, "_blank")

} 