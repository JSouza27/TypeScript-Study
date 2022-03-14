"use strict";
class Fila {
    constructor(...args) {
        this.fila = args;
    }
    entrar(item) {
        this.fila.push(item);
    }
    proximo() {
        if (this.fila.length > 0) {
            const primeiroElemento = this.fila[0];
            this.fila.splice(0, 1);
            return primeiroElemento;
        }
        else {
            return null;
        }
    }
    imprimir() {
        console.log(this.fila);
    }
}
