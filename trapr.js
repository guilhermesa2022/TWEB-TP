// açao Inicial-----------
window.onload = function () { 
   inicio();
};

// const----

const tabelPreco = document.querySelector('#estado-car')
const tabelPreco1 = document.querySelector('#estado-car1')
const tabelPreco2 = document.querySelector('#estado-car2')
const tabelPreco3 = document.querySelector('#estado-car3')
const quil = document.querySelector('#quilometragem')
const precoIni = document.querySelector('#preco-ini')
const marca = document.querySelector('#marca')
const data = document.querySelector('#ano')
const subInf = document.querySelector('#sub-inf')
const form = document.querySelector('#formdd')
const mauECR = document.querySelector('#mauescrever')
const bomECR = document.querySelector('#bomescrever')
const MbomECR = document.querySelector('#mbomescrever')
const ano = 2022
const estadoBom = 1
const estadoMau = 0.6
const estadoMuitoBom = 1.1


// function ------------
function inicio(){
    tabelPreco.style.visibility='hidden'
    tabelPreco1.style.visibility='hidden'
    tabelPreco2.style.visibility='hidden'
    tabelPreco3.style.visibility='hidden'
    document.getElementById('inpre').style.visibility='hidden'
    document.getElementById('inpre-car1').style.visibility='hidden'
    document.getElementById('inpre-car2').style.visibility='hidden'
    document.getElementById('inpre-car3').style.visibility='hidden'
}

function final(){
    debugger;
    var anos;
    var anoMais;
    var precoFinal
    var c2;
    if((quil.value) <= 30000){
        c2 = 1
    }else if((quil.value) <= 70000){
        c2 = 0.95
    }else{
        c2 = 0.9
    }

    anos = (ano - data.value);

    if (anos <= 10){
        precoFinal = (precoIni.value) * (1-(anos * 0.05))* c2
    }else{
    
        anoMais = (anos - 10) ;
        precoFinal = (precoIni.value) * (1-(10 * 0.05 + anoMais * 0.04))* c2
        mauECR.innerHTML = Math.round((precoFinal * 0.6)) + ' €';
        bomECR.innerHTML = Math.round(precoFinal * 1) + ' €';
        MbomECR.innerHTML = Math.round(precoFinal * 1.1) + ' €';
        tabelPreco.style.visibility='visible'
        tabelPreco1.style.visibility='visible'
        tabelPreco2.style.visibility='visible'
        tabelPreco3.style.visibility='visible'
    }
}


function finaciar(){


if(document.getElementById('inpre1p').classList.contains('vl1')){

    document.getElementById('inpre').style.visibility='hidden'
    document.getElementById('inpre-car1').style.visibility='hidden'
    document.getElementById('inpre-car2').style.visibility='hidden'
    document.getElementById('inpre-car3').style.visibility='hidden'
    document.getElementById('inpre1p').classList.remove('vl1')
   
}else{
var finar = Math.floor(Math.random() * 5);
finar = finar + 1;
var finar2 = Math.floor(Math.random() * 5);
finar2 = finar2 + 1;
var finar3 = Math.floor(Math.random() * 5);
finar3 = finar3 + 1;
var montade = document.querySelector('#Financiamentodinheiro').value;
finar = finar + 0.75;
finar2 = finar2 + 0.75;
finar3 = finar3 + 0.75;
var pagar1 = Math.round((montade * (finar + 100)) / 100)
var pagar2 = Math.round((montade * (finar2 + 100)) / 100)
var pagar3 = Math.round((montade * (finar3 + 100)) / 100)
document.querySelector('#inpre1p').innerHTML = 'Montante total: ' + montade + '€/  Valor do empréstimo: ' + pagar1 + '€/  Duração: 12 mases/ Taxa de juro: ' + finar + '%/  Spread: ' + (finar - 0.75) + '%/ VEI:' + (pagar1 * 0.2) + '€/ VMP:' + (Math.round((pagar1 * 0.8)/12)) + '€';

document.querySelector('#inpre2p').innerHTML = 'Montante total: ' + montade + '€/  Valor do empréstimo: ' + pagar2 + '€/  Duração: 12 mases/ Taxa de juro: ' + finar2 + '%/  Spread: ' + (finar2 - 0.75) + '%/ VEI:' + (pagar2 * 0.2) + '€/ VMP:' + (Math.round((pagar2 * 0.8)/12)) + '€';

document.querySelector('#inpre3p').innerHTML = 'Montante total: ' + montade + '€/  Valor do empréstimo: ' + pagar2 + '€/  Duração: 12 meses/ Taxa de juro: ' + finar2 + '%/  Spread: ' + (finar2 - 0.75) + '% VEI:' + (pagar2 * 0.2) + '€ VMP:' + (Math.round((pagar2 * 0.8)/12)) + '€';

document.getElementById('inpre').style.visibility='visible'
document.getElementById('inpre-car1').style.visibility='visible'
document.getElementById('inpre-car2').style.visibility='visible'
document.getElementById('inpre-car3').style.visibility='visible'

document.getElementById('inpre1p').classList.add('vl1');


}


}
    //chamar------------------


document.querySelector('#formff').addEventListener('submit', function(ES){
ES.preventDefault()
})

form.addEventListener('submit', function(EV){
EV.preventDefault()
})

subInf.addEventListener('click', final);
document.querySelector('#Financiamento').addEventListener('click', finaciar);
