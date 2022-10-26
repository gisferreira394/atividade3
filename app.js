function Chutar(){

let numeroSecreto = 5
let chute = document.getElementById("valor").value

if (chute == numeroSecreto){
// verdadeiro

document.getElementById("resultado").innerHTML = "Acertou!!"
}

else{ 
    // falso
    document.getElementById("resultado").innerHTML = "Errou"
}

}