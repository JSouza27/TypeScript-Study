"use strict";
// string
let nome = 'João';
console.log(nome);
// nome = 28;
// numbers
let idade = 28;
// idade = 'Ana';
console.log(idade);
// boolean
let possuiHobbies = false;
// possuiHobbies = 1
console.log(possuiHobbies);
// tipos explícitos
let minhaIdade;
minhaIdade = 27;
// minhaIdade = 'idade é 27'
console.log(typeof minhaIdade);
// array
let hobbies = ["Cozinhar", "Praticar Esportes"];
console.log(hobbies[0]);
console.log(typeof hobbies);
hobbies = [100, 200, 300];
// hobbies = 100
console.log(hobbies);
// Tuplas
let endereco = ['Av. Principal', 90, ''];
console.log(endereco);
// enum
var Cor;
(function (Cor) {
    Cor[Cor["Cinza"] = 0] = "Cinza";
    Cor[Cor["Verde"] = 1] = "Verde";
    Cor[Cor["Azul"] = 2] = "Azul";
})(Cor || (Cor = {}));
let minhaCor = Cor.Azul;
console.log(minhaCor);
// any
let carro = 'BMW';
console.log(carro);
carro = { marca: 'BMW', ano: 2019 };
console.log(carro);
// funções
function retornaMeuNome() {
    return nome;
}
console.log(retornaMeuNome());
function digaOi() {
    console.log('Oi');
    // return nome;
}
digaOi();
function multiplicar(numA, numB) {
    return numA * numB;
}
console.log(multiplicar(2, 5));
// tipo função
let calculo;
// calculo = digaOi;
calculo = multiplicar;
console.log(calculo(5, 6));
let ususario = {
    nome: 'João',
    idade: 27
};
// ususario = {};
ususario = {
    idade: 23,
    nome: 'Ana',
};
let employee = {
    employeeNames: ['Minerva McGonagall', 'Severo Snape', 'Rubeus Hagrid'],
    hitPoint: (hours) => {
        if (hours <= 8) {
            return 'Ponto normal';
        }
        return 'Fora do horário';
    },
};
let employee2 = {
    employeeNames: ['Minerva McGonagall', 'Severo Snape', 'Rubeus Hagrid'],
    hitPoint: (hours) => {
        if (hours <= 8) {
            return 'Ponto normal';
        }
        return 'Fora do horário';
    },
};
// Union Types
let nota = 10;
console.log(`Minha nota é ${nota}`);
nota = '10';
console.log(`Minha nota é ${nota}`);
// nota = true;
// console.log(`Minha nota é ${nota}`);
// tipo never
function falha(msg) {
    throw new Error(msg);
}
;
const produto = {
    nome: 'Sabão',
    preco: -1,
    validarProduto() {
        if (!this.nome || this.nome.trim().length == 0) {
            falha('Precisa ter um nome');
        }
        if (this.preco < 0) {
            falha('Preço inválido!');
        }
    }
};
produto.validarProduto();
