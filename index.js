function mult(a, b){
    const answer = a * b;
    return answer;
}

function subt(a, b) {
    const answer = a - b;
    return answer;
}

function addit(a, b) {
    const answer = a + b;
    return answer; 
}

function divi(a, b) {
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

function perc(a, b) {
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

function calc(a, b, params) {
    if (params === mult) {
        return mult(a, b);
    } else if(params === subt){
        return subt(a, b);
    } else if(params === addit){
        return addit(a, b);
    } else if(params === divi){
        return divi(a, b);
    } else if(params === perc){
        return perc(a);
    }else {
       return "Non Valid Input" 
    } 
}

currentResult = calc(10, 2, perc);
console.log(currentResult)