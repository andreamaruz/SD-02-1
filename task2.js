// Refer to Task 2 in your Instructions to complete this task

const prompt = require("prompt-sync")();
console.log("This is Task Two!");
const numbers = [];

//llenamos el array hasta 105
for (let i = 1; i <=105; i++) {
  //numbers.push(i);
  if (i % 3 === 0 && i % 5 === 0) {
    console.log(i + " FIZZBUZZ");
  } else if (i % 3 === 0) {
    console.log(i + " FIZZ");
  } else if (i % 5 === 0) {
    console.log(i + " BUZZ");
  }else if (i % 7 === 0) {
    console.log(i + " WOOF");
  } 
  else {
    console.log(i);
  }
  }
for (let j = 0; j < numbers.length; j++) {
  console.log(numbers[j]);
 }

 
