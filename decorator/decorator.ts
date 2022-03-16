function logarClasse(constructor: Function) {
  console.log(constructor);
}

function decoratorVazio(_: Function) {}

function logarClasseSe(valor: boolean) {
  return valor ? logarClasse : decoratorVazio;
}

function decorator(obj: { a: string, b?: number }) {
  return function(_: Function): void {
    console.log(obj.a + ' ' + obj.b);
  }
}

type Construtor = { new(...args: any[]): {} }

function logarConstrutor(construtor: Construtor) {
  return class extends construtor {
    constructor(...args: any[]) {
      console.log('Antes...');
      super(...args);
      console.log('Depois...');
    }
  }
}

// new Eletrodomestico();
// new Eletrodomestico();
// new Eletrodomestico();

interface Eletrodomestico {
  imprimir?(): void
}

// @logarClasse
// @decorator({ a: 'Teste', b: 123})
// @logarClasseSe(true)
// @logarConstrutor
@imprimivel
class Eletrodomestico {
  constructor() {
    console.log('novo...');
    
  }
}

function imprimivel(construtor: Function) {
  construtor.prototype.imprimir = function () {
    console.log(this);
  }
}

const eletro = new Eletrodomestico();
eletro.imprimir && eletro.imprimir();

class ContaCorrente {
  @naoNegativo
  private saldo: number;

  constructor(saldo: number) {
    this.saldo = saldo;
  }

  @congelar
  sacar(@paramInfo valor: number) {
    if (valor <= this.saldo) {
      this.saldo -= valor;
      return true;
    } else {
      return false;
    }
  }

  @congelar
  getSaldo() {
    return this.saldo;
  }
}

const cc = new ContaCorrente(10248.57);
cc.sacar(5000);
console.log(cc.getSaldo());

// cc.getSaldo = function () {
//   return this['saldo'] + 7000;
// }
// console.log(cc.getSaldo());

function congelar(alvo: any, nomeMetodo: string, descriptor: PropertyDescriptor) {
  console.log(alvo);
  console.log(nomeMetodo);
  descriptor.writable = false;
}

function naoNegativo(alvo: any, nomePropriedade: string) {
  delete alvo[nomePropriedade];

  Object.defineProperty(alvo, nomePropriedade, {
    get: function (): any {
      return alvo['_' + nomePropriedade]
    },
    set: function(valor: any): void {
      if(valor < 0) {
        throw new Error('Saldo inválido');
      } else {
        alvo['_' + nomePropriedade] = valor;
      }
    }
  })
}

cc.sacar(50000);
console.log(cc.getSaldo());

function paramInfo(alvo: any, nomeMetodo: string, indiceParam: number) {
  console.log(`alvo: ${alvo}`);
  console.log(`nome Metodo: ${nomeMetodo}`);
  console.log(`indice Param: ${indiceParam}`);
}
