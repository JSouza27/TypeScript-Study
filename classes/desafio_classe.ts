// Desafio Classe Produto
// Atributos: nome, preco e desconto
// Criar o construtor
// Obs 1.: Desconto é opcional (valor padrão 0)
// Obs.: Criar dois produtos: passando dois e três params

class Produto {
  public nome: string;
  public preco: number;
  public desconto: number;

  constructor(nome: string, preco: number, desconto: number = 0) {
    this.nome = nome;
    this.preco = preco;
    this.desconto = desconto;
  }
}

const Produto1 = new Produto('Playstation 5', 6517);
const Produto2 = new Produto('Xbox S', 2499, 0.10);

console.log(Produto1);
console.log(Produto2);
