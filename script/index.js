const form = document.querySelector("form")
const select = document.getElementById("select")

const date = document.getElementById("date")
const text = document.getElementById("text")

const data = document.getElementById("data")

const result = document.getElementById("result")
const h2 = document.createElement("h2")



select.oninput = () =>{
    toogleClass(select.value)
}

date.oninput = () =>{
    
}


data.oninput = () =>{
    
}


text.oninput = () =>{
    Number(text.value)
}

form.onsubmit = (event) => {
    event.preventDefault()
    if(select.value == "dias"){
        totalDias(data.value, text.value)
    }

    if(select.value == "final"){
        diferencaDias()
    }
}

function toogleClass(value){
    if(value == "dias"){
        date.classList.add("some")
        text.classList.remove("some")
    }else if(value == "final"){
        text.classList.add("some")
        date.classList.remove("some")
    }else if(value == "null"){
        text.classList.add("some")
        date.classList.add("some")
    }
}

function totalDias(data, dias){
    //valor do data e somar com numero de dias no text
    h2.textContent = ""
    const myDate = new Date() ? new Date(data) : new Date()
    const dia = Number(dias)

    myDate.setDate((myDate.getDate() + 1) + dia);

    h2.textContent = myDate.toLocaleDateString();
    result.append(h2)
    
}

function diferencaDias(){
    //calcular a diferença de dias entre o data e o date

    h2.textContent = ""

    const diffInMs   = new Date(date.value) - new Date(data.value)
    const diffInDays = (diffInMs / (1000 * 60 * 60 * 24)) / 1;
    h2.textContent = `${diffInDays} dias.`
    result.append(h2)

}