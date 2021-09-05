/*O innerHTML só funciona se a linha de <script> no HTML for lida, depois dos elementos selecionados */
let titulo = document.querySelector('#title');
let nome = 'Davi'
titulo.innerHTML = nome

const resultado = fizzBuzz(30)
titulo.innerHTML = resultado
console.log(resultado)

function fizzBuzz(entrada){
   if (typeof entrada !== 'number'){
   return 'Não é um número'
    }
    /*Confere primeiro a condição do FizzBuzz, senão a função para em "Fizz" ou em "Buzz" */
    if(entrada % 3 ===0 && entrada % 5 === 0){
        return "FizzBuzz"
    }
    if (entrada % 3 ===0){
        return "Fizz"
    }
    if(entrada % 5 ===0){
        return "Buzz"
    }
    if((entrada % 3 !== 0) && (entrada % 5 !== 0)){
        return entrada
    }

    
}