// Arrow Function e Arguments Kaj kore nah. 
const sum = (a, b, c)=>{
    // console.log(arguments); // This is not working
    const result = a + b + c;
    return result;
}
const total = sum(45, 89, 12, 45, 98, 56);
console.log(total)

// Regular function e kaj kore 

function sum1(a, b, c){
    console.log(arguments)
    const args = [...arguments] // Convert into an arry
    console.log(args)
    const result = a + b + c;
    return result
}

console.log(sum1.length) // Return how many perameter are declared.
const totalValue = sum1(45, 89, 12, 45, 98, 56)