//1 - Arrays
let numbers: number[] = [1, 2, 3, 4, 5, 6, 7];
//numbers.push("String aqui")
numbers.push(8);
console.log(numbers[3]);

let nomes: string[] = ["Vitor", "Soares", "Coelho"];
//nomes.push(7)
console.log(nomes);

// 2- outra sintaxe
let nums: Array<number> = [8, 9, 10];
console.log(nums);

// 3 - Any
let arr1: any = ["Arroz", 3, true, [], { nome: "Vitor" }];
arr1.push({ idade: 21 });
arr1.push(["Fígado"]);
arr1.push(58);
console.log(arr1);

// 4 - parametros tipados
function soma(a: number, b: number) {
  let resultado = a + b;
  return console.log(resultado);
}

soma(6, 7);

// 5 - retorno de função
function saudacao(nome: string): string {
  //return 5
  return `Olá, ${nome}`;
}

console.log(saudacao("Vitor"));

// 6 - função anonima
setTimeout(function () {
  const sallary: number = 1000;

  //erro pois converte string em float
  //console.log(parseFloat(sallary))
  console.log(sallary);
}, 4000);

const somae = (n1: number, n2: number) => {
  n1 + n2;
};

// 7 - tipos de objeto
function passarCoordenadas(coord: { x: number; y: number }) {
  console.log(`Localidade informada X : ${coord.x} || Y : ${coord.y}`);
}

const obj = { x: 158.1814, y: 879.104 };
passarCoordenadas(obj);
passarCoordenadas({ x: 547, y: 812 });

// 8 - parametros opc
// para ser opcional basta colocar "?" na frente
function showNumbers(a: number, b: number, c: number, d?: number) {
  console.log("A: " + a);
  console.log("B: " + b);
  console.log("C: " + c);
  if (d) {
    console.log("D: " + d);
  }
}

showNumbers(3, 57, 8, 9);

// 9 - Validando arg opcional
function advancedGreeting(firstName: string, lastName?: string): string {
  if (lastName !== undefined) {
    return `oie ${firstName} ${lastName}`;
  }
  return `olá ${firstName}`;
}

console.log(advancedGreeting("Vitor"));
console.log(advancedGreeting("Vitor", "Coelho"));

// 10 - Union Type
function showBalance(balance: string | number) {
  console.log(balance);
}

showBalance("400");
showBalance(400);
//showBalance(true)

const array: (string | boolean)[] = ["Vitor", true, "Joaquim", false];

const alunos: (string | boolean | object)[] = [
  { nome: "Vitor", ativo: false },
  "String",
  false,
];

// 11 - Avançando em union type
function showUserRole(role: boolean | string) {
  if (typeof role == "boolean") {
    return "Usuário não aprovado";
  }

  return `A função do usuário é ${role}`;
}

console.log(showUserRole(false));
console.log(showUserRole("Adm"));

// 12 - Type Alias
type ID = number | string;

function showId(id: ID) {
  console.log(`O id é : ${id}`);
}

showId(1);
showId("1");

// 13 - Interface
// Quando criar um obj do tipo da interface é preciso que as propriedades sejam iguais
interface Point {
  x: number;
  y: number;
  z: number;
}

function showCoords(obj: Point) {
  console.log(`X : ${obj.x}`);
  console.log(`Y : ${obj.y}`);
  console.log(`Z : ${obj.z}`);
}

const coordObj: Point = {
  x: 5,
  y: 6,
  z: 7,
};

// Diferença entre alias e interface
// A interface pode ser alterada ao longo do código, já o Alias não
// 14 - Interface x Alias

interface Person {
  name: string;
}

interface Person {
  age: number;
}

type personType = {
  name: string;
};

// type personType = {
//     age: string;
// }
const pessoinha: Person = {
  name: "Vitor",
  age: 18,
};

// 15 - Literal Types
let test: "testando";

//erro abaixo
// test = "oi"
test = "testando";
console.log(test);

function showDirection(direction: "up" | "down" | "left" | "right") {
    console.log(`A direção é ${direction}`)
}
console.log(showDirection("up"))

//Não da 
// console.log(showDirection("esquerda"))

// 16 - non null assertion operator
const p = document.getElementById("some-p")
console.log(p?.innerText)
// p!.innerText += "oi"

//17 - big int
let n : bigint
n=1858n


// 18 - Symbol
let symbolA: symbol = Symbol("Vitor")
let symbolB: symbol = Symbol("Vitor")

console.log(symbolA == symbolB)
console.log(symbolA === symbolB)






