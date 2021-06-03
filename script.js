//function declaration
function doSquareCalculation(number1, number2) {
    const number1Squared = number1 * number1;
    const number2Squared = number2 * number2;
    const sum = number1Squared + number2Squared;
    const sumSquared = sum * sum;
    return sumSquared;
}




//function expression
const doSquareCalculation = function(number1, number2) {
    const number1Squared = number1 * number1;
    const number2Squared = number2 * number2;
    const sum = number1Squared + number2Squared;
    const sumSquared = sum * sum;
    return sumSquared;
};

//More readable expression
const square = function(number) {
    return number * number;
};

const doSquareCalculation = function(number1, number2) {
    return square(square(number1) + square(number2));
};

//arrow function
const doSquareCalculation = (number1, number2) => {
    const number1Squared = number1 * number1;
    const number2Squared = number2 * number2;
    const sum = number1Squared + number2Squared;
    const sumSquared = sum * sum;
    return sumSquared;
};

//shorter arrow function
const doSquareCalculation = (number1, number2) => {
    const sum = number1 * number1 + number2 * number2;
    return sum * sum;
};

//more readabel arrow function
const square = number => number * number;

const doSquareCalculation = (number1, number2) =>
    square(square(number1) + square(number2));

// dit is de 'normale' beste manier om elke functie te declareren
// const square = (number) => {
//     return number * number;
// }
// als je functie slechts 1 regel beslaat, zoals deze, kun je het ook zo opschrijven:
// const square = (number) => number * number;
// je kunt hier dan de accolades weglaten, én het return keyword. De return wordt impliciet alsnog gedaan met deze notatie.