//My solution:

function sortByBit(arr) {
  
  function numberOfBits(num){

    let bits = num.toString(2);
    let arr = bits.split('');
    let count = 0;

    for (let i=0; i<arr.length;i++){
      if(arr[i] == '1'){
        count++;
      }
    } return count;
  }
  return arr.sort((a,b)=> {
    if(numberOfBits(a) == numberOfBits(b)) {
      return a-b
    } else {
      return numberOfBits(a)-numberOfBits(b)
    }
  })
}

//Favorite solution:

// function sortByBit(arr) {
//   arr.sort( (a,b) => a.toString(2).split`1`.length - b.toString(2).split`1`.length || a - b);
// }
