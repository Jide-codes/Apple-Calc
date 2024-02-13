const keys = document.querySelectorAll('.key')
const display = document.querySelector('.display')
const equals = document.querySelector('.equals')
const operators = document.querySelectorAll('.operator')
const negative = document.querySelector('.negative')
const percentage = document.querySelector('.percent')
const clear = document.querySelector('.clear')

let firstValue = " "
let isFirstValue = false
let secondValue = " "
let isSecondValue = false
let operator = " "
let displayValue = 0


for (let i = 0; i < keys.length; i++) {
    keys[i].addEventListener('click', function (event) {
        let value = event.target.getAttribute('data-details')
        if (isFirstValue === false) {
            getFirstValue(value)
        }
        if (isSecondValue === false) {
            getSecondValue(value)
        }
   
 })
        
} 

function getFirstValue(valueEl) {
    display.textContent = " "
    firstValue += valueEl
    display.textContent = firstValue
    firstValue = +firstValue
   
}

function getSecondValue(valueEl) {
    if (firstValue != " " && operator != " ") {
        secondValue += valueEl
        display.textContent = secondValue
        secondValue = +secondValue
     
    }
}

function getSign() {
    for (let key = 0; key < operators.length; key++) {
        operators[key].addEventListener('click', function (event) {
            operator = event.target.getAttribute('data-details')
            isFirstValue = true
        })
    }
}
getSign()


equals.addEventListener('click', function () {
    display.textContent = ""
    if (operator === "+") {
        displayValue = addition(firstValue, secondValue)
    } else if (operator === "-") {
        displayValue = subtraction(firstValue, secondValue)
    } else if (operator === "*") {
        displayValue = multiplication(firstValue, secondValue)
    } else if (operator === "/") {
        displayValue = division(firstValue, secondValue)
    }
    display.textContent = displayValue
    firstValue = displayValue
    secondValue = " "

    checkResultLength()
})

function checkResultLength() {
    displayValue = JSON.stringify(displayValue)
    if (displayValue.length >= 8) {
        displayValue = JSON.parse(displayValue)
        display.textContent = displayValue.toFixed(5)
    }
    // if (displayValue.length >= 4) {
    //     const position = displayValue.length - 3
    //     const formattedDisplay = displayValue.slice(0, position) + ',' + displayValue.slice(position)

    //     display.textContent = formattedDisplay
    // }
    const commasPosition = Math.floor((displayValue.length - 1) / 3)

    let formattedDisplay = displayValue
    for (let i = 1; i <= commasPosition; i++){
        const position = displayValue.length - i * 3
        formattedDisplay = formattedDisplay.slice(0, position) + ',' + formattedDisplay.slice(position)
    }
    display.textContent = formattedDisplay

}

negative.addEventListener('click', function() {
    display.textContent = ''
    if (firstValue != "") {
        displayValue = -firstValue
        firstValue = displayValue
    }
    // if (firstValue != "" && secondValue != "" &&  operator != "") {
    //     displayValue = displayValue
    // }
    display.textContent = displayValue
})


percentage.addEventListener("click", function () {
    if (firstValue != "") {
        displayValue = firstValue / 100
        firstValue = displayValue
    }
    display.textContent= displayValue
})

clear.addEventListener("click", function () {
    display.innerHTML = 0

     firstValue = " ";
     isFirstValue = false;
     secondValue = " ";
     isSecondValue = false;
     operator = " ";
     displayValue = 0;

})



function multiplication(a, b) {
    const answer = a * b;
    return answer;
}

function subtraction(a, b) {
    const answer = a - b;
    return answer;
}

function addition(a, b) {
    const answer = a + b;
    return answer; 
}

function division(a, b) {
    const answer = a / b;
    return answer;
}

function perc(a) {
    const answer = a / 100;
    return answer;
}