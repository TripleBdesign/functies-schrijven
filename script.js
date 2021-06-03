//function declaration
function kwadraten1 (getal1, getal2){
    const kwadraadje1 = getal1 ** 2;
    const kwadraadje2 = getal2 ** 2;
    return kwadraadje1
    return kwadraadje2

    console.log ("kwadraat1");
}


const bereken = kwadraten ([10, 46]);
console.log (bereken);




//function expression
const kwadraten2 = function (getal3, getal4) {
    return getal3 * 2;
    console.log ()
}
kwadraten2 (52,96);




//arrow function
const square = getal5 => getal6 *2;
const voerCalcUit = (getal7, getal8) =>
    square (square(getal7) + square(getal8));


// dit is de 'normale' beste manier om elke functie te declareren
// const square = (number) => {
//     return number * number;
// }
// als je functie slechts 1 regel beslaat, zoals deze, kun je het ook zo opschrijven:
// const square = (number) => number * number;
// je kunt hier dan de accolades weglaten, én het return keyword. De return wordt impliciet alsnog gedaan met deze notatie.