// ^ SECTION 5

let meals = document.querySelectorAll(`.sec5title`)
let mealTitle = document.querySelector(`.mealTitle`)
let starter = document.querySelector(`.starters`)
let breakfast = document.querySelector(`.Breakfast`)
let lunch = document.querySelector(`.Lunch`)
let dinner = document.querySelector(`.dinner`)
let menuContent = document.querySelectorAll(`.menuContent`)


meals.forEach(element => {
    element.addEventListener(`click`, () => {
        mealTitle.textContent = element.textContent

        if (mealTitle.textContent == `Starters`) {
            menuContent[0].classList.remove(`starters`)
            menuContent[1].classList.add(`Breakfast`)
            menuContent[2].classList.add(`Lunch`)
            menuContent[3].classList.add(`dinner`)
        }
        if (mealTitle.textContent == `Breakfast`) {
            menuContent[1].classList.remove(`Breakfast`)
            menuContent[0].classList.add(`starters`)
            menuContent[2].classList.add(`Lunch`)
            menuContent[3].classList.add(`dinner`)
        }
        if (mealTitle.textContent == `Lunch`) {
            menuContent[2].classList.remove(`Lunch`)
            menuContent[0].classList.add(`starters`)
            menuContent[1].classList.add(`Breakfast`)
            menuContent[3].classList.add(`dinner`)
        }
        if (mealTitle.textContent == `dinner`) {
            menuContent[3].classList.remove(`dinner`)
            menuContent[0].classList.add(`starters`)
            menuContent[1].classList.add(`Breakfast`)
            menuContent[2].classList.add(`Lunch`)
        }
    })
});




