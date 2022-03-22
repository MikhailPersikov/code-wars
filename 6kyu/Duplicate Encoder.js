//My solution:

function duplicateEncode(word){
    let newWord = [];
    let a = word.toLowerCase().split('');
    a.forEach(element => {
       let b =  a.filter((el,i)=> element === a[i])
       if(b.length > 1) newWord.push(')')
       else newWord.push('(')
    });
   return newWord.join('');
}

//Favorite solution:

// function duplicateEncode(word){
//     return word
//       .toLowerCase()
//       .split('')
//       .map( function (a, i, w) {
//         return w.indexOf(a) == w.lastIndexOf(a) ? '(' : ')'
//       })
//       .join('');
//   }