const greeting = (person, name) =>{
   person(name) // person parameter recive a function.
    
}

const greetingHandler = (name) => {
    console.log("Ei Tomi ki gumabe nah.", name)
}

greeting(greetingHandler, 'Peyal') // Pass a function as a argument 


const randomNumbers = [...Array(4)].map(() => Math.floor(Math.random() * 6) + 1);
console.log(randomNumbers);