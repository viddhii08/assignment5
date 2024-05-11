function findIndex(numbers, targetNumber) {
    return numbers.indexOf(targetNumber);
}

let numbers = [1, 2, 3, 4, 5, 6];
let target = 3;
let index = findIndex(numbers, target);
console.log( index);
