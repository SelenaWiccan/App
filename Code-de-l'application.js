let reservations = 0;

function supprimer(index) {
    var champsSupplementaires = document.getElementById("champsSupplementaires");
    var reservationToDelete = document.getElementById(`reservationDiv_${index}`);
    var reservationTextToDelete = document.getElementsByName(`reservation_${index}`)[0];
    champsSupplementaires.removeChild(reservationToDelete);

    if (reservationTextToDelete) {
        var outputElement = document.getElementById("reservationsOutput");
        outputElement.removeChild(reservationTextToDelete);
    }

    // Vérifier si plus aucun formulaire n'est affiché
    let formDisplayed = false;
    for (let i = 0; i < reservations; i++) {
        const reservationDiv = document.getElementById(`reservationDiv_${i}`);
        if (reservationDiv) {
            formDisplayed = true;
            break; // Sortir de la boucle dès qu'un formulaire est trouvé
        }
    }

    // Réafficher le bouton Ajout si aucun formulaire n'est affiché (marche pas)
    if (!formDisplayed) {
        const div = document.getElementById("Ajout");
        div.style.display = "block";
    }
}


function validate(event) {
    event.preventDefault();
    var elementAffichage = document.getElementById("affichageTexte");
    alert("Envoi du formulaire avec les réservations:");
    const plus = document.getElementById("plus");
    plus.style.display = "block"; // Afficher le bouton

    plus.addEventListener('click', function() {
        plus.style.display = "none"; // Cacher le bouton lorsqu'il est cliqué
    });

    afficherReservations();
    const telephone = document.getElementsByName(`telephone_${reservations}`)[0].value;
    const prenom = document.getElementsByName(`prenom_${reservations}`)[0].value;
    const nom = document.getElementsByName(`nom_${reservations}`)[0].value;
    const email = document.getElementsByName(`email_${reservations}`)[0].value;
    const date = document.getElementsByName(`date_${reservations}`)[0].value;
    const nombrePlaces = document.getElementsByName(`nombre_${reservations}`)[0].value;
    if (date && nombrePlaces && email && nom && prenom && telephone) {
        reservations++;
        elementAffichage.innerHTML = ("Reservation ajoutée:");
        afficherReservations();
    } else {
        alert("sélectionne une date et indiquer le nombre de places.");
    }
}


function ajouter() {
    var champsSupplementaires = document.getElementById("champsSupplementaires");
    var nouveauChamp = document.createElement("div");
    nouveauChamp.setAttribute("id", `reservationDiv_${reservations}`);

    nouveauChamp.innerHTML = `
       <br /> <input type="text" placeholder="Nom" style="align-content: center" name="nom_${reservations}" required> <br />
        <input type="text" placeholder="Prénom" name="prenom_${reservations}" required> <br />
        <input type="tel" placeholder="Téléphone" name="telephone_${reservations}" required> <br />
        <input type="email" placeholder="e-mail" name="email_${reservations}" required> <br />
        <input type="number" placeholder="Nombre de place" name="nombre_${reservations}" required> <br />
          <select name="date_0" required> <br />
            <option value="rien" selected="true" >Sélectionnez votre date</option>
            <optgroup label="Dates en 2024"></optgroup>
            <option value="13Août">13 Août</option>
            <option value="31Août">31 Août</option>
            <option value="9Septembre">9 Septembre</option>
            <optgroup label="Dates en 2025"></optgroup>
            <option value="10Janvier">10 Janvier</option>
            <option value="15Février">15 Février</option>
            <option value="5Août">5 Août</option>
        </select> <br />
        <button type="submit" id="btn" name="btn_${reservations}" > Valider </button>
        <input type="reset" id="reset" name="reset${reservations}"> <br>
        <button type="button" id="Supprimer" onclick="supprimer(${reservations})"> Supprimer </button> <br />
        
    `;

    champsSupplementaires.appendChild(nouveauChamp);

    reservations++; // Incrémentation
}

function add() {
    const div = document.getElementById("Ajout");

    // Vérifier si au moins un formulaire est affiché
    let formDisplayed = false;
    for (let i = 0; i < reservations; i++) {
        const reservationDiv = document.getElementById(`reservationDiv_${i}`);

        if (reservationDiv) {
            formDisplayed = true;
            div.style.display = "none";
        }
    }
}





function afficherReservations() {
    const outputElement = document.getElementById("reservationsOutput");

    // Effacer le contenu précédent
    outputElement.innerHTML = "";

    for (let i = 0; i < reservations; i++) {
        const telephone = document.getElementsByName(`telephone_${i}`)[0].value;
        const prenom = document.getElementsByName(`prenom_${i}`)[0].value;
        const nom = document.getElementsByName(`nom_${i}`)[0].value;
        const date = document.getElementsByName(`date_${i}`)[0].value;
        const nombrePlaces = document.getElementsByName(`nombre_${i}`)[0].value;
        const email = document.getElementsByName(`email_${i}`)[0].value;

        const reservationText = `Reservation ${i + 1}: Date - ${date}, Places - ${nombrePlaces}, Pour - ${nom}, - ${prenom}, - mail : ${email}, - ${telephone}`;
        const reservationItem = document.createElement("p");
        reservationItem.textContent = reservationText;
        reservationItem.setAttribute("name", `reservation_${i}`);
        outputElement.appendChild(reservationItem); // Ajouter chaque réservation à l'élément de sortie
    }
}