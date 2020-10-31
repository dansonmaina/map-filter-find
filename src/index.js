// var numbers = [3, 56, 2, 48, 5];

//Map -Create a new array by doing something with each item in an array.
// function double(x){
//   return (x*2);
// }
// const newNumber= numbers.map(double)
// console.log(newNumber)

// for each
// var newNumbers=[];
// function double(x){
//   newNumbers.push(x*2);
// }
// numbers.forEach(double);
// console.log(newNumbers)
//Filter - Create a new array by keeping the items that return true.
// function greater(num){
//   return num<=56;
// }
// const newNumber= numbers.filter(greater);
// console.log(newNumber)

//Reduce - Accumulate a value by doing something to each item in an array.
// function acc(accumulator, newNumbers){
//   return accumulator += newNumbers;
// }
// var newNumbers=numbers.reduce(acc)
// console.log(newNumbers)
//Find - find the first item that matches from an array.
// function first(num){
//   return num<10;
// }
// const firstNumber=numbers.find(first)
// console.log(firstNumber)
//FindIndex - find the index of the first item that matches.
// function firstIndex(num){
//   return num>50;

// }
// const newIndex=numbers.findIndex(firstIndex)
// console.log(newIndex)

import emojipedia from "./emojipedia";

function meaning(entry){
  return entry.meaning.substring(0,100);
}
const newEmojipedia=emojipedia.map(meaning)
console.log(newEmojipedia)

