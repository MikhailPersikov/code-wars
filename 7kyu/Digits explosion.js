// My solution:

function explode(s) {
    let newS = [];
    s = s.split('')
    s.forEach(el => {
        for(let i = 0; i < el; i++){
           newS.push(el)
       }
    });
    newS = newS.join('')
    return newS
}

//Liked solution:

// 1) const explode = s => s.replace(/\d/g, d => d.repeat(d));

// 2) function explode(s) {
//     return s.split("").map((e) => e.repeat(+e)).join("");
// }