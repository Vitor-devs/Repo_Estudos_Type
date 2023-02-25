"use strict";
// 1 - void
function withoutReturn() {
    console.log("Essa função não possui retorno");
    //return "fim
}
withoutReturn();
// 2 - callback como arg
function greeting(name) {
    return `Olá ${name}`;
}
function preGreeting(userName, f) {
    console.log("Preparando a função");
    const greet = f(userName);
    console.log(greet);
}
const aloha = (nom) => `Aloha ${nom}`;
preGreeting("Vitor", greeting);
console.log("-------------------");
preGreeting("Vitor", aloha);
//preGreeting(2, greeting)
// 3 - Generic Function
// quando voce não sabe o que pode ser o array, seja ele str, bool ou numero
function firstElement(arr) {
    return arr[0];
}
console.log(firstElement([1, 2, 3]));
console.log(firstElement(["a", "b", "c"]));
console.log(firstElement("teste".split("")));
function mergeObjects(obj1, obj2) {
    return { ...obj1, ...obj2 };
}
const objeto1 = mergeObjects({ name: "Vitor" }, { age: 15, job: "Programador" });
console.log(objeto1);
//4 - Constraits
// serve para reduzir o escopo de generics que aceitam tudo
function biggestNumber(a, b) {
    let biggest;
    if (+a > +b) {
        biggest = a;
    }
    else {
        biggest = b;
    }
    return biggest;
}
console.log(biggestNumber(3, 5));
console.log(biggestNumber("3", "5"));
// 5 - especificar tipo de arg
function mergeArray(arr1, arr2) {
    return arr1.concat(arr2);
}
// assim ele nao roda pq existem arrays de tipos diferentes
// console.log(mergeArray([1,2,3], ["teste", "testando"]))
console.log(mergeArray([1, 2, 3], ["teste", "testando"]));
// 6 - parametros opcionais
function modernGreetin(name, titulo) {
    if (titulo) {
        return `Olá ${titulo}. ${name}, tudo bem?`;
    }
    else {
        return `Olá ${name}`;
    }
}
console.log(modernGreetin("Vitor", "Dr"));
// 7 - Parametro default
function somaDefault(num1 = 0, num2 = 0) {
    return num1 + num2;
}
console.log(somaDefault(3, 9));
// 8 - unknown 
// parece o any pois aceita todo tipo de dado, a diferença entre ele e o any é que ele nao deixa algo ser executado se nao houver validação de tipo
// mais uma camada de segurança
function doSomething(x) {
    //erro 
    //console.log(x[0])
    if (Array.isArray(x)) {
        console.log(x[0]);
    }
    else if (typeof x === 'object') {
        console.log(x);
    }
    else {
        console.log("O parâmetro informado não é um array nem um objeto");
    }
}
doSomething("Nem array nem obj");
doSomething(["arr"]);
doSomething({ nome: "obj" });
// 9 - never
// Usado quando a função não retorna nada
// Ex: retorno de erro
function showErrorMessage(msg) {
    throw new Error(msg);
}
// console.log(showErrorMessage("Ops erro"))
// showErrorMessage("errou")
// 10 - Rest Operator
//Mesma coisa que o rest do JS só vamos tipar ele
function sumAll(...num) {
    return num.reduce((number, sum) => sum = sum + number);
}
console.log(sumAll(1, 2, 3, 30));
// 11 - Desestructuring como parametro
function showProductDetails({ name, preco }) {
    return `O nome do produto é ${name} e o preço é R$${preco}`;
}
const camisa = {
    name: "Camisa locona",
    preco: 15
};
console.log(showProductDetails(camisa));
console.log(showProductDetails({ name: "calca cargo", preco: 12 }));
