const fruitForm = document.querySelector('#inputSection form')
const fruitList = document.querySelector('#fruitSection ul')
const fruitNutrition = document.querySelector('#nutritionSection p');
const fruitImg = document.querySelector('#imageFruit img');
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
    if (!(/^[a-zA-Z]+$/.test(fruit))) {
        li.textContent = fruit.name
        li.addEventListener('click', removeClickFruit)
        fruitList.appendChild(li)



    }
    cal =+ fruit.nutritions.calories
    fruitNutrition.textContent = cal
    
}

function removeClickFruit(e) {
    e.target.remove()
} 

function fetchFruitData(fruit) {
    fetch(`https://fruit-api-5v0j.onrender.com/fruits/${fruit}`)
        .then(processResponse)
        .then(data => addFruit(data))
        .catch(e => console.log(e))
}

function processResponse(resp) {
    if (resp.ok) {
        return resp.json()
    } else {
        throw "Error: http status code = " + resp.status
    }
}