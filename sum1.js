
function doubleNumbers(numbers) {
   
    let arr = numbers.map(function(number) {
        return number * 2; 
    });
    return arr; 
}


let numbers = [1, 2, 3, 4, 5];
let doubledNumbers = doubleNumbers(numbers);

console.log( doubledNumbers);
