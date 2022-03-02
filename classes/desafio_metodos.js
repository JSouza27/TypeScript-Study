"use strict";
// Criar método precoComDesconto
// Quais são os parâmetros e o retorno?
// Alterar método resumo para mostrar o preço com desconto
class Produto01 {
    constructor(nome, preco, desconto = 0) {
        this.nome = nome;
        this.preco = preco;
        this.desconto = desconto;
    }
    precoComDesconto() {
        return this.preco - (this.preco * this.desconto);
    }
    resumo() {
        const novoPreco = this.precoComDesconto();
        return `${this.nome} custa R$${novoPreco} (${this.desconto * 100}% off!)`;
    }
}
const prod01 = new Produto01('Caneta Bic Preta', 4.20);
prod01.desconto = 0.06;
console.log(prod01.resumo());
const prod02 = new Produto01('Caderno Escolar', 18.80, 0.15);
console.log(prod02.resumo());
