// Desafio Decorator perfilAdmin
const usuarioLogado = {
  nome: 'Guilherme Filho',
  email: 'guigui@gmail.com',
  admin: false
}

@perfilAdmin(usuarioLogado)
class MudancaAdministrativa {
  critico() {
      console.log('Algo crítico foi alterado!')
  }
}

interface UsuarioLogado {
  nome: string,
  email: string,
  admin: boolean,
}

function perfilAdmin(obj: UsuarioLogado) {
  return function (_: Function): void {
    if (obj.admin === false) {
      throw new Error('Usuário não é admin!')
    }
  }
}

new MudancaAdministrativa().critico()
