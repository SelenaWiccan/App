let reservations = 0;
let reservationsData = []; // Tableau

// Fonction pour gérer la sélection des dates dans la liste déroulante
function handleDateSelection(index) {
    const selectedDate = document.getElementsByName(`date_${index}`)[0].value;
    const selectOptions = document.querySelectorAll(`select[name^="date_"] option`);

    selectOptions.forEach(option => {
        if (option.value === selectedDate) {
            option.disabled = true;
            option.hidden = true;
        }
    });
}

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
    for (let i = 0; i < reservationsData.length; i++) {
        if (reservationsData[i]) {
            formDisplayed = true;
            break;
        }
    }

    // affiche bouton ajout
    if (!formDisplayed) {
        const div = document.getElementById("Ajout");
        div.style.display = "block";
    }
}

function validate(event) {
    event.preventDefault();
    var elementAffichage = document.getElementById("affichageTexte");

    const plus = document.getElementById("plus");
    plus.style.display = "block";

    plus.addEventListener('click', function() {
        plus.style.display = "none";
    });

    for (let i = 0; i < reservations; i++) {
        const telephone = document.getElementsByName(`telephone_${i}`)[0].value;
        const prenom = document.getElementsByName(`prenom_${i}`)[0].value;
        const nom = document.getElementsByName(`nom_${i}`)[0].value;
        const email = document.getElementsByName(`email_${i}`)[0].value;
        const date = document.getElementsByName(`date_${i}`)[0].value;
        const nombrePlaces = document.getElementsByName(`nombre_${i}`)[0].value;

        // Vérifier si une date a été sélectionnée
        if (date === "rien") {
            alert("Vous n'avez pas sélectionné de date.");
            plus.style.display = "none";
            return;
        } else if (date === date.value){
            alert("Envoi du formulaire avec les réservations:");
            plus.style.display = "block";
        }

        // Vérifier
        if (date && nombrePlaces && email && nom && prenom && telephone) {
            reservationsData.push({ date, nombrePlaces, email, nom, prenom, telephone });
        } else {
            alert("Sélectionnez une date et indiquez le nombre de places.");
            return;
        }
    }


    afficherReservations();
}


function ajouter() {
    var champsSupplementaires = document.getElementById("champsSupplementaires");

    const outputElement = document.getElementById("reservationsOutput");
    outputElement.innerHTML = "";

    afficherReservations();

    var nouveauChamp = document.createElement("div");
    nouveauChamp.setAttribute("id", `reservationDiv_${reservations}`);

    nouveauChamp.innerHTML = `
       <br /> <input type="text" placeholder="Nom" style="align-content: center" name="nom_${reservations}" required> <br />
        <input type="text" placeholder="Prénom" name="prenom_${reservations}" required> <br />
        <input type="tel" placeholder="Téléphone" name="telephone_${reservations}" required> <br />
        <input type="email" placeholder="e-mail" name="email_${reservations}" required> <br />
        <input type="number" placeholder="Nombre de place" name="nombre_${reservations}" required> <br />
          <select name="date_${reservations}" onchange="handleDateSelection(${reservations})" required> <br />
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
        <button type="submit" id="btn_${reservations}" name="btn_${reservations}" onclick="effacer(${reservations})" style="color: aqua; background: black; font-size: large;" > Valider </button>
        <input type="reset" id="reset_${reservations}" name="reset${reservations}" style="color: aqua; background: black; font-size: large;"> <br>
        <button type="button" id="Supprimer" onclick="supprimer(${reservations})"> Supprimer </button> <br />
        
    `;

    // Vérifier si la date est déjà sélectionnée dans un formulaire existant et affiché
    const selectedDates = document.querySelectorAll('select[name^="date_"] option:checked');
    const datesArray = Array.from(selectedDates).map(option => option.value);

    const selectElement = nouveauChamp.querySelector('select[name^="date_"]');
    const options = selectElement.querySelectorAll('option');

    options.forEach(option => {
        if (datesArray.includes(option.value)) {
            option.disabled = true;
            option.hidden = true;
        }
    });

    champsSupplementaires.appendChild(nouveauChamp);
    reservations++;
    const div = document.getElementById("Ajout");
    div.style.display = "none";
}

function effacer(index){
    const valide = document.getElementById(`btn_${index}`);
    const efface = document.getElementById(`reset_${index}`);
    valide.style.display = "none";
    efface.style.display = "none";
}




function add() {
    const div = document.getElementById("Ajout");

    // formulaire est affiché
    let formDisplayed = false;
    for (let i = 0; i < reservationsData.length; i++) {
        if (reservationsData[i]) {
            formDisplayed = true;
            div.style.display = "none";
            break;
        }
    }
}


function afficherReservations() {
    const outputElement = document.getElementById("reservationsOutput");

    // Effacer le contenu précédent
    outputElement.innerHTML = "";

    // Afficher chaque réservation
    reservationsData.forEach((reservation, index) => {
        const reservationText = `Reservation ${index + 1}: Date - ${reservation.date}, Places - ${reservation.nombrePlaces}, Pour - ${reservation.nom}, - ${reservation.prenom}, - mail : ${reservation.email}, - ${reservation.telephone}`;
        const reservationItem = document.createElement("p");
        reservationItem.textContent = reservationText;
        reservationItem.setAttribute("name", `reservation_${index}`);
        outputElement.appendChild(reservationItem);
    });

    // Vider le tableau après affichage (cause de doublons)
    reservationsData = [];
}

