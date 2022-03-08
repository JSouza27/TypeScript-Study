"use strict";
function saudarComOla(pessoa) {
    console.log('Ola ' + pessoa.nome);
}
;
function mudarNome(pessoa) {
    pessoa.nome = 'Joana';
}
;
const pessoa = {
    nome: 'João',
    idade: 27,
    saudar(sobrenome) {
        console.log('Olá, meu nome é '
            + this.nome + ' ' + sobrenome);
    },
};
saudarComOla(pessoa);
mudarNome(pessoa);
saudarComOla(pessoa);
// saudarComOla({ nome: 'Jonas', idade: 27, xyz: true, altura: 1.65 });
pessoa.saudar('Skywalker');
// Usando Classes
class Cliente {
    constructor() {
        this.nome = '';
        this.ultimaCompra = new Date;
    }
    saudar(sobrenome) {
        console.log('Olá, meu nome é '
            + this.nome + ' ' + sobrenome);
    }
}
const meuCliente = new Cliente();
meuCliente.nome = 'Han';
saudarComOla(meuCliente);
console.log(meuCliente.ultimaCompra);
let potencia;
potencia = function (base, exp) {
    return Math.pow(base, exp);
};
console.log(potencia(3, 10));
class RealA {
    a() { }
}
class RealB {
    a() { }
    b() { }
}
class RealABC {
    a() { }
    b() { }
    C() { }
}
class AbstrataABD {
    a() { }
    b() { }
}
