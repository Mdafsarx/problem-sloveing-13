// Reverse a String: Can you write a function to reverse a given string?

let alphabet='abcdefghijklmnopqrstuvwxyz';
let reverseString=[]
function string(string){
const array=string.split('');
array.forEach(arr => {
    reverseString.unshift(arr);
});
const answer=reverseString.join('').toString();
alphabet=answer;
return alphabet;
};
string(alphabet)
console.log(alphabet)