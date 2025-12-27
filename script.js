/*
Abaixo de 18,5	Baixo peso
18,5 a 24,9	Peso normal (eutrofia)
25,0 a 29,9	Sobrepeso (excesso de peso)
30,0 a 34,9	Obesidade de Classe 1 (grau I)
35,0 a 39,9	Obesidade de Classe 2 (grau II)
Acima de 40,0	Obesidade de Classe 3 (grau III ou mórbida)
*/

let altura
let peso
let imc



function calcular(event){
    event.preventDefault()
    let resultado = document.getElementById("resultado")
    
    peso = document.getElementById("peso").value
    altura = document.getElementById("altura").value

    if(peso === '' || altura === ''){
        resultado.innerHTML = "<p>Altura ou peso não foi preenchida !!!</p>"
        resultado.style.background = "none"
    }

    imc = peso / (altura * altura)

    if(imc < 18.5){
        resultado.innerHTML = `<p>Seu IMC foi ${imc.toFixed(2)}</p> <p>Você está abaixo do seu peso ideal!</p>`
        resultado.style.background = "yellow"
    }else if(imc >= 18.5 && imc < 25){
        resultado.innerHTML = `<p>Seu IMC foi ${imc.toFixed(2)}</p> <p>Você está no seu peso ideal!</p>`
        resultado.style.background = "green"
    }else if(imc >= 25 && imc < 30){
        resultado.innerHTML = `<p>Seu IMC foi ${imc.toFixed(2)}</p> <p>Você está com sobrepeso (Exesso de peso)!</p>`
        resultado.style.background = "rgb(255, 255, 104)"
    }else if(imc >= 30 && imc < 35){
        resultado.innerHTML = `<p>Seu IMC foi ${imc.toFixed(2)}</p> <p>Você está com Obesidade de Classe 1 !</p>`
        resultado.style.background = "red"
    }else if(imc >= 35 && imc < 40){
        resultado.innerHTML = `<p>Seu IMC foi ${imc.toFixed(2)}</p> <p>Você está com Obesidade de Classe 2 !</p>`
        resultado.style.background = "red"
    }else if(imc >= 40){
        resultado.innerHTML = `<p>Seu IMC foi ${imc.toFixed(2)}</p> <p>Você está com Obesidade de Classe 3 (mórbida) !</p>`
        resultado.style.background = "red"
    }
    
    document.getElementById("peso").value = ''
    document.getElementById("altura").value = ''

}
