// Collect input from a user
let userInput = prompt('Please type a number');

// Convert the input to a number
userInput = parseInt(userInput);
console.log(typeof (userInput));

// Use Math.random() and the user's number to generate a random number
const randomNumber = Math.floor((Math.random() * userInput) * 1);

// Create a message displaying the random number
const main = document.querySelector('main');
main.innerHTML = `<p><strong>${randomNumber}</strong> is a random number between 1 and <strong>${userInput}</strong></p>`;
