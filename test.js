// Importar la función sum del archivo app.js
const { sum } = require('./app.js');

// Comienza tu primera prueba
test('adds 14 + 9 to equal 23', () => {
    // Dentro de la prueba llamamos a nuestra función sum con 2 números
    let total = sum(14, 9);

    // Esperamos que la suma de esos 2 números sea 23
    expect(total).toBe(23);
});




test("One euro should be 1.07 dollars", function() {
    // Importo la funcion desde app.js
    const { fromEuroToDollar } = require('./app.js');

    // Uso la función como debe ser usada
    const dollars = fromEuroToDollar(3.5);

    // Si 1 euro son 1.07 dólares, entonces 3.5 euros debe ser (3.5 * 1.07)
    const expected = 3.5 * 1.07;

    // Hago mi comparación (la prueba)
    expect(fromEuroToDollar(3.5)).toBe(3.745); // 1 euro son 1.07 dólares, entonces 3.5 euros deberían ser = (3.5 * 1.07)
})

test('Convert 1 dólar to yens', function() {
    // Importo la funcion desde app.js
    const { fromDollarToYen } = require('./app.js');

    // Uso la función como debe ser usada
    const yens = fromDollarToYen(1);

    // 1 USD = (1 / 1.07) EUR ≈ 0.93457944 EUR
    // 0.93457944 EUR * 156.5 ≈ 146.26168224 JPY

    expect(yens).toBeCloseTo(146.26168224, 2);
});

test('Convert 1 yen to pounds', function() {
    // Importo la funcion desde app.js
    const { fromYenToPound } = require('./app.js');

    // Uso la función como debe ser usada
    const pounds = fromYenToPound(1);

    // 1 JPY = (1 / 156.5) EUR ≈ 0.00638978 EUR
    // 0.00638978 EUR * 0.87 ≈ 0.00555911 GBP

    expect(pounds).toBeCloseTo(0.00555911, 5);
});


