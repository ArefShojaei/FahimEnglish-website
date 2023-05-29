const hamberBtn = document.querySelector(".navbar__hamber-icon")
const closeBtn = document.querySelector(".close-icon")
const sidebar = document.querySelector("nav")


hamberBtn.addEventListener("click",()=>{
    sidebar.classList.add("active")
})

closeBtn.addEventListener("click",() =>{
    sidebar.classList.remove("active")
})