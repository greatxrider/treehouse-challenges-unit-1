const numbers = [1, 2, 3];

const newNumber = numbers.forEach((num, index, array) => {
    return num * 2;
});

console.log(newNumber); // Outputs [2, 4, 6]
