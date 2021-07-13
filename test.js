console.log('Let start');
const isAnagram = (s,t) => ( [...s].sort().join('') === [...t].sort().join(''))

console.log( isAnagram('code', 'doce') )  // true
// console.log( isAnagram('anagram', 'xxx') )     // false
// console.log(sum(23));
