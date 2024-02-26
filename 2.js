// Sum of Array Elements: How would you write a function to calculate the sum of all elements in an array?

const array=[10,20,30,40,50,60,70,80,90,100];

function sum(arr){
const total=arr.reduce((p,c)=>{return p+c},0)
return total;
};
console.log(sum(array))


