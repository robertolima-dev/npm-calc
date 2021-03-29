const calc = require('./index.js')

try {

    let sumTest = calc.sum('2',2)
    if(sumTest !== 4) {
        throw new Error('O cálculo 2 + 2 está errado: ' + sumTest)
    }

    let subTest = calc.sub(3,'2')
    if(subTest !== 1) {
        throw new Error('O cálculo 3 - 2 está errado: ' + subTest)
    }

    let multTest = calc.mult(3,'3')
    if(multTest !== 9) {
        throw new Error('O cálculo 3 * 3 está errado: ' + multTest)
    }

    let divTest = calc.div('9',3)
    if(divTest !== 3) {
        throw new Error('O cálculo 9 / 3 está errado: ' + divTest)
    }

    console.log('Aprovado em todos os testes')

} catch(err) {
    throw err.message
}