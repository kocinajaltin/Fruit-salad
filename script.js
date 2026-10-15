const fruitForm = document.querySelector('#inputSection form')
const fruitList = document.querySelector('#fruitSection ul')
const fruitNutrition = document.querySelector('#nutritionSection p');
fruitForm.addEventListener('submit', extractFruit)
// console.log(fruitForm);

let cal = 0

function extractFruit(e){
    e.preventDefault()
    fetchFruitData(e.target.fruitInput.value);
    e.target.fruitInput.value = ""
}

function addFruit(fruit) {
    const li = document.createElement('li')
    if (/^[a-zA-Z]+$/.test(fruit)) {
        li.textContent = fruit.name
        li.addEventListener('click', removeClickFruit)
        fruitList.appendChild(li)

        cal =+ fruit.nutritions.calories
        fruitNutrition.textContent = cal

    }
    
}

function removeClickFruit(e) {
    e.target.remove()
} 

function fetchFruitData(data) {
    fetch(`https://fruit-api-5v0j.onrender.com/fruits/${fruit}`)
        .then(resp => resp.json())
        .then(data => addFruit(data))
        .catch(e => console.log(e))
}