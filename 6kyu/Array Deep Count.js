//My solution: 

function deepCount(arr) {
    let counter = arr.length;
    arr.forEach((element,index) => {
        if (Array.isArray(element)) counter += deepCount(arr[index])
    } )
    return counter;
}

//Favorite solution:

// function deepCount(a){
//     return a.reduce((s,e)=>s+(Array.isArray(e)?deepCount(e):0),a.length);
//   }