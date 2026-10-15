const fruitForm = document.querySelector('#inputSection form')
const fruitList = document.querySelector('#fruitSection ul')
fruitForm.addEventListener('submit', extractFruit)
// console.log(fruitForm);

function extractFruit(e){
    e.preventDefault()
    addFruit(e.target.fruitInput.value);
    e.target.fruitInput.value = ""
}

function addFruit(fruit) {
    const li = document.createElement('li')
    if (/^[a-zA-Z]+$/.test(fruit)) {
        li.textContent = fruit
        li.addEventListener('click', removeClickFruit)
        fruitList.appendChild(li)

    }
    
}

function removeClickFruit(e) {
    e.target.remove()
} 