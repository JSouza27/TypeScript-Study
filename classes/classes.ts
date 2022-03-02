class Data {
  // Atributos públicos
  dia: number;
  mes: number;
  ano: number;

  constructor(dia: number = 1, mes: number = 1, ano: number = 1) {
    this.dia = dia;
    this.mes = mes;
    this.ano = ano;
  }
}

const aniversario = new Data(3, 11, 1991);
aniversario.dia = 4
console.log(aniversario);
console.log(aniversario.dia);

const casamento = new Data; // posso omitit os "()" se setar valaro default no construtor
casamento.ano = 2017;
console.log(casamento);


class DataEsperta {
  constructor(public dia: number = 1, public mes: number = 1, public ano: number = 1) {

  }
}

const aniversarioEsperto = new DataEsperta(3, 11, 1991);
aniversario.dia = 4
console.log(aniversario);
console.log(aniversario.dia);

const casamentoEsperto = new DataEsperta; // posso omitit os "()" se setar valaro default no construtor
casamento.ano = 2017;
console.log(casamento);

class Produto_novo {
  public nome: string;
  public preco: number;
  public desconto: number;

  constructor(nome: string, preco: number, desconto: number = 0) {
    this.nome = nome;
    this.preco = preco;
    this.desconto = desconto;
  }

  public resumo(): string {
    return `${this.nome} custa R$${this.preco} (${this.desconto * 100}% off!)`;
  }
}

const prod1 = new Produto_novo('Caneta Bic Preta', 4.20);
prod1.desconto = 0.06;
console.log(prod1.resumo());

const prod2 = new Produto_novo('Caderno Escolar', 18.80, 0.15);
console.log(prod2.resumo());

class Carro {
  private velocidadeAtual: number = 0;

  constructor(public marca: string, public modelo: string, private velocidadeMaxima: number = 200) {

  };

  protected alterarVelocidade(delta: number): number {
    const novaVelocidade = this.velocidadeAtual + delta;
    const velocidadeValida = novaVelocidade >= 0
      && novaVelocidade <= this.velocidadeMaxima;

    if (velocidadeValida) {
      this.velocidadeAtual = novaVelocidade;
    } else {
      this.velocidadeAtual = delta > 0 ? this.velocidadeMaxima : 0;
    }

    return this.velocidadeAtual;
  }

  public acelerar(): number {
    return this.alterarVelocidade(5);
  }
  
  public frear(): number {
    return this.alterarVelocidade(-5);
  }
}

// const carro1 = new Carro('Ford', 'Ka', 185);
// console.log(carro1.acelerar());

class Ferrari extends Carro {
  constructor(modelo: string, velocidadeMaxima: number) {
    super('Ferrari', modelo, velocidadeMaxima);
  }

  public acelerar(): number {
      return this.alterarVelocidade(20);
  }

  public frear(): number {
    return this.alterarVelocidade(-15);
  }
}

const f40 = new Ferrari('F40', 324);
console.log(`${f40.marca} ${f40.modelo}`);
console.log(f40.acelerar());
console.log(f40.frear());

// Getters & Setters
class Pessoa {
  private _idade: number = 0;

  get idade(): number {
    return this._idade;
  }

  set idade(valor: number) {
    if (valor >= 0 && valor <= 120) {
      this._idade = valor;
    }
  }
}

const pessoa1 = new Pessoa;
pessoa1.idade = 10;
console.log(pessoa1.idade);

pessoa1.idade = -3;
console.log(pessoa1.idade);

// Atributos e métodos estáticos
class Matematica {
  static PI: number = 3.1316;

  static areaCirc(raio: number): number {
    return this.PI * raio * raio;
  }
}

// const m1 = new Matematica;
// m1.PI = 4.2;
// console.log(m1.areaCirc(4));

// m1.PI = 3.1316;
// console.log(m1.areaCirc(4));
console.log(Matematica.areaCirc(4));

abstract class Calculo {
  protected resultado: number = 0;

  abstract executar(...numeros: number[]): void

  getResultado(): number {
    return this.resultado;
  }
}

class Soma extends Calculo {
  executar(...numeros: number[]): void {
      this.resultado = numeros.reduce((acc, curr) => acc + curr);
  }
}

class Multiplicacao extends Calculo {
  executar(...numeros: number[]): void {
      this.resultado = numeros.reduce((acc, curr) => acc * curr);
  }
}

let c1: Calculo = new Soma();
c1.executar(2,3,4,5);
console.log(c1.getResultado());

c1 = new Multiplicacao();
c1.executar(2,3,4,5);
console.log(c1.getResultado());

class Unico {
  private static instance: Unico = new Unico;
  private constructor() {};

  static getInstance() {
    return Unico.instance;
  }

  agora() {
    return new Date();
  }
}

// const errado = new Unico();
console.log(Unico.getInstance().agora());

// Somente leitura
class Aviao {
  public readonly modelo: string;

  constructor(modelo: string, public readonly prefixo: string) {
    this.modelo = modelo;
  }
}

const turboHelice = new Aviao('Tu-114', 'PT-ABC');
// turboHelice.modelo = 'DC-8';
// turboHelice.prefixo = 'PT-DEF';
console.log(turboHelice);
