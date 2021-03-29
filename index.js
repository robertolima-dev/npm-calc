class Calc {
    sum(n1, n2) {
        return Number(n1) + Number(n2);
    }
    sub(n1, n2) {
        return Number(n1) - Number(n2);
    }
    mult(n1, n2) {
        return Number(n1) * Number(n2);
    }
    div(n1, n2) {
        return Number(n1) / Number(n2);
    }
}

module.exports = new Calc 