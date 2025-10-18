
 
const stopWatch = () =>{
    let counter = 0;
    return function(){
        counter++; 
        return counter
    }
}
console.log(stopWatch())



// ----------Ki bojoni sona -------


const str = 'Kitchen';

let count = 0;

for(i = 0; i< str.length; i++){
    count++ 
}
// console.log(count)