/*

2 - Crie uma função que receba uma senha como parâmetro e verifique se ela atende aos seguintes critérios: ter pelo menos 8 caracteres, 
conter pelo menos uma letra maiúscula, uma letra minúscula e um número. 
Sua função deve receber uma senha e dizer para o usuário se ela é valida.

*/


function passwordValidation(senha) 
{
    if (senha.length < 8) 
    {
      return false;
    }

    let regexSenhaMaiuscula = /[A-Z]/;
    let regexSenhaMinuscula = /[a-z]/;
    let regexSenhaNumero = /[0-9]/;
    
    if (!regexSenhaMaiuscula.test(senha) || !regexSenhaMinuscula.test(senha) || !regexSenhaNumero.test(senha)) 
    {
        return false;
    }
    
    return true;
}
  
let box = prompt('Digite uma senha: ');
if (passwordValidation(box)) 
{
  console.log("Senha válida!");
} else 
{
  console.log("Senha inválida!");
}