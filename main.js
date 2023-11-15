//changes vav on scroll
window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle
    ('window-scroll', window.scrollY>50)
})

/*TOGGLE NAV*/

const menu=document.querySelector(".nav-menu")
const menubtn=document.querySelector("#open-menu")
const closebtn=document.querySelector("#close-menu")

menubtn.addEventListener('click', () => {
    menu.style.display = "flex";
    closebtn.style.display = "inline-block"
    menubtn.style.display = "none"
})

closebtn.addEventListener('click', () => {
    menu.style.display = "none"
    menubtn.style.display = "inline-block"
    closebtn.style.display="none"
    
})