# App
#App
# Reservation
Pour le fonctionnement de l'application, il est nécessaire de rentrer tout les champs du formulaire avec des données valide ou le texte du tableau risque de ne pas s'afficher ou de planter l'application. Le bouton effacer sert à effacer toutes les données (mais ne supprime pas dans le tableau) le bouton "Valider" sert à valider le formulaire il peut également mettre à jour les informations correspondantes. Le bouton Supprimmer supprime la réservation qui correspond. Aucune date précise pour le moment

_CE QUI FONCTIONNE:_
****************************************************************************************************************************************************************************
- le bouton "valider" : (sert à valider le formulaire, afficher le bouton pour ajouter un nouveau formulaire).
- le bouton suprimer (sert à supprimer les données dans le tableau et supprime la zone du formulaire /faire en sorte que la première valeur du tableau ainsi que le premier champ du formulaire soit également supprimable\
- le bouton + (sert à ajouter des champs de formulaire à volonté) Si le client valide le bouton, le bouton + s'affiche et si le bouton + est appuyé, alors il  disparait aussitôt jusqu'à ce qu'un nouveau formulaire soit validé
- Les boutons ainsi que les champs du formulaire se regénèrent à chaque appui sur le bouton + et sont fonctionnels ( ajout , valider , supprimer )
 *************************************************************************************************************************************************
- à chaque validation du formulaire il est possible de voir ce qui a été ajouté dans le tableau dans une ligne qui récapitule les données
- Tout les champs du formulaire doivent être validé sinon la réservation ne sera pas validé et donc non inscrite dans le tableau
********************************************************************************************************************
- les champs (nom , prenom, date et telephone) sont des champs requis pour le formulaire { message d'erreur " veuuillez completer ce champ" }
- le champ email demande une email valide
- le bouton effacer efface tout les champs du formailaire validé ou non mais n'efface pas directement dans le tableau
- le champs du nombre de place est requis { "veuillez entrer un nombre" }
- Ré-affiche un bouton pour afficher un formulaire si l'utilisateur supprime tout les formulaires
- Les boutons supprimer et + doivent être invisibles ou bloqués au départ et doit appapraitrent ou débloqués après l'appui sur le bouton valider
******************************************************************************************

_CE ne FONCTIONNE pas:_
**********************************************************************
- Bloquer le champs de formulaire pour ne pas que l'utilisateur puisse mettre à jour les données : solution, faire disparaitre le bouton valider
- Le formulaire se valide même si aucune date n'est selectionnée
******************************************************

DIFFICULTES :
******************************************
Les choses qui me sont difficiles sont les nouvelles notions et les faire fonctionner cela prends beaucoup de temps. Quelques points ne fonctionnent toujours pas dans le code comme listé ci-dessus. Il y a des modifications à faire et des éléments à supprimer
*****************************

QUESTIONS : 
******************
 ?
 *****

