const API = 'https://www.themealdb.com/api/json/v1/1/filter.php?c='
const menu = [

]

const menuEL = document.getElementById('menu')

menuEL.innerHTML = menu.map(m => {
    return`
            <div>
            <img src="../img/${m.img}" alt="">
            <h4>${m.name}</h4>
            </div>
            `

}).join('')

function getMeals(category = "Starter"){
    fetch(API + category)
       .then(response => response.json())
       .then(foods =>{
        console.log(foods);
       })
}

getMeals()