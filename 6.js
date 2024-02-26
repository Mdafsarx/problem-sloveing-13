// Check for Prime Number: How would you write a function to check if a given number is prime?

const number=6;

if(number<=1){return}

for(let i=2;i<number;i++){

    if(number%i===0){
        console.log('not prime number')
        
        return
    }
}
    
if(number){
    console.log('prime number');
}
