//My solution:

function head(array) {
  return array[0];
}
function tail(array) {
  return array.slice(1);
}
function init(array) {
  return array.slice(0, -1);
}
function last(array) {
  return array[array.length-1];
}

//Favorite solution: 

// const head = ([head, ...tail]) => head;
// const tail = ([head, ...tail]) => tail;
// const init = (arr) => arr.slice(0, -1);
// const last = (arr) => arr.slice(-1)[0];