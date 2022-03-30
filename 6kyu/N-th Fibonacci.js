//My solution:

function nthFibo(n) {
  let fibo = [0, 1];
  for (let i = 0; i < n; i++){
    fibo.push(fibo[i] + fibo[i + 1])
  }
  return fibo[n - 1]
}

//Liked solution: 

// function nthFibo(n) {
//   return n < 2 ? 0 : n == 2 ? 1 : nthFibo(n-1) + nthFibo(n-2);
// }