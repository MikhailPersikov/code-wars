//My solution:

const runLengthEncoding = function(str){
  const arr = str.split('')
  const newArr = [];
  let value = 1;
  console.log(arr)
  arr.forEach((_,i) => {
    if (arr[i] !== arr[i + 1]) {
      newArr.push([value, arr[i]]);
      value = 1;
    } else {
      value++;
    }
  })
  return newArr;
}

//Liked solution:

// var runLengthEncoding = function(str){
//   return (str.match(/(.)\1*/g) || []).reduce(function(r, s){
//     return r.push([s.length, s[0]]), r;
//   }, []);
// }
