function disemvowel(str) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    
    return str.split('').filter(element => {
        return !vowels.includes(element.toLowerCase());
    }).join('');
}