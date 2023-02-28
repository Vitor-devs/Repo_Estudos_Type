"use strict";
//object types
// São dados que tem como tipo: objeto Ex: object literals e arrays
// Temos: interfaces, readonly, tuplas e mais
function showProducts(product) {
    console.log(`O nome do produto é ${product.name} e seu preço R$${product.price}`);
    if (product.isAvaliable == true) {
        console.log("Ele se encontra disponivel");
    }
    else {
        console.log("Ele não se encontra disponivel");
    }
}
const produtasso = {
    name: "Mangá de One Piece",
    price: 30,
    isAvaliable: false,
};
showProducts(produtasso);
console.log("----------------------------");
showProducts({ name: "Camisa", price: 15.9, isAvaliable: true });
function showUserDetails(user) {
    console.log(`O usuário tem o email ${user.email}`);
    if (user.role) {
        console.log(`Atual trabalhando de ${user.role}`);
    }
}
const u1 = {
    email: "testeu1@gmail.com",
};
showUserDetails(u1);
console.log("----------------------------");
showUserDetails({ email: "joaozinho@hotmail.com", role: "programador" });
console.log("----------------------------");
showUserDetails({ email: "princesinha@hotmail.com" });
const carrinho = {
    brand: "VW",
    wheels: 4,
};
console.log(carrinho);
let coords = {
    // x: "teste"
    x: 10,
};
coords.y = 15;
const joao = {
    name: "joao",
    age: 23,
};
const OruMaito = {
    name: "Vitor",
    vulgo: "Mascara da Morte",
    age: 18,
    superPowers: ["Visão de Calor", "Super força"],
};
console.log(joao);
console.log("------------------");
console.log(OruMaito);
const ArnoldShwasnegger = {
    nome: "Exterminador do Futuro",
    caliber: 12,
    type: "Shotgunzona",
};
console.log(ArnoldShwasnegger);
// 7 - read only array
let myArr = ["maçã", "banana"];
myArr.forEach((item) => {
    console.log(item);
});
myArr = myArr.map((item) => {
    return `Fruta: ${item}`;
});
console.log(myArr);
const arrayzao = [1, 2, 3, 4, 5];
const vitor = ["Vitor", 18];
// 9 - tuplas com readonly
function showNumbersCabuloso(...numbers) {
    return numbers;
}
console.log(showNumbersCabuloso(54));
