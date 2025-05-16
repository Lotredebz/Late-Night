const btn = document.querySelector(".burger")
const affichage = document.querySelector("header")
btn.addEventListener("click", function(){
    affichage.classList.toggle("burgeranim")

    console.log(affichage.classList);
})

    