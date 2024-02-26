const array=[1,2,3,4,5];
array.length=0;
// console.log(array)

const array2=[1,2,3,4,5,6,7,8,9.10];
array2.splice(0,array2.length);
console.log(array2);


const array3=[1,2,3,4,5,6,7,8,9,10];
const empty=array3.filter((c)=>{c=''});
console.log(empty);

const array4=[1,2,3,4,5,6,7,8,9];
array4.