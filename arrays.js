var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(arr, el) {
  arr.unshift(el);
  return arr;
}

function destructivelyAddElementToBeginningOfArray(arr, el) {
  var newArray = arr.unshift(el);
  return newArray;
}