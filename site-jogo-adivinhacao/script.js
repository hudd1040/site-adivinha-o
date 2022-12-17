//Variaveis
let random = Math.round((Math.random()*10))
let xAttempts = 1 
const numberInput = document.querySelector("#numberInput")



//Funções
function handClick(event) {
    event.preventDefault()  // esse codigo diz -> Não faça o padrão, que seria enviar o form 

    if (random == Number(numberInput.value)){
        
        document.querySelector(".screen1").classList.add("hide")
        document.querySelector(".screen2").classList.remove("hide")
        
        document.querySelector(".congrats").innerHTML = `Acertou em ${xAttempts} tentativas.`    
    }

    
    numberInput.value = "" // deixar o valor do campo vazio após tentar acertar
    xAttempts++
}

function resetClick(event) {

    document.querySelector(".screen1").classList.remove("hide")
    document.querySelector(".screen2").classList.add("hide")
    
    xAttempts = 1
    random = Math.round((Math.random()*10))
    random = Math.round((Math.random()*10))
    console.log(random)
}

document.addEventListener("keypress",function(e) {

    if(e.key == "Enter" && document.querySelector(".screen1").classList.contains("hide") ) { 

        resetClick()

    }
})
