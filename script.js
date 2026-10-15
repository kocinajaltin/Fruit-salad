const fruitForm = document.querySelector('#inputSection form')

fruitForm.addEventListener('submit', extractFruit)
// console.log(fruitForm);

function extractFruit(e){
    e.preventDefault()
    console.log(e);
}