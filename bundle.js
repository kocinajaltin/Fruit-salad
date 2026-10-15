(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
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
    getImage(e.target.fruitInput.value)
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

// function fetchFruitData(fruit) {
//     fetch(`https://fruit-api-5v0j.onrender.com/fruits/${fruit}`)
//         .then(processResponse)
//         .then(data => addFruit(data))
//         .catch(e => console.log(e))
// }

async function fetchFruitData(fruit) {
    try {
        const resp = await fetch(`https://fruit-api-5v0j.onrender.com/fruits/${fruit}`);

        if (resp.ok) {
            const data = await resp.json();
            addFruit(data);
        } else {
            throw "Error: http status code = " + resp.status;
        }
    } catch (e) {
        console.log(e);
    }
}


function processResponse(resp) {
    if (resp.ok) {

        return resp.json()
    } else {
        throw "Error: http status code = " + resp.status
    }
}

// function getImage (fruit) {
//     const API_KEY = '58058279-8aaee680b1355d761deb47d86';
//     let URL = "https://pixabay.com/api/?key="+API_KEY+"&q="+encodeURIComponent(fruit);
//     fetch(URL)
//         .then(processResponse)
//         .then(data => extractUrl(data))
//         .catch(e => console.log(e))

    
// }

async function getImage(fruit) {
    try {
        const API_KEY = "58058279-8aaee680b1355d761deb47d86";
//     let URL = "https://pixabay.com/api/?key="+API_KEY+"&q="+encodeURIComponent(fruit)
        const resp = await fetch(`https://pixabay.com/api/?key=${API_KEY}&q=${fruit}`);

        if (resp.ok) {
            const data = await resp.json();
            extractFruitImg(data);
        } else {
            throw "Error: http status code = " + resp.status;
        }
    } catch (e) {
        console.log(e);
    }
}


function extractFruitImg (data) {
    newimgurl = (data.hits[0].previewURL)
    fruitImg.src = (newimgurl)
}




},{}]},{},[1]);
