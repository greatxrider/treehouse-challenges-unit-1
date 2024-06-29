/*
  1. Store correct answers
   - When quiz begins, no answers are correct
*/
let score = 0;
const correctAnswer_1 = 'Frodo';
const correctAnswer_2 = 'Ring of Power';
const correctAnswer_3 = 'Bag End';
const correctAnswer_4 = 'Sauron';

// 2. Store the rank of a player
let rank;
// 3. Select the <main> HTML element
const main = document.querySelector('main');

/*
  4. Ask at least 5 questions
   - Store each answer in a variable
   - Keep track of the number of correct answers
*/
const question1 = prompt('Who is the main character in "The Lord of the Rings" who must destroy the One Ring?');
const question2 = prompt('What is the name of the ring that Bilbo finds in "The Hobbit"?');
const question3 = prompt('Where do Bilbo and Frodo live at the beginning of their adventures?');
const question4 = prompt('Who is the main antagonist trying to take over Middle-earth in both stories?');
const question5 = prompt('Name one magical race that lives in Middle-earth, like elves or dwarves.');

if (question1.toUpperCase() === correctAnswer_1.toUpperCase()) {
    ++score;
}

if (question2.toUpperCase() === correctAnswer_2.toUpperCase()) {
    ++score;
}

if (question3.toUpperCase() === correctAnswer_3.toUpperCase()) {
    ++score;
}

if (question4.toUpperCase() === correctAnswer_4.toUpperCase()) {
    ++score;
}

if (question5.toUpperCase() === 'ELVES' || question5.toUpperCase() === 'ORCS' || question5.toUpperCase() === 'HUMANS') {
    ++score;
}

/*
  5. Rank player based on number of correct answers
   - 5 correct = Gold
   - 3-4 correct = Silver
   - 1-2 correct = Bronze
   - 0 correct = No crown
*/
if (score === 5) {
    rank = 'Gold';
} else if (score === 3 || score === 4) {
    rank = 'Silver';
} else if (score === 1 || score === 2) {
    rank = 'Bronze';
} else {
    rank = 'No crown';
}

// 6. Output results to the <main> element
main.innerHTML = `
    <strong><p>You got ${score} out of 5 questions correct</p></strong>
    <p>Crown earned: <strong>${rank}</strong></p>
`