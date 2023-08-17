//reverse the words in the string
//In the string, there are words that must be reversed. The interdependant characters will not be reversed meaning that each block will be distinguished by a space before and after. Before and after is a space. reverse this order
//function digitize(n){
  //return String(n).split('').map(Number).reverse()
//}
//write the function to reverse the string 
function reverse(string){
  return string.split(' ').reverse().join(' ');  
}

