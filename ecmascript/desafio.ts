// Desafios
// Exercicio 1
const dobro = (valor: number): number => valor * 2;
console.log(dobro(10));

// Exercicio 2
const dizerOla = (nome: string  = 'Pessoa'): void => {
  console.log('Olá, ' + nome);
}

dizerOla();
dizerOla('Anna');

// Exercicio 3
const nums: number[] = [-3, 33, 38, 5];
// Imprimir o menor valor
console.log(Math.min(...nums));

// Exercicio 4
const array: number[] = [55, 20];
// Adicionar todos os elementos de "nums" em array
array.push(...nums);
console.log(array);

// Exercicio 5
const notas: number[] = [8.5, 6.3, 9.4];
// const nota1 = notas[0]
// const nota2 = notas[1]
// const nota3 = notas[2]

const [nota1, nota2, nota3] = notas;
console.log(nota1, nota2, nota3);

// Exercicio 6
type objeto = {
  primeiroNome: string,
  expeciencia: number,
};
const cientista: objeto = { primeiroNome: 'Will', expeciencia: 12 };
// const primeiroNome = cientista.primeiroNome
// const expeciencia = cientista.expeciencia
const {primeiroNome, expeciencia} = cientista;
console.log(primeiroNome, expeciencia);