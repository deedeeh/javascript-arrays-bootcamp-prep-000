var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(arr, el) {
  var newArray = [el, ...arr];
  return newArray;
}

function destructivelyAddElementToBeginningOfArray(arr, el) {
  arr.unshift(el);
  return arr;
}

function addElementToEndOfArray(arr, el) {
  var newArray = [...arr, el];
  return newArray;
}

function destructivelyAddElementToEndOfArray(arr, el) {
  arr.push(el);
  return arr;
}