// My solution

function numberOfPairs(gloves) {

  let pairs = 0
  const counts = {};
  gloves.forEach(color => {
    
    if (!counts.hasOwnProperty(color))
      counts[color] = 0;

    if (++counts[color] === 2) {
      counts[color] -= 2;
      pairs++;
    }
    
  })

  return pairs;
}

//Favorite solution: 

// function numberOfPairs(gloves)
// {
//   var arr = Array.from(new Set(gloves));
//   return arr.reduce((a,b) => a + Math.floor(gloves.join('').match(new RegExp(b, 'g')).length / 2), 0);
// }