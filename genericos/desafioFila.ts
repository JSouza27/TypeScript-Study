class Fila<T> {
  private fila: Array<T>;

  constructor(...args: T[]) {
    this.fila = args;
  }

  entrar(item: T): void {
    this.fila.push(item);
  }

  proximo(): T | null {
    if (this.fila.length > 0) {
      const primeiroElemento = this.fila[0];
      this.fila.splice(0, 1);

      return primeiroElemento;
    } else {
      return null;
    }
  }
  
  imprimir(): void {
    console.log(this.fila);
  }
}