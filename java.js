//Variaveis
let prato;
let bebida;
let sobremesa;
let total;
//escolher o combo
function escolherComida(element) {
    prato = element.id;
    escolher("comidas", element)
}

function escolherBebida(element) {
    bebida = element.id;
    escolher("bebidas", element);
}

function escolherSobremesa(element) {
    sobremesa = element.id;
    escolher("sobremesa", element);
}

function escolher(tipo, element) {
    // Mudar a borda para green
    element.style.borderColor = "#32B72F";

    // Acionar o icon display
    var icon = element.getElementsByClassName("check-icon")[0];
    icon.style.display = "inherit";

    comidas = document.getElementById(tipo);

    for (var i = 0; i < comidas.children.length; i++) { 
        if (comidas.children[i] !== element) {
            var comida = comidas.children[i];

            // Deixar a borda branca
            comida.style.borderColor = "white";
            
            // set icon display
            var icon = comida.getElementsByClassName("check-icon")[0];
            icon.style.display = "none";
        }
    }

    if (prato && bebida && sobremesa) {
        let button = document.getElementById("botao");
        button.disabled = false;
        button.style.backgroundColor = "#32B72F";
        button.innerHTML = `<div class="texto1">Fechar pedido</div>`;

        total = valor(prato) + valor(bebida) + valor(sobremesa);
    }
}

function valor(element) {
    let item = document.getElementById(element);
    let precos = item.getElementsByClassName("precos")[0];

    let preco = (precos.children[0].innerHTML).replace("R$ ", "").replace(",", ".");

    return parseFloat(preco);
}

function finalizarPedido() {
    var celular = "5519971463960";
    var mensagem = `Olá, gostaria de fazer o pedido: %0A-Prato: ${prato} %0A-Bebida: ${bebida} %0A-Sobremesa: ${sobremesa} %0A-Total: R$ ${total.toFixed(2)}`;
    xto = window.encodeURIComponent(mensagem);
    window.open("https://api.whatsapp.com/send?phone=" + celular + "&text=" + mensagem, "_blank");
}
