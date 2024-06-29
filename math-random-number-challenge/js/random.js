let randomNumber;
// Collect inputs from a user
const inputLow = prompt('Please input a low number');
const inputHigh = prompt('Please input a high number');

// Convert the inputs to a number
const highNumber = parseInt(inputHigh);
const lowNumber = parseInt(inputLow);

if (lowNumber >= 0 && highNumber) {
    // Use Math.random() and the user's number to generate a random number
    randomNumber = Math.floor((Math.random() * (highNumber - lowNumber + 1)) + lowNumber);
    console.log(`${randomNumber} is a random number between ${lowNumber} and ${highNumber}`);
} else {
    console.log('You need to provide a number. Try again.');
}

// Create a message displaying the random number
const main = document.querySelector('main');
main.innerHTML = `<p><strong>${randomNumber}</strong> is a random number between <strong>${lowNumber}</strong> and <strong>${highNumber}</strong></p>`;
