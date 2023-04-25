// "apple ban" --> ["apple 5", "ban 3"]
//"you will win" -->["you 3", "will 4", "win 3"]

// PREP 

//no edge cases
// length of string followed by character count separated by a space
// how many inches tall are you? 56 = fifty six
// how many letters does your name have? 4
//a = 1 b = 2 , what is the total value of your name? 

//first create a function with this 
function addLength(str) {
  return `${str.length}`
};

// you need to find str.length

// add a space 

// add the total to the string

// console.log the final solutions

// Correct solution is 
function addLength(str){
  return str.split(' ').map(function(v){return v+' '+v.length})
}