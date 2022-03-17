function isIsogram(str) {
    let answer;
    str =  str.toLowerCase().split('').sort().sort((a,b)=>{
        if(a === b) answer = true;
    })
    return !answer
}