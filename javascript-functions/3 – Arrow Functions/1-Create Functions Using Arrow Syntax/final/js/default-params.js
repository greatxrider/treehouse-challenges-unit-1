/**
 * 
 * @param {string} greeting 
 * @param {string} name
 * @returns {string} The message to greet the person.
 */

function sayGreeting(greeting = 'Good Morning', name = 'Mark') {
    return `${greeting}, ${name}`;
}

sayGreeting();
