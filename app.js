// One euro is:
let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}

// Declaramos una función con el nombre exacto "formEuroToDollar"
const fromEuroToDollar = function(valueInEuro) {
    // Convertimos el valor a dólares
    let valueInDollar = valueInEuro * 1.07;
    // Retornamos el valor en dólares
    return valueInDollar;
}

const fromDollarToYen = function (valueInDollars) {
    // Convertimos el valor de dolares a Euros
    let valueInEuro = valueInDollars / oneEuroIs.USD;
    // Convertimos el valor de Euros a Yenes
    let valueInYen = valueInEuro * oneEuroIs.JPY;
    // Retornamos el valor en yenes
    return valueInYen;
}

const fromYenToPound = function (valueInYens) {
    // Convertimos el valor de Yenses a Euros
    let valueInEuro = valueInYens / oneEuroIs.JPY;
    // Convertimos el valor de Euros a Pounds
    let valueInPound = valueInEuro * oneEuroIs.GBP;
    // Retornamos el valor en Pounds
    return valueInPound;
}


// Esta es mi función que suma dos números
const sum = (a,b) => {
    return a + b
}

// Solo un registro en consola para nosotros
console.log(sum(7,3))

// Exporta la función para usarla en otros archivos 
// (similar a la palabra clave "export" cuando se usa webpack)

// Tenemos que incluir la función en el exports para que sea exportada a otros archivos como test.js
module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound}