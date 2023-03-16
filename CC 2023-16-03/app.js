//This function should test if the factor is a factor of base.

//Return true if it is a factor or false if it is not.

//About factors

//Factors are numbers you can multiply together to get another number.

//
//2 and 3 are factors of 6 because: 2 * 3 = 6
//

//You can find a factor by dividing numbers. If the remainder is 0 then the number is a factor.

//You can use the mod operator (%) in most languages to check for a remainder

//For example 2 is not a factor of 7 because: 7 % 2 = 1

//
//Note: base is a non-negative number, factor is a positive number.
//


//P:  


//P: Parameters (Edge Cases??-- exceptions to the rule) ***** see that base and factor are parameters. true if factor is a factor of base, false otherwise. What if factor is a string? Any special characters like ` ? integers?******


//R: What I am returning. I am returning a boolean expression if factor is a factor of base and false otherwise. 

//E: Examples; 3: Parameters are word and letter. if the letter is in word, return true. otherwise false. Parameters are wheels, and vehicles. if wheels are a number, return the correct vehicle. create a function that returns true if sidedShape has an even number of sides or false if it has an odd number of sides.

//P: Pseusocode

//Test a number (base) whether the other number (factor) is a factor of base, or not.
function test(base, factor){
let result = ''
//if number is divisible by factor, with no remainder, return true.
base < 0;
if (base % factor == 0) result = true; 
else return false;

//for loop needed? no
return result;
//possible nested function to determine what factor is?? or parameter met once defined in body

//else return false
}
console.log(test(4, 2));

//Other Solutions
function checkForFactor (base, factor) {
  return base % factor === 0;
}

const checkForFactor = (base, factor) => base % factor === 0;
