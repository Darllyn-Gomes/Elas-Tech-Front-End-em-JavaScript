// Muito útil quando sua variável possui valores específicos

const permissoes = 'aluno' // 'aluno' || 'professor' || 'admin'

switch(permissoes) {
    case 'aluno':
        console.log('Você só pode visualizar as aulas.');
        break;
        case 'professor':
            console.log('Você pode alterar as aulas e adicionar exercícios.');
            break;
            case 'admin':
                console.log('Você pode fazer o que quiser no sistema!');
                break;
                default:
                    console.log('Não sei quem você é no sistema');
                   }

                   // Operador Ternário

                   const idade = 30;

                   // idade >= 18 ? console.log('Maior de idade') : console.log('Menor de idade');

                   const mensagem = idade >= 18 ? 'Maior de idade' : 'Menor de idade';

                   console.log(mensagem);