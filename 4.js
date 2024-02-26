// remove the string white space

const Alphabet='M y name ';

const removeWhiteSpace=(string)=>{
console.log(string);
const array=string.split(' ').join('');
return array;

};

const answer= removeWhiteSpace(Alphabet);
console.log(answer);