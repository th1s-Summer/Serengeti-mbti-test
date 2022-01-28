// 오브젝트 안에서 함수가 작동하도록
// + - / ** 계산이 가능하도록
const calculator = {
    plus: function (a, b) {
        console.log(a + b);
    },
    minus: function (a, b) {
        console.log(a - b);
    },
    divide: function (a, b) {
        console.log(a / b);
    },
    powerOf: function (a, b) {
        console.log(a ** b);
    }
}
calculator.plus(1, 5);
calculator.minus(3, 3);
calculator.divide(4, 2);
calculator.powerOf(2, 3); 
