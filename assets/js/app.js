/* app.js */

// create a variable motd and assign a string to it
let motdArray = [
    "You miss 100% of the shots you don't take <i>--Wayne Gretsky</i>",
    "Everything you can imagine is real <i>--Pablo Picasso</i>",
    "Unless someone like you cares a whole awful lot, nothing is going to get better, it's not. <i>--Dr. Seuss</i>",
    "No matter what people tell you, words and ideas can change the world. <i>--Robin Williams</i>",
    "Be yourself, everyone else is already taken. <i>--Oscar Wilde</i>",
    "Find something you love to do and then do it for the rest of your life <i>--Max Fischer</i>"

];


// getRandomInt function procured from: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
function getRandomInt(max) {

    return Math.floor(Math.random() * Math.floor(max));
}

let randomIndex = getRandomInt(motdArray.length);

console.log("randomIndex is " + randomIndex);

// query the document and get an element with an id of 'motd'
// and assign our character string to it.
document.querySelector("#motd").innerHTML = motdArray[randomIndex];