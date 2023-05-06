function noBoringZeros(n) {
  while(n%10==0 && n!=0){n/=10;} //while number divided by 10 has no remainder and number is not zero pass the function 

  // keep dividing n by 10? 
  return n;
}

//get rid of zeros completely 
// no edge cases
// no insig figs
// exactly 

// another solution
function noBoringZeros(n) {
  return +`${n}`.replace(/0*$/, "");
}
//return string number and replace the string number into an integer, replace zeros with nothing at all 
//*$ is to transform string into a number