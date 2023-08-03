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

//Problem #3

//Problem #4