//object types
// São dados que tem como tipo: objeto Ex: object literals e arrays
// Temos: interfaces, readonly, tuplas e mais

// 1 - Tipo de objeto para função, interface como parâmetro
interface Products {
  name: string;
  price: number;
  isAvaliable: boolean;
}

function showProducts(product: Products) {
  console.log(
    `O nome do produto é ${product.name} e seu preço R$${product.price}`
  );
  if (product.isAvaliable == true) {
    console.log("Ele se encontra disponivel");
  } else {
    console.log("Ele não se encontra disponivel");
  }
}

const produtasso: Products = {
  name: "Mangá de One Piece",
  price: 30,
  isAvaliable: false,
};

showProducts(produtasso);
console.log("----------------------------");
showProducts({ name: "Camisa", price: 15.9, isAvaliable: true });

// 2 - Propriedade opcional em interface
interface User {
  email: string;
  role?: string;
}

function showUserDetails(user: User) {
  console.log(`O usuário tem o email ${user.email}`);
  if (user.role) {
    console.log(`Atual trabalhando de ${user.role}`);
  }
}

const u1: User = {
  email: "testeu1@gmail.com",
};
showUserDetails(u1);
console.log("----------------------------");
showUserDetails({ email: "joaozinho@hotmail.com", role: "programador" });
console.log("----------------------------");
showUserDetails({ email: "princesinha@hotmail.com" });

// 3 - ReadOnly
// Só pode ser alterado no momento da criação
// valor constante

interface Car {
  brand: string;
  readonly wheels: number;
}

const carrinho: Car = {
  brand: "VW",
  wheels: 4,
};

console.log(carrinho);
// Erro pois não é possivel alterar
// carrinho.wheels = 5

// 4 - Index Signature
// Usamos quando não sabemos os nomes das chaves mas já sabemos os tipos do obj ou do array
// Restringe o que NÃO deve ser usado
// Mais segurança

// sempre passa uma string com valor numerico
interface CoordObjects {
  [index: string]: number;
}

let coords: CoordObjects = {
  // x: "teste"
  x: 10,
};

coords.y = 15;

// 5 - Herança de Interface
// Usamos extending types como herança para criar tipos mais complexos
// herdar propriedades e tipos de outra
// via extends

interface Human {
  name: string;
  age: number;
}

interface SuperHuman extends Human {
  vulgo: string;
  superPowers: string[];
}

const joao: Human = {
  name: "joao",
  age: 23,
};

const OruMaito: SuperHuman = {
  name: "Vitor",
  vulgo: "Mascara da Morte",
  age: 18,
  superPowers: ["Visão de Calor", "Super força"],
};

console.log(joao);
console.log("------------------");
console.log(OruMaito);

// 6 - Intersection Types
interface Character {
  nome: string;
}

interface Gun {
  type: string;
  caliber: number;
}

type HumanWithGun = Character & Gun;

const ArnoldShwasnegger: HumanWithGun = {
  nome: "Exterminador do Futuro",
  caliber: 12,
  type: "Shotgunzona",
};

console.log(ArnoldShwasnegger);

// 7 - read only array
let myArr: ReadonlyArray<string> = ["maçã", "banana"];

myArr.forEach((item) => {
  console.log(item);
});

myArr = myArr.map((item) => {
  return `Fruta: ${item}`;
});

console.log(myArr);

// 8 - Tupla
// tupla é um tipo de array, porém definimos a qnt e o tipo de elementos
// basicametne criamos um novo type e inserimos um array com os tipos necessários
// cada tipo conta também como um elemento
type fiveNumbers = [number, number, number, number, number];
const arrayzao: fiveNumbers = [1, 2, 3, 4, 5];

type nameAndAge = [string, number]
const vitor: nameAndAge = ["Vitor", 18]

// 9 - tuplas com readonly
function showNumbersCabuloso(...numbers: readonly [number]){
    return numbers
}
console.log(showNumbersCabuloso(54))