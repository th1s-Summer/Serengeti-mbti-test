const calculator = {
    plus: function (a, b) {
        return a + b
    },
    minus: function (a, b) {
        return a - b
    },
    divide: function (a, b) {
        return a / b
    },
    multiply: function (a, b) {
        return a * b
    }
}
const plusResult = calculator.plus(3, 5);
const minusResult = calculator.minus(plusResult, 5);

console.log(plusResult, minusResult);
