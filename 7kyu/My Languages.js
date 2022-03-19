//My solution:

function myLanguages(results) {
    const newObj = {};
    const newResults = [];
    const arr = Object.entries(results);
    arr.forEach(([key, value]) => {
        (newObj[value] = key);
    });
    let newArr = Object.entries(newObj);
    newArr = newArr.reverse();

    newArr.forEach(elem => {
        if(elem[0] >= 60) newResults.push(elem[1])
    })
    return newResults
}

//Liked solution:

//1) function myLanguages(results) {
//   return Object.keys(results).filter(r => results[r] > 59).sort((a,b) => results[b] - results[a]);
// }

//2) const myLanguages = results => Object.entries(results)
//   .filter(([name, points]) => points >= 60)
//   .sort(([name1, points1], [name2, points2]) => points2 - points1)
//   .map(([name, points]) => name);