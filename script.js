const Body = document.getElementById("Body")
const Moon = document.getElementById("Moon")
const MoonIcon = document.getElementById("MoonIcon")

Moon.addEventListener("click", ()=>{
    Body.classList.toggle("dark")
    MoonIcon.classList.toggle("fa-sun-cloud")
   
})