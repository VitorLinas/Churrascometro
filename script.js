// Carne - 400gr por pessoa + de 6 horas - 650gr
// Cerveja - 1200ml por pessoa + 6 horas - 2000ml
// Refrigerante/água - 1000ml por pessoa + de 6 horas - 1500ml
// Crianças valem por 0,5

let inputAdultos = document.getElementById("adultos");
let inputCriancas = document.getElementById("criancas");
let inputDuracao = document.getElementById("duracao");

let resultado = document.getElementById("resultado");

function calcular(){
    console.log("calculando...");

    let adultos = inputAdultos.value;
    let criancas = inputCriancas.value;
    let duracao = inputDuracao.value;

    let quantidadeTotalDeCarne = carnePP(duracao) * adultos + (carnePP(duracao) / 2 * criancas);
    let quantidadeTotalDeCerveja = cervejaPP(duracao) * adultos; 
    let quantidadeTotalDeBebidas = bebidasPP(duracao) * adultos + (bebidasPP(duracao) / 2 * criancas);
    

    resultado.innerHTML = `<hr>`
    resultado.innerHTML += `<p><img src='imagens/carne.png' class='imageCarne'>${quantidadeTotalDeCarne/1000}kg de carne</p>`
    resultado.innerHTML += `<p><img src='imagens/cerveja.png' class='imageCerveja'>${Math.ceil (quantidadeTotalDeCerveja/355)} latas de cerveja</p>`
    resultado.innerHTML += `<p><img src='imagens/refri.png' class='imageRefri'>${Math.ceil(quantidadeTotalDeBebidas/2000)} garrafas 2l de bebidas (refrigerante, suco...)</p>`

    let mediaCarne = (quantidadeTotalDeCarne/1000) * 45;
    let mediaCerveja = (quantidadeTotalDeCerveja/500) * 5.45; 
    let mediaBebidas = (quantidadeTotalDeBebidas/1000) * 4.50;
    let valorChurrasco = mediaCarne + mediaCerveja + mediaBebidas;
    resultado.innerHTML += `<p id='mediaGasto'>Média de gasto: R$${valorChurrasco.toFixed(2)}<p/>`;
    

    if(adultos < 1 || criancas < 1 || duracao < 1){
        window.alert("Preencha a área vazia")
        resultado.innerHTML = "";
    }
}

function carnePP(duracao){
    if(duracao >= 6){
        return 650;
    }
    else{
        return 400;
    }
}

function cervejaPP(duracao){
    if(duracao >= 6){
        return 2000;
    }
    else{
        return 1200;
    }
}

function bebidasPP(duracao){
    if(duracao >= 6){
        return 1500;
    }
    else{
        return 1000;
    }
}    






// Média de valor da carne: R$45,00 * carne
// Média de valor da cerveja: 500ml - R$5,45 
// Média de valor das bebidas: 1l - R$4,50

