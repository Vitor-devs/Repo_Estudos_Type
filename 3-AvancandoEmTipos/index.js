"use strict";
//1 - Arrays
let numbers = [1, 2, 3, 4, 5, 6, 7];
//numbers.push("String aqui")
numbers.push(8);
console.log(numbers[3]);
let nomes = ["Vitor", "Soares", "Coelho"];
//nomes.push(7)
console.log(nomes);
// 2- outra sintaxe
let nums = [8, 9, 10];
console.log(nums);
// 3 - Any
let arr1 = ["Arroz", 3, true, [], { nome: "Vitor" }];
arr1.push({ idade: 21 });
arr1.push(["Fígado"]);
arr1.push(58);
console.log(arr1);
// 4 - parametros tipados
function soma(a, b) {
    let resultado = a + b;
    return console.log(resultado);
}
soma(6, 7);
// 5 - retorno de função
function saudacao(nome) {
    //return 5
    return `Olá, ${nome}`;
}
console.log(saudacao("Vitor"));
// 6 - função anonima
setTimeout(function () {
    const sallary = 1000;
    //erro pois converte string em float
    //console.log(parseFloat(sallary))
    console.log(sallary);
}, 4000);
const somae = (n1, n2) => {
    n1 + n2;
};
// 7 - tipos de objeto
function passarCoordenadas(coord) {
    console.log(`Localidade informada X : ${coord.x} || Y : ${coord.y}`);
}
const obj = { x: 158.1814, y: 879.104 };
passarCoordenadas(obj);
passarCoordenadas({ x: 547, y: 812 });
// 8 - parametros opc
// para ser opcional basta colocar "?" na frente
function showNumbers(a, b, c, d) {
    console.log("A: " + a);
    console.log("B: " + b);
    console.log("C: " + c);
    if (d) {
        console.log("D: " + d);
    }
}
showNumbers(3, 57, 8, 9);
// 9 - Validando arg opcional
function advancedGreeting(firstName, lastName) {
    if (lastName !== undefined) {
        return `oie ${firstName} ${lastName}`;
    }
    return `olá ${firstName}`;
}
console.log(advancedGreeting("Vitor"));
console.log(advancedGreeting("Vitor", "Coelho"));
// 10 - Union Type
function showBalance(balance) {
    console.log(balance);
}
showBalance("400");
showBalance(400);
//showBalance(true)
const array = ["Vitor", true, "Joaquim", false];
const alunos = [
    { nome: "Vitor", ativo: false },
    "String",
    false,
];
// 11 - Avançando em union type
function showUserRole(role) {
    if (typeof role == "boolean") {
        return "Usuário não aprovado";
    }
    return `A função do usuário é ${role}`;
}
console.log(showUserRole(false));
console.log(showUserRole("Adm"));
function showId(id) {
    console.log(`O id é : ${id}`);
}
showId(1);
showId("1");
function showCoords(obj) {
    console.log(`X : ${obj.x}`);
    console.log(`Y : ${obj.y}`);
    console.log(`Z : ${obj.z}`);
}
const coordObj = {
    x: 5,
    y: 6,
    z: 7,
};
// type personType = {
//     age: string;
// }
const pessoinha = {
    name: "Vitor",
    age: 18,
};
// 15 - Literal Types
let test;
//erro abaixo
// test = "oi"
test = "testando";
console.log(test);
function showDirection(direction) {
    console.log(`A direção é ${direction}`);
}
console.log(showDirection("up"));
//Não da 
// console.log(showDirection("esquerda"))
// 16 - non null assertion operator
const p = document.getElementById("some-p");
console.log(p?.innerText);
// p!.innerText += "oi"
//17 - big int
let n;
n = 1858n;
// 18 - Symbol
let symbolA = Symbol("Vitor");
let symbolB = Symbol("Vitor");
console.log(symbolA == symbolB);
console.log(symbolA === symbolB);
