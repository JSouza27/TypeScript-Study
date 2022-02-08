// string
let nome = 'João';
console.log(nome);
// nome = 28;

// numbers
let idade = 28;
// idade = 'Ana';
console.log(idade);

// boolean
let possuiHobbies: boolean = false
// possuiHobbies = 1
console.log(possuiHobbies)

// tipos explícitos
let minhaIdade: number
minhaIdade = 27
// minhaIdade = 'idade é 27'
console.log(typeof minhaIdade)

// array
let hobbies: any[] = ["Cozinhar", "Praticar Esportes"]
console.log(hobbies[0])
console.log(typeof hobbies)

hobbies = [100, 200, 300]
// hobbies = 100
console.log(hobbies)

// Tuplas
let endereco: [string, number, string] = ['Av. Principal', 90, '']
console.log(endereco);


// enum
enum Cor {
  Cinza,
  Verde,
  Azul
}

let minhaCor: Cor = Cor.Azul;
console.log(minhaCor);

// any
let carro: any = 'BMW';
console.log(carro);
carro = { marca: 'BMW', ano: 2019 };
console.log(carro);

// funções
function retornaMeuNome(): string {
  return nome;
}

console.log(retornaMeuNome());

function digaOi(): void {
  console.log('Oi');
  // return nome;
}

digaOi();

function multiplicar(numA: number, numB: number): number {
  return numA * numB;
}

console.log(multiplicar(2,5));

// tipo função
let calculo: (x: number, y: number) => number;
// calculo = digaOi;

calculo = multiplicar;
console.log(calculo(5,6));

let ususario: { nome: string, idade: number } = {
  nome: 'João',
  idade: 27
};

// ususario = {};

ususario = {
  idade: 23,
  nome: 'Ana',
};
