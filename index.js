//Problem #1
//Write a script that accepts an array of numbers and returns a new array with only the odd numbers

//This is going to use an if / else statement 
//For example, here is an array of 2, 3, 4, 5 and we want it to return just 3 and 5 
//This loop will need to go through the array, checking each value and if the value is odd (modulo operator), it will return that value
//We want it to create a new array with only the values that the for loop determined are odd with the modulo operator

//To test this code, uncomment out the line you wish to test
//Be sure to check that the other lines are commented out!

const numArray = [2, 4, 6, 8, 11, 20, 15, 22];
// const numArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const numArray = [70, 42, 55, 81, 21, 91, 34];
// const numArray = [2, 4, 6, 8, 10, 11, 12];

let newArray = []

for (let i = 0; i < numArray.length; i++) {
    if (numArray[i] % 2 !== 0) {
       newArray.push(numArray[i]);
    } 
}

console.log(newArray)

//Problem #2
//Write a script that accepts a string of lowercase letters and have it print out how many consonants and vowels that string has

//For example, if your string is dog, that would print out 2 consonants and 1 vowel
//To do this, I can use a for loop for check each index of the string for whether or not that value is a consonant or a vowel
//I can use an if/else statement to determine what to do if the letter if a consonant or a vowel

//To test this code, uncomment out the line you wish to test
//Be sure to check that the other lines are commented out!

let string = "hello";
// let string = "ukelele";
// let string = "awesome";
// let string = "onomonopia";
// let string = "textbook";

let vowelCount = 0;
let consonantCount = 0;

for (let i = 0; i < string.length; i++) {
    if (string[i] === "a" || string[i] === "e" ||
    string[i] === "i" || string[i] === "o" || string[i] === "u") {
        vowelCount++;
    } else {
        consonantCount++;
    }
}

console.log(string + " has " + consonantCount + " consonants and " + vowelCount + " vowels")


//Problem #3
//With a for loop, write a javascript that takes an array and writes it in reverse order

//For example, if the array is 1 2 3 4, the new reverse array will be 4 3 2 1 
//This problems specifically says to use a for loop so I will use that, I don't believe I need an if/else statement 
//I think I will have the for loop go through the index of the array and return the numbers in reverse order using unshift

//To test this code, uncomment out the line you wish to test
//Be sure to check that the other lines are commented out!

const forwardArray = [1, 2, 3];
// const forwardArray = [1, 3, 5, 7, 9, 11];
// const forwardArray = [20, 50, 30, 60, 200];
// const forwardArray = [1, -1, 2, -3, 5, -8, 13];

let reverseArray = [];

for (let i = 0; i < forwardArray.length; i++) {
   reverseArray.unshift(forwardArray[i]);
}

console.log(reverseArray)

//Problem #4