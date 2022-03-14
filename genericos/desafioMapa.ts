// Desafio Mapa
// Array de Objetos (Chave/Valor) -> itens
// MŽtodos: obter(Chave), colocar({ C, V })
// limpar(), imprimir()
type Objeto<C, V> = { chave: C, valor: V };

class Mapa<C, V> {
  private itens: Array<Objeto<C, V>> = new Array<Objeto<C, V>>();

  obter(chave: C): Objeto<C, V> | null {
    const resultado = this.itens.filter(item => item.chave === chave);
    
    return resultado ? resultado[0] : null;
  }

  colocar(par: Objeto<C, V>) {
    const encontrado = this.obter(par.chave);

    if (encontrado) {
      
      encontrado.valor = par.valor;
    } else {
      this.itens.push(par);
    }
  }

  limpar() {
    this.itens = new Array<Objeto<C, V>>();
  }

  imprimir() {
    console.log(this.itens);
  }
}
 
const mapa = new Mapa<number, string>()
mapa.colocar({ chave: 1, valor: 'Pedro' })
mapa.colocar({ chave: 2, valor: 'Rebeca' })
mapa.colocar({ chave: 3, valor: 'Maria' })
mapa.colocar({ chave: 1, valor: 'Gustavo' })
 
console.log(mapa.obter(2))
mapa.imprimir()
mapa.limpar()
mapa.imprimir()