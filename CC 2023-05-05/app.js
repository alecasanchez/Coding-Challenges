//Create a method that accepts a list and an item, and returns true if the item belongs to the list, otherwise false.
function include(arr, item){
  return arr.indexOf(item) > -1; // index of allong with > -1 checks to see if the item is in the array in general. having an index of -1 means it is outside of the array in the "void"
}
include([1,2,3,4,5], 2)
//P no edge cases
//R method accepts list AND item. returns true if the item belongs to the list otherwise false. First there is a list and the method checks to see if the item is in the list. if so true if no, false ... boolean

