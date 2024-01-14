let reservations = 0;

function validate(event) {
    event.preventDefault();
    var elementAffichage = document.getElementById("affichageTexte");
    alert("Envoi du formulaire avec les réservations:");
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
        alert("Veuillez sélectionner une date et indiquer le nombre de places.");
    }
}

function ajouter() {
    var champsSupplementaires = document.getElementById("champsSupplementaires");
    var nouveauChamp = document.createElement("div");

    nouveauChamp.innerHTML = `
        <input type="text" placeholder="Nom" style="align-content: center" name="nom_${reservations}"> <br />
        <input type="text" placeholder="Prénom" name="prenom_${reservations}"> <br />
        <input type="tel" placeholder="Téléphone" name="telephone_${reservations}"> <br />
        <input type="email" placeholder="e-mail" name="email_${reservations}"> <br />
        <input type="number" placeholder="Nombre de place" name="nombre_${reservations}"> <br />
        <input type="date" placeholder="Date" name="date_${reservations}"> <br />
        <button type="submit" id="btn" name="btn_${reservations}"> Valider </button>
        <input type="reset" id="reset" name="reset${reservations}"> <br>
    `;

    champsSupplementaires.appendChild(nouveauChamp);

    reservations++; // Incrémentation
}


function afficherReservations() {
    const outputElement = document.getElementById("reservationsOutput");

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
        outputElement.appendChild(reservationItem);
    }
}

