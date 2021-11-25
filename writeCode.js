const addToZero = arr => arr.reduce((a,c,i) => arr.includes(-c) && arr.indexOf(-c) != i?true:a, false);
// the runtime of addToZero is O(n^2), reduce passes over the array, the nesting of array.includes and the array.indexOf are both O(n) so both of them are exponetial
// the space complexity of addToZero is O(n), as the length grows the memory required to store will expand linearly

const hasUniqueChars = str => str.split('').reduce ((a,c,i,arr) => arr.indexOf(c) === arr.lastIndexOf(c)?a: false, true);
// the time complexity of hasUniqueChars is O(n^2). Splitting the array using reduce is O(n). array.lastIndexOf and array.indexOf are likely O(n) but having them nested in the reduce also makes them exponetial.

const isPanagram = str => {
    const letters = new Set()
    for (let i=0; i < str.length; i++) {
        if (str[i].toLowerCase().charCodeAt(0) >= 97 && str[i].toLowerCase().charCodeAt(0) <= 122) {
            letters.add(str[i].toLowerCase())
            if (letters.size =26){
            return true;
        }       
    }
    } 
    return false;
}

// the time complexity of isPanagram is O(n) all the functions should be O(1) so the the overall function should not be exponetial
//the space complexity of isPanagram is O(n), as the length of the string increases, the memory required to store it will increase in a linear manner.

const findLongestWord = arr => arr.map(c=c.length).reduce((a,c) =>Math.max(a,c));
//the time complexity of findLongestWord is O(n), it makes a single pass over the array to determine length and another pass over to reduce the array to its largest length
//the space complexity of findLongestWord is O(n), as the length of the array growsa the memory required to store it will increase in a linear manner.