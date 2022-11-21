const j1Num = document.querySelector("#escolha1")
const j2Num = document.querySelector("#escolha2")
const btnJogar = document.querySelector("#jogar")
const resultado = document.querySelector("#venceu")

const butaoJogar = function(e){
    e.preventDefault()

    const par = document.querySelector("#par")
    const impar = document.querySelector("#impar")

    let j1 = Number(j1Num.value)
    let j2 = Number(j2Num.value)

    let soma = j1 + j2

    if (par.checked == true || impar.checked == true){
        if(par.checked == true && soma % 2 == 0){
            resultado.innerText = `
            Jogador 1 colocou ${j1} e escolheu ${par.value}
            Jogador 2 colocou ${j2} e escolheu ${impar.value}
            ${j1} + ${j2} = ${soma} que é ${par.value}
            
            Jogador 1 Venceu`
        }
        else if(par.checked == false && soma % 2 == 0){
            resultado.innerText = `
            Jogador 1 colocou ${j1} e escolheu ${impar.value}
            Jogador 2 colocou ${j2} e escolheu ${par.value}
            ${j1} + ${j2} = ${soma} que é ${par.value}
            
            Jogador 2 Venceu`
        }
        else if(impar.checked == true && soma % 2 == 1){
            resultado.innerText = `
            Jogador 1 colocou ${j1} e escolheu ${impar.value}
            Jogador 2 colocou ${j2} e escolheu ${par.value}
            ${j1} + ${j2} = ${soma} que é ${impar.value}
            
            Jogador 1 Venceu`
        }
        else if(impar.checked == false && soma % 2 == 1){
            resultado.innerText = `
            Jogador 1 colocou ${j1} e escolheu ${par.value}
            Jogador 2 colocou ${j2} e escolheu ${impar.value}
            ${j1} + ${j2} = ${soma} que é ${impar.value}
            
            Jogador 2 Venceu`
        }
    }
}

btnJogar.addEventListener("click", butaoJogar);