function mult(a, b){
    const answer = a * b;
    const roundedAnswer = answer.toFixed(9)
    return roundedAnswer;
}

function subt(a, b) {
    const answer = a - b;
    const roundedAnswer = answer.toFixed(9)
    return roundedAnswer;
}

function addit(a, b) {
    const answer = a + b;
    const roundedAnswer = answer.toFixed(9)
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
console.log(currentResult)