function sumNumbers(num) {
    return function sum(num2) {
        return num + num2;
    }
}
const totalAmount = sumNumbers(5);
console.log(totalAmount(5));