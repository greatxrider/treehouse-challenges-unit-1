// 1. Create a multidimensional array to hold quiz questions and answers
const questions = [
  ['How many planets are in the Solar System?', '8'],
  ['How many continents are there?', '7'],
  ['How many legs does an insect have?', '6'],
  ['What year was JavaScript created?', '1995']
];

// 2. Store the number of questions answered correctly
let correctAnswers = 0;

/*
  3. Use a loop to cycle through each question
      - Present each question to the user
      - Compare the user's response to answer in the array
      - If the response matches the answer, the number of correctly
        answered questions increments by 1
*/
const quiz = (arr) => {
  // for (let i = 0; i < arr.length; i++) {
  //   let answer = prompt(`${arr[i][0]}`);
  //   if (questions[i].includes(answer)) {
  //     correctAnswers++;
  //   }
  // }

  for (let i = 0; i < arr.length; i++) {
    let questions = arr[i][0];
    let answers = arr[i][1];
    let response = prompt(questions);
    if (response === answers) {
      correctAnswers++;
    }
  }
}

quiz(questions);

let html = `
  <h1>You got ${correctAnswers} question(s) correct</h1>
`;

// 4. Display the number of correct answers to the user
document.querySelector('main').innerHTML = html;
