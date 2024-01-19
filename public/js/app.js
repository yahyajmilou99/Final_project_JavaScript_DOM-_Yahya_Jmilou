// ^ NAVBAR

let navBars = document.querySelector(`.navBars`)

let navTitle = document.querySelector(`.navTitle`)

let navBtn = document.querySelector(`.navBtn`)

let navResp = document.querySelector(`.navResp`)


// & modal



let formNav = document.querySelector(`.formNav`)

let signup = document.querySelector(`.signup`)

let login = document.querySelector(`.login`)

let signUpcontent = document.querySelector(`.signUpcontent`)

let logincontent = document.querySelector(`.logincontent`)

let exit = document.querySelector(`.exit`)

navBtn.addEventListener(`click`,()=>{
    formNav.style.display = `flex`   
})

exit.addEventListener(`click`,()=>{
    formNav.style.display = `none`
    document.body.style.overflow=`auto`
})

signup.addEventListener(`click`,()=>{
    signUpcontent.style.display='flex'
    logincontent.style.display='none'
    document.body.style.overflow=`hidden`
})
login.addEventListener(`click`,()=>{
    signUpcontent.style.display='none'
    logincontent.style.display='flex'
    document.body.style.overflow=`hidden`
})



// ~ form

let formBtn = document.querySelector(`.navBtn`)

formBtn.addEventListener(`click`,()=>{

})



// ^ Video

let showVid = document.querySelectorAll(`.videoModal`)

let vidContainer = document.querySelector(`.videoContainer`)

let closeModal = document.querySelector(`.close`)


showVid.forEach(element => {
    element.addEventListener("click",()=>{
    vidContainer.classList.add(`showVid`)
    document.body.style.overflow=`hidden`
})
});



closeModal.addEventListener(`click`,()=>{
    vidContainer.classList.remove(`showVid`)
    document.body.style.overflow=`auto`
})

vidContainer.addEventListener(`click`,()=>{
    vidContainer.classList.remove(`showVid`)
    document.body.style.overflow=`auto`
})








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
            menuContent[1].style.display=`flex`
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

