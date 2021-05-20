const btn = document.querySelector("#btn")
btn.addEventListener("click", novoItem)

const array = []
let indice = 0
function novoItem() {
    const input = document.querySelector("input")
    if (input.value != "") {
        array.push(input.value)
        const borda = document.querySelector("#borda1")
        borda.style.display = "block"
        const resultado = document.querySelector("#resultado")
        let resWraper = document.createElement("div")
        const pWraper = document.createElement("p")
        const btnWraper = document.createElement("button")
        const imgWraper = document.createElement("img")

        resWraper.className = "resultado_wraper"

        resultado.appendChild(resWraper)
        resWraper.appendChild(pWraper)
        resWraper.appendChild(btnWraper)
        btnWraper.appendChild(imgWraper)

        pWraper.innerHTML = input.value
        imgWraper.src = "img/lixo.svg"
        btnWraper.id = indice
        btnWraper.className = "deletarItem"
        resWraper.id = `res${indice}`

        btnWraper.addEventListener("click", function () {
            btnDelete(btnWraper.id, indice, resWraper.className)
        })

        input.value = ""
        verifyInd(indice)
        indice++
        console.log(array)
    } else {
        alert("coloca algo ai :D")
    }
}
function btnDelete(botaoId, indice, resWraper) {
    array.forEach(function (el, i) {
        if (botaoId == i) {
            array.splice(i, 1)
            /*var a = document.getElementById(`res${i}`)
            a.id = `res${i - 1}`
            a.style.display = "none"*/
            //delete array[i]
            document.getElementById(`res${i}`).remove()
            verifyInd(indice)
        }
        if (array.length == 0) {
            alert("Parabens! Você terminou sua lista de afazeres!")
            const borda = document.querySelector("#borda1")
            borda.style.display = "none"
        }
    })
}
function verifyInd(indice) {
    const resultadoWraper = document.querySelectorAll(".resultado_wraper")
    const botaoDelete = document.querySelectorAll(".deletarItem")
    if (Math.max(...botaoDelete) != array.length - 1) {
        resultadoWraper.forEach((e, ind) => {
            e.id = `res${ind}`
            botaoDelete[ind].id = ind
        })
        indice = indice - 1
        return indice
    }
}

const btn2 = document.getElementById("finalbtn")
btn2.addEventListener("click", lista)

String.prototype.capitalize = function () {
    return this.charAt(0).toUpperCase() + this.substr(1);
}

function lista() {
    const newArray = []
    array.forEach((e, i) => {
        const elemento = e.capitalize()
        newArray.push(elemento)
    })
    alert(`Você tem que fazer: ${newArray.length != 0 ? newArray : "Nada"}`)
}