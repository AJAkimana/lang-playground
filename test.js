console.log('Let start');
const isAnagram = (s, t) => [...s].sort().join('') === [...t].sort().join('');

console.log(isAnagram('code', 'doce')); // true
// console.log( isAnagram('anagram', 'xxx') )     // false
// console.log(sum(23));

var isValid = function(s) {
    var stack = []
    var pairs = {
        '(':')',
        '{':'}',
        '[':']'
    }
    for (var c of s){
        if(pairs[c]){
            stack.push(c)
        }else if(c === ')' || c === '}' || c === ']'){
            if(pairs[stack.pop()] !== c){
                return false
            }
        }
    }
    return stack.length === 0
};

let s = readline();

if(isValid(s)) console.log("valid");
else console.log("invalid");
