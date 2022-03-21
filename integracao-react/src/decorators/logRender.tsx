type Componente = {
  new (...args: any[]): {
    render(): any
  }
}

export default function logRender<c extends Componente>(componente: c) {
  return class extends componente {
    render() {
      console.log('Renderizando o componente...');
      const r: any = super.render();
      console.log('Renderização concluída!');
      return r;
    }
  }
};
