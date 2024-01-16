# App
#App
# Reservation
Pour le fonctionnement de l'application, il est nécessaire de rentrer tout les champs du formulaire avec des données valide ou le texte du tableau risque de ne pas s'afficher. Le bouton effacer sert à effacer toutes les données (mais ne supprime pas dans le tableau) le bouton Valider/Update sert à valider le formulaire il peut également mettre à jour les informations correspondantes. Le bouton Supprimmer supprime la réservation qui correspond. Aucune date précise pour le moment

_CE QUI FONCTIONNE A PEU PRES:_
 
- le bouton valider /mettre à jour (sert à valider le formulaire et à mettre à jour les données dans le tableau) /retirer cette fonctionnaliter car il n'est pas possible de mettre à jour, l'utilisateur doit supprimer sa réservation\
- le bouton suprimer (sert à supprimer les données dans le tableau et supprime la zone du formulaire /faire en sorte que la première valeur du tableau ainsi que le premier champ du formulaire soit également supprimable\
- le bouton + (sert à ajouter des champs de formulaire à volonté) /faire en sorte que le bouton soit bloqué tant que l'utilisateur n'a pas validé le formulaire qui précède\
- Les boutons ainsi que les champs du formulaire se regénèrent à chaque appui sur le bouton + et sont fonctionnels ( ajout , valider , supprimer )
- à chaque validation du formulaire il est possible de voir ce qui a été ajouté dans le tableau dans une ligne qui récapitule les données
- Tout les champs du formulaire doivent être validé sinon la réservation ne sera pas validé et donc non inscrite dans le tableau
- les champs (nom , prenom, date et telephone) sont des champs requis pour le formulaire { message d'erreur " veuuillez completer ce champ" }
- le champ email demande une email valide
- le bouton effacer efface tout les champs du formailaire validé ou non mais n'efface pas directement dans le tableau
- le champs du nombre de place est requis { "veuillez entrer un nombre" }  

_CE ne FONCTIONNE pas ou à rajouter:_
- Les boutons supprimer et + doivent être invisibles ou bloqués au départ et doit appapraitrent ou débloqués après l'appui sur le bouton valider
- Il faut bloquer les dates qui ne sont pas définies et ne laisser cliquable que celles définies ( 13 Aout , autre )
- Bloquer le champs de formulaire pour ne pas que l'utilisateur puisse mettre à jour les données
- Pour supprimer le premier formulaire (peut etre enlever le prmemier champs de réservation de base ( ajouter un bouton réservation qui va créer une zone de formulaire qui pourrait donc être supprimable en théorie)
- Les dates sont rangées par ordres chronologique ( enlever donc le calendrier et le remplacer par un déroulant qui affiche les dates disponibles)

Autre (ajout optionel ? ):
- Ajout d'une limite de places disponibles différentes en fonction du jour (laisser le jour affiché si il reste des places mais afficher le nombre de places restantes)
- modification du champ email ( le faire dans un champ de type texte qui ne réagit que si il lit @gmail @outlook @orange.fr sinon l'email est invalide)
- mettre des espaces entre les formulaires
- Rajouter une année pour la selection de date l'heure, type d'événement et l'emplacement
- Affichage en temps réel de la disponibilité des places
- Possibilité d'annuler ou de modifier les réservations sous condition, à déterminer. Autre que le bouton supprimer
- lister les dates et afficher en temps réel le nombre de place restantes ou complets

AUTRES 2 :
Les choses qui me sont difficiles sont les nouvelles notions et les faire fonctionner cela prends beaucoup de temps. Quelques points ne fonctionnent toujours pas dans le code comme listé ci-dessus. Il y a des modifications à faire et des éléments à supprimer

QUESTIONS : 
comment faire la selection de date avec un déroulant ?
comment supprimer le premier champs de formulaire ?

