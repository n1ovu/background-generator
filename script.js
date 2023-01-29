let css = document.querySelector("h3")
const color1 = document.querySelector(".color1")
const color2 = document.querySelector(".color2")
const body = document.querySelector("#gradient")
const ranNum = document.querySelector(".btn")

css.innerText = `linear-gradient(to right, ${color1.value}, ${color2.value})`

function setColors(){
    body.style.background = `linear-gradient(to right, ${color1.value}, ${color2.value})`
    css.innerText = `${body.style.background}`
}

function randomColors() {
    const colors = []
    let num1 = ""
    let num2 = ""
    let hexNum = []
    const hex = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"]
    for (let ind = 0; ind < 2; ind++) {
        for (index = 0; index < 3; index++){
            for (i = 0; i < 2; i++) {
                num1 = Math.floor(Math.random() * 15) + 1
                num2 = num2 + hex[num1] 
            }
            
        }
        hexNum.push(`#${num2}`)
        num2 = ""
    }
        
    color1.value = hexNum[0]
    color2.value = hexNum[1]
    setColors()
}

color1.addEventListener("input", setColors)

color2.addEventListener("input", setColors)

ranNum.addEventListener("click", randomColors)