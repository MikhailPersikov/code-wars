//My solution: 
function solution(number){
  if(Math.sign(number) == 1) {
    let count = 0;
    const arr = [];
  
    for (let i = 0; i < number; i++){
      arr.push(i)
    }
  
    arr.shift();
  
    arr.forEach(num => {
      if((num % 3) == 0 || (num % 5) == 0) {
        count += num;
      }
    })
    return count;
  } else return 0
}

//Favorite solution:

// function solution(number){
//   return number < 1 ? 0 : [...new Array(number).keys()].filter(n => n % 3 == 0 || n % 5 == 0).reduce((a, b) => a + b);
// }