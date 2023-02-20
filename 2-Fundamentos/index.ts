
// 1 - numero
let x : number = 10
let y : number = 814.477

console.log(x)
console.log(typeof x)

console.log(y)
console.log(y.toPrecision(2))
console.log(typeof y)

// 2 - string
let firstName : string = "Vitor"
let lastName : string = "Coelho"

console.log(firstName)
console.log(firstName +" "+ lastName)
console.log(firstName.length)
console.log(firstName.toUpperCase())
console.log(firstName.search("i"))

// 3 - booleans
let a : boolean = false
let b : boolean = true

console.log(a)
console.log(b)

// 4 - inference (O typescript decide por você) e annotation (Você decide o tipo)

let annotation : string = "Teste"
let inference = "Teste"

console.log("uou")
//erro abaixo pois ele entendeu como string
//inference = 5

