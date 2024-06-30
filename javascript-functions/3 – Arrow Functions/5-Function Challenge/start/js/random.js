/**
 * Returns a random number between two numbers.
 *
 * @param {number} lower - The lowest number value.
 * @param {number} upper - The highest number value.
 * @return {number} The random number value.
 */
const getRandomNumber = (lower, upper = 100) => {
    if (isNaN(lower) || isNaN(upper)) {
        console.log('Both arguments must be numbers.');
    } else {
        if (upper >= 0 && lower) {
            // Use Math.random() and the user's number to generate a random number
            const randomNumber = Math.floor((Math.random() * (upper - lower + 1)) + lower);
            console.log(`${randomNumber} is a random number between ${lower} and ${upper}`);
            return randomNumber;
        } else {
            console.log('You need to provide a number. Try again.');
        }
    }
}

// Call the function and pass it different values
getRandomNumber(24, 5);
