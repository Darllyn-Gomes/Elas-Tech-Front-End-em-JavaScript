const readline = require('readline-sync');

const idade = Number(readline.question('Qual é a sua idade? '));

const ehMaiorDeIdade = idade >= 18;

// Estrutura condicional: if/else

    if(ehMaiorDeIdade) {   // Faça alguma coisa...
        console.log('Você é maior de idade');
    } else {
        console.log('Você é menor de idade');
    }

    const mediaDoAluno = 6.999999;

    // Média >= 7 => Aprovado
    // Média < 7 e Média >= 5 => Prova final
    // Média < => Reprovado

    if (mediaDoAluno >= 7) {
        console.log('Aprovado');
    } else if (mediaDoAluno >= 5) {
        console.log('Prova final');
    } else {
       console.log('Reprovado');
    }
    
    // 1. Preciso ser maior de idade
    // 2. Preciso ter uma CNH (PPD)

    const idadeDaPessoa = 18;
    const temCNH = false;

    if (idadeDaPessoa >= 18 && temCNH) {
        console.log('Você pode dirigir');
    } else {
        console.log('Você NÃO pode dirigir!');
    }