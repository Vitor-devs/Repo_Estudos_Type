const firstName= "Vitor"
const LastName = "Coelho"
const Age: number = 13

function saudacao(name: string){
    console.log("Olá " + name)

}

saudacao(firstName)
saudacao(LastName)
// erro abaixo pois não é string 
//saudacao(Age)