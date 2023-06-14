/*

4 - Crie uma função que receba um número como parâmetro e determine se ele é um quadrado perfeito. 
Um quadrado perfeito é um número inteiro cuja raiz quadrada também é um número inteiro. 
Por exemplo, 25 é um quadrado perfeito porque a sua raiz quadrada é 5, um número inteiro.

*/ 

function quadradoPerfeito(numQuadrado, numAuxiliar) 
{
    
    if (numQuadrado / numAuxiliar  === numAuxiliar) 
    {
        console.log("É um quadrado perfeito.")
    } else 
    {
        console.log("Não é um quadrado perfeito.")
    }
}

/*
    O código acima retorna com base nos valores recebidos se o numQuadrado é ou não um quadrado perfeito, 
    ele faz isso por meio no numAuxiliar que serve para para fazer a divisão do numQuadrado.
    
    Por exemplo:

    quadradoPerfeito(25, 5)

    --> Ira retorna "É um quadrado perfeito." ja que 25 dividido por 5 resulta em um quadrado perfeito

 */
