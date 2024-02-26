// Find Maximum Value in an Array: Write a function to find the maximum value in an array.

const array1=[1,2,3,4,5,6,7,8,9,10];

function findMaxByEs6(arr){
const max=Math.max(...arr);
return max;
};

const output=findMaxByEs6(array1);
console.log(output);


const array2=[1,12,93,14,23,42];

const findMax=(arr)=>{

    let max=arr[0];
    let min=arr[0];

    for(let a of arr){
        
        if(a>max){
            max=a;
        }
        if(a<min){min=a};
    };

    return `Max: ${max} , min: ${min}`



};

console.log(findMax(array2))