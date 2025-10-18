// Lexical Scoping 
 
const stopWatch = () =>{
    let counter = 0;
    return function(){
        counter++; 
        return counter
    }
}
const watch = stopWatch();// Watc is a function
// console.log(watch()) // Output will be 1
// console.log(watch()) // Output will be 2
// console.log(watch()) // Output will be 3
// console.log(watch()) // Output will be 4
// console.log(watch()) // Output will be 5



// ----------Ki bojoni sona -------


const str = 'Kitchen';

let count = 0;

for(i = 0; i< str.length; i++){
    count++ 
}
// console.log(count)