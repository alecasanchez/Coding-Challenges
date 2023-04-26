//Prep

//Parameters are that if something is a float.. return the number again. the number as it is must be returned if it is the only number in the array.

//Reword create a function that adds all numbers in the array together and then produces an end result. Negative numbers will be included in the process of calculating. if there are no numbers at all return a zero. if only one number, return the only one number

//E Just this^

//P 

//refresh yourself with concluding the contents of an array.
//const sum = [].reduce((partialSum, a)=> partialSum + a, 0);
//console.log(sum);
// return the result of array conclusion. Perhaps use a conditional or a ternerary operator 

//refresh ternerary possibly
//correct solution is 
function sum(numbers) {
  return numbers.reduce((a, b) => a + b, 0);
}

// parameters numbers. return the numbers with method reduce (first, second ... add them or reduce to zero)

// REDUCE is the keyword here

// reduce build something on everysingle one. remember for loop.