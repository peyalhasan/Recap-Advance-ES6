
function changeNumber(num){
    num = num + 10;
    console.log('Inside Function',num)
}
const myNumber = 10;
changeNumber(myNumber);
console.log('Outside Function', myNumber);
