const btn = document.getElementById(("btn"))
btn.addEventListener(
    'click',
    validate
)
function validate () {
    const div = document.getElementById("centre")
    div.style.display = "none" // fonction pour valider les enregistrements
}



const reset = document.getElementById(("reset"))
reset.addEventListener(
    'click',
    effacer
)
function effacer () {
    const div = document.getElementById("centre")
    div.style.display = "none" // fonction pour effacer tout les enregistrements
}



const ajout = document.getElementById(("Ajout"))
ajout.addEventListener(
    'click',
    ajouter
)
function ajouter () {
    const div = document.getElementById("centre")
    div.style.display = "none" // fonction pour ajouter un ou plusieurs enregistrement
}