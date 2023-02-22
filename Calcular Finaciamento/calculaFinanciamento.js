//ELEMENTOS MANIPULADOS

let formulario = document.querySelector('form')

const campos = document.querySelectorAll('.required')

let cxNome = document.querySelector('#nome')
let cxRenda = document.querySelector('#renda')

let cxEmprestimo = document.querySelector('#emprestimo')
let cxParcela01 = document.querySelector('#parcela01')
let cxParcelaFinal = document.querySelector('#parcelaFinal')
let cxValorMinMercado = document.querySelector('#ValorMinMercado')
let cxValorMinVenda = document.querySelector('#ValorMinVenda')


let dados = document.querySelector('#resultado')

let btnEnviar = document.querySelector('#BtnEnviar')
let btnLimpar = document.querySelector('#BtnLimpar')


/* Pega dados que estão dentro das caixas com ".value!
Evento como referencia para pegar os dados deternimado*/

//Escutar btnEnviar
//Função anonima para pegar valores
//Calcular financiamento

formulario.addEventListener("submit", function (event) {



    //pegar valores dos inputs
    let nome = cxNome.value
    let rendaMensal = cxRenda.value


    //Cálculos usando a variável "rendaMensal"

    let parcelaInicial = (rendaMensal * 0.32875).toFixed(2)
    let parcelaFinal = (parcelaInicial * 0.4548).toFixed(2)
    let emprestimo = (parcelaInicial * 98.55).toFixed(2)
    let valorMinMercado = (emprestimo * 1.2).toFixed(2)
    let valorMinVenda = (emprestimo * 1.432).toFixed(2)


    //Console Log das variáveis
    console.log(nome)
    console.log(rendaMensal)
    console.log(emprestimo)
    console.log(parcelaInicial)
    console.log(parcelaFinal)
    console.log(valorMinMercado)
    console.log(valorMinVenda)


    //Imprimir valores nos Inputs
    cxEmprestimo.value = emprestimo
    cxParcela01.value = parcelaInicial
    cxParcelaFinal.value = parcelaFinal
    cxValorMinMercado.value = valorMinMercado
    cxValorMinVenda.value = valorMinVenda

    event.preventDefault();

})

