const keys = document.querySelectorAll('.key')

const display = document.querySelector('.display')

let firstValue = " "
let isFirstValue = false
let secondValue = ""
let isSecondValue = false
let operator = ""
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
        if (secondValue === false) {
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
    for (let key = 0; key < operator.length; key++) {
        operator[key].addEventListener('click', function (event) {
            operator = event.target.getAttribute('data-details')
            isFirstValue = true
        })
    }
}
getSign()


// multiply.addEventListener('click', function () {
//     let ans = mult(0.0005, twoEl.textContent)
//     answer.textContent = ans
//     console.log(ans)
// })

function mult(a, b) {
    const answer = a * b;
    const roundedAnswer = answer
    return roundedAnswer;
}

function subt(a, b) {
    const answer = a - b;
    const roundedAnswer = Number(answer).toFixed(9)
    return roundedAnswer;
}

function addit(a, b) {
    const answer = a + b;
    const roundedAnswer = Number(answer).toFixed(9)
    return roundedAnswer; 
}

function divi(a, b) {
    const answer = a / b;
    const decimalIndex = answer.toString();
    const indexOfDecimal = decimalIndex.indexOf(".");
    if (indexOfDecimal !== -1) {
        const decimalPlaces = decimalIndex.length - 1 - indexOfDecimal;
        if (decimalPlaces >= 9) {
            const backToNum = parseFloat(decimalIndex);
            const roundedAnswer = backToNum.toFixed(9)
            return roundedAnswer;
        } else {
            const backToNum = parseFloat(decimalIndex);
        return backToNum;
        }
    } else {
        const backToNum = parseInt(decimalIndex);
        return backToNum;
    }
}

function perc(a) {
    const answer = a / 100;
    const decimalIndex = answer.toString();
    const indexOfDecimal = decimalIndex.indexOf(".");
    if (indexOfDecimal !== -1) {
        const decimalPlaces = decimalIndex.length - 1 - indexOfDecimal;
        if (decimalPlaces >= 9) {
            const backToNum = parseFloat(decimalIndex);
            const roundedAnswer = backToNum.toFixed(9)
            return roundedAnswer + "%";
        } else {
            const backToNum = parseFloat(decimalIndex);
        return backToNum + "%";
        }
    } else {
        const backToNum = parseInt(decimalIndex);
        return backToNum + "%";
    }
}

currentResult = perc(5);
// console.log(currentResult)