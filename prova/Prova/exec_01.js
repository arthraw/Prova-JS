/*

1 - Crie uma função que receba um número como parâmetro e determine se ele é primo ou não. 
Um número primo é aquele que é divisível apenas por 1 e por ele mesmo. Liste todos os números primos entre 1 e 1000.

*/

function verificaPrimo(primo) 
{
    if (primo < 2) 
    {
      return false;
    }
    for (let i = 2; i <= Math.sqrt(primo); i++) 
    {
      if (primo % i === 0) 
      {
        return false;
      }
    }
    return true;
}

const defaultPrimos = [];
for (let i = 1; i <= 1000; i++) 
{
  if (verificaPrimo(i)) 
  {
    defaultPrimos.push(i);
  }
}
console.log(defaultPrimos);