type review = number | boolean

function sendReview(nota: review){
    if (nota){
        console.log(`Obrigado, sua nota para o review foi ${nota}`)
    } else {
        console.log("Não foi possivel enviar sua review")
    }

}

sendReview(false)
sendReview(3)
sendReview(13)