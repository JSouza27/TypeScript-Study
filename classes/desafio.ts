// Exercicio 1 - Classe
class Moto {
  public nome: string;
  public velocidade: number;

  constructor(nome: string, velocidade: number = 0) {
    this.nome = nome;
    this.velocidade = velocidade;
  }

  buzinar(): void {
    console.log('Toooooooooot!');
  }

  acelerar(delta: number): number {
    return this.velocidade = this.velocidade + delta;
  }
};

const moto = new Moto('Ducati')
moto.buzinar()
console.log(moto.velocidade)
moto.acelerar(30)
console.log(moto.velocidade)

// Exercicio 2 - Heranca
abstract class Objeto2D {
  constructor(
    public base: number = 0,
    public altura: number = 0,
  ) {}

    abstract area(): number;
};

class Retangulo extends Objeto2D {
  constructor(base: number, altura: number) {
    super(base, altura);
  }

  area(): number {
    return this.base * this.altura;
  }
};

const retangulo = new Retangulo(5, 7);
console.log(retangulo.area());

// Exercicio 3 - Getters & Setters
class Estagiario {
  private _primeiroNome: string = '';

  get primeiroNome(): string {
    return this._primeiroNome;
  }

  set primeiroNome(valor: string) {
    if (valor.length >= 3) {
      this._primeiroNome = valor;
    } else {
      this._primeiroNome = '';
    }
  }
};

const estagiario = new Estagiario;
console.log(estagiario.primeiroNome);
estagiario.primeiroNome = 'Le';
console.log(estagiario.primeiroNome);
estagiario.primeiroNome = 'Leonardo';
console.log(estagiario.primeiroNome);
