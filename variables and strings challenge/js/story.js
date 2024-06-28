// 1. Declare variables and capture input.
let adjective = prompt('Please type an adjective.');
let verb = prompt('Please type a verb.');
let noun = prompt('Please type a noun.');

// 2. Combine the input with other words to create a story.
const story = `<p>Once upon a time, in a "${adjective}" land, there was a "${noun}" 
who loved to ${verb} all day long. People from all around came to see the amazing ${noun} and watch it ${verb}. 
It was truly a ${adjective} sight to behold.</p>`;

// 3. Display the story as a <p> inside the <main> element.
document.querySelector('main').innerHTML = story;
