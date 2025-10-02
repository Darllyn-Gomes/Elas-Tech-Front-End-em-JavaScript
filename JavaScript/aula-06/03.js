const prompt = require ('readline-sync');

const idade = prompt.question('Qual é a sua idade?');

console.log(idade);

console.log(idadeNumber, typeof idadeNumber);

// Coerção Explicita (Conversão Manual)

console.log(Number('x')); // NaN: Not a Number
console.log(string(10), typeof string(10));
console.log(Boolean(-1));

// Coerção Implicita

console.log(1 + '1');
console.log('10' + 5);
console.log(10 - '5');
console.log(10 * '5');
console.log(10 / '5');

// Qual será a sa´da desse código?

let n = 1 + '1' //'11' (string)
n = n - 1   // 11 -1 =10

// Qual será a saída desse código?

console.log(2 + 3 + 4 + '5'); // 5 + 4 + '5' = 9 + 15' = '95'

// Qual será a saída desse código?

console.log('5' + 2 + 3 + 4); // '52' + 3 + 4 = '5234'

// Qual será a saída desse código?

console.log('10' - '3' - 2 + '5') // 6 - '3' - 2 + '5' = 3 - 2 + '5' = 1 + '5' = '15'