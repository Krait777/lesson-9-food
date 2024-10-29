const API = 'https://www.themealdb.com/api/json/v1/1/filter.php?c='




function getMeals(category = "Starter"){
    fetch(API + category)
       .then(response => response.json())
       .then(foods =>{
        console.log(foods);
       })
}

getMeals()