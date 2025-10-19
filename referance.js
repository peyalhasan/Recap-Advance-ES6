// Pass by value
/* Work in Premetive Data type. Like number, boolean , string */
function changeNumber(num){
    num = num + 10;
    console.log('Inside Function',num) // Changed but copyed data. 
}
const myNumber = 10;
changeNumber(myNumber);
console.log('Outside Function', myNumber); // Unchanged original

// Pass by  Referance 
// In non premetive data type it will happen. Like object, array

function changeName(person){
    person.name = 'Rahim';
    console.log('Inside Function: ', person.name) // Changed original
}

const person = {name: 'Karim'};
changeName(person);
console.log('Outside Function', person.name) // Already Changed