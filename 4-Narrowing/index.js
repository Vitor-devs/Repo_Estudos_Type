"use strict";
// 1 - type guard
function sum(a, b) {
    if (typeof a === "string" && typeof b === "string") {
        console.log(parseFloat(a) + parseFloat(b));
    }
    else if (typeof a === "number" && typeof b == "number") {
        console.log(a + b);
    }
    else {
        console.log("ops, não é possivel somar string com inteiro");
    }
}
sum("5", "8"); //vai
sum(5, 8); //vai
sum(5, "8"); //não quero que vá
// 2 - Checando se valor existe
// podemos colocar uma variavel em um if, e se existir ela retorna true
function operations(arr, operacao) {
    if (operacao) {
        if (operacao === "sum") {
            const sum = arr.reduce((i, total) => i + total);
            console.log(sum);
        }
        else if (operacao == "multiply") {
            const times = arr.reduce((i, total) => i * total);
            console.log(times);
        }
    }
    else {
        console.log("Defina uma operação");
    }
}
operations([1, 2, 3], "sum");
operations([2, 2, 3], "multiply");
// 3 - instance of
// igual do python
class User {
    constructor(name) {
        this.name = name;
    }
}
class SuperUser extends User {
    constructor(name) {
        super(name);
    }
}
const jhon = new User("Jhon");
console.log(jhon);
const paul = new SuperUser("Paul");
console.log(paul);
function saudar(obj) {
    if (obj instanceof SuperUser) {
        console.log(`Olá ${obj.name} você é da instancia Super User`);
    }
    else if (obj instanceof User) {
        console.log(`Olá ${obj.name} você é da instancia User`);
    }
}
saudar(jhon);
saudar(paul);
// 4 - Operador in
class Dog {
    constructor(name, breed) {
        this.name = name;
        if (breed) {
            this.breed = breed;
        }
    }
}
const viraLata = new Dog("Bolinha");
const deMadame = new Dog("Pétala", "Yorkshire");
function showDogDetails(dog) {
    if ("breed" in dog) {
        console.log(`Nome: ${dog.name}\nRaça : ${dog.breed}`);
    }
    else {
        console.log("O cachorro não possui raça definida");
    }
}
showDogDetails(viraLata);
showDogDetails(deMadame);
