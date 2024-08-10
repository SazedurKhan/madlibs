const prompt = require('prompt-sync')({ sigint: true });  
// I was in a difficult position because I didnt know how to output a prompt to the terminal but found this method.
let noun = "mountain";
let verb = "jump";
let adjective = "tall";
console.log(noun);
let num = 2;
let actual_num = num * 10000;
let username = prompt("Enter your name: ");
let isTrue = true;
let story = "Once upon a time there was a wild " + 
username + " roaming the forest, searching for food. Nearing the end of the forest, " 
+ username + " finds a " + adjective + " " + noun + ". After seeing the " + noun +  " " +
username + " decides to " + adjective + " to the top of the mountain. After finishing the trip "
+ username + " checks their phone and finds that they have " + actual_num + " steps for the day and decides its time to go home. Later that day " + username + " reflected and found that it was " + isTrue +
" what their teacher had told them. Spending time in the wild on your own is a good way to find peace.";
console.log(story);