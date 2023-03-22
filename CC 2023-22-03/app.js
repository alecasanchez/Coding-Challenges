//Write a function that returns a string in which firstname is swapped with last name.

//Example(Input --> Output)

//"john McClane" --> "McClane john"

//p: any special character implementation for string conversion? Will capitalization matter? Numbers??

//R: this is nearly a palindrome program. instead of creating a new string as backwards = forwards, it is simplier than this. switch the order of words. Possible to incorporate patseInt. 

//E: Given a number, reorder this string so that the last numberis the first. Possible using sort and reduce. You are given a stack of playing cards. if the card is red clubs, produce black clubs. Create a program that will produce this: " x percent of y is y percent of x". 

//P: String is the parameter to the function of nameShuffler. nameShuffler runs on parameter str. you will be returning nameShuffler outside of the code body. 
function nameShuffler(str){
  // remember a, b. 
return str.split('').reverse().join('')
};

//here this code is saying in the string that is split by a space, reverse the order of the array and then join them with a ('') `not a comma`.

