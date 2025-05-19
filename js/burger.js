const btn = document.querySelector(".burger")
const body = document.querySelector("body")
const affichage = document.querySelector("header")
btn.addEventListener("click", function(){
    affichage.classList.toggle("burgeranim")
    body.classList.toggle("no__scroll")
    console.log(affichage.classList);
})

    