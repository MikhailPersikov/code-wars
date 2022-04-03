//My solution:

function createFunctions(n) {
  const arr = [];

  for (let i = 0; i < n; i++) {
    arr.push(function() {
      return i;
    });
  }

  return arr;
}

//Favotite solution:

// let createFunctions = (n) => Array.from(Array(n), (_, i) => () => i);