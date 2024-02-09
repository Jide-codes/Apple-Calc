const keys = document.querySelectorAll('.key')
const display = document.querySelector('.display')
const equals = document.querySelector('.equals')
const operators = document.querySelectorAll('.operator')
const negative = document.querySelector('.negative')
const percentage = document.querySelector('.percentage')
const clear = document.querySelector('.clear')

let firstValue = " "
let isFirstValue = false
let secondValue = " "
let isSecondValue = false
let operator = " "
let displayValue = 0


// for (let key of keys) {
//     keys[key].addEventListener('click', function (event) {
//         let value = event.target.getAttribute('data-details')
//         if(isFirstValue === 'false') {
//             getFirstValue(value)
//         }
//         if (isSecondValue === false) {
//             getSecondValue(value)
//         }
//     } )
// }

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
})

function checkResultLength() {
    displayValue = JSON.stringify(displayValue)
    if (displayValue.length >= 8) {
        displayValue = JSON.parse(displayValue)
        display.textContent = displayValue.toFixed(5)
    }
}

negative.addEventListener('click', function () {
    display.textContent = ""
    if (firstValue != ' ') {
        displayValue = -firstValue
        firstValue = displayValue
    }
        if (firstValue != '' && secondValue != '' && operator != '') {
            displayValue = -displayValue
        }
            display.textContent = displayValue
     
    
})

percentage.addEventListener('click', function () {
    display.textContent = " "
    if (firstValue != " ") {
        displayValue = firstValue / 100
        firstValue = displayValue
    }
    if (firstValue != ' ' && secondValue != ' ' && operator != ' ') {
        displayValue = displayValue/100
    }
    display.textContent = displayValue
})


clear.addEventListener('click', function () {
    display.textContent = ''

    firstValue = ""
    isFirstValue = false
    secondValue = ""
    isSecondValue = ""
    operator = ""
    displayValue = 0
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
    // const decimalIndex = answer.toString();
    // const indexOfDecimal = decimalIndex.indexOf(".");
    // if (indexOfDecimal !== -1) {
    //     const decimalPlaces = decimalIndex.length - 1 - indexOfDecimal;
    //     if (decimalPlaces >= 9) {
    //         const backToNum = parseFloat(decimalIndex);
    //         const roundedAnswer = backToNum.toFixed(9)
    //         return roundedAnswer;
    //     } else {
    //         const backToNum = parseFloat(decimalIndex);
    //     return backToNum;
    //     }
    // } else {
    //     const backToNum = parseInt(decimalIndex);
    //     return backToNum;
    // }
    return answer;
}

function perc(a) {
    const answer = a / 100;
    // const decimalIndex = answer.toString();
    // const indexOfDecimal = decimalIndex.indexOf(".");
    // if (indexOfDecimal !== -1) {
    //     const decimalPlaces = decimalIndex.length - 1 - indexOfDecimal;
    //     if (decimalPlaces >= 9) {
    //         const backToNum = parseFloat(decimalIndex);
    //         const roundedAnswer = backToNum.toFixed(9)
    //         return roundedAnswer + "%";
    //     } else {
    //         const backToNum = parseFloat(decimalIndex);
    //     return backToNum + "%";
    //     }
    // } else {
    //     const backToNum = parseInt(decimalIndex);
    //     return backToNum + "%";
    // }
    return answer;
}

// function calc(a, b, params) {
//     if (params === mult) {
//         return mult(a, b);
//     } else if(params === subt){
//         return subt(a, b);
//     } else if(params === addit){
//         return addit(a, b);
//     } else if(params === divi){
//         return divi(a, b);
//     } else if(params === perc){
//         return perc(a);
//     }else {
//        return "Non Valid Input" 
//     } 
// }

<<<<<<< HEAD
currentResult = calc(10,5, perc);
console.log(currentResult)
=======
// currentResult = calc(10, 2, perc);
// console.log(currentResult)
>>>>>>> 66f357e03cf0c568a875bf4441475cc502900def
