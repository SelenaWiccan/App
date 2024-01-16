# App
#App
# Reservation
Pour le fonctionnement de l'application, il est nécessaire de rentrer tout les champs du formulaire avec des données valide ou le texte du tableau risque de ne pas s'afficher. Le bouton effacer sert à effacer toutes les données (mais ne supprime pas dans le tableau) le bouton Valider/Update sert à valider le formulaire il peut également mettre à jour les informations correspondantes. Le bouton Supprimmer supprime la réservation qui correspond. Aucune date précise pour le moment

_CE QUI FONCTIONNE A PEU PRES:_
boutons : 
- Valider /mettre à jour (sert à valider le formulaire et à mettre à jour les données dans le tableau) /retirer cette fonctionnaliter car il n'est pas possible de mettre à jour, l'utilisateur doit supprimer sa réservation\
- Suprimer (sert à supprimer les données dans le tableau et supprime la zone du formulaire /faire en sorte que la première valeur du tableau ainsi que le premier champ du formulaire soit également supprimable\
- + (sert à ajouter des champs de formulaire à volonté) /faire en sorte que le bouton soit bloqué tant que l'utilisateur n'a pas validé le formulaire qui précède\
- Les boutons ainsi que les champs du formulaire se regénèrent à chaque appui sur le bouton + et sont fonctionnels ( ajout , valider , supprimer )
- à chaque validation du formulaire il est possible de voir ce qui a été ajouté dans le tableau dans une ligne qui récapitule les données
- Tout les champs du formulaire doivent être validé sinon la réservation ne sera pas validé et donc non inscrite dans le tableau

_CE ne FONCTIONNE pas ou à rajouter:_
- Les boutons supprimer et + doivent être invisibles ou bloqués au départ et doit appapraitrent ou débloqués après l'appui sur le bouton valider
- Il faut bloquer les dates qui ne sont pas définies et ne laisser cliquable que celles définies ( 13 Aout , autre )
- Bloquer le champs de formulaire pour ne pas que l'utilisateur puisse mettre à jour les données
- Pour supprimer le premier formulaire (peut etre enlever le prmemier champs de réservation de base ( ajouter un bouton réservation qui va créer une zone de formulaire qui pourrait donc être supprimable en théorie)
- Les dates sont rangées par ordres chronologique ( enlever donc le calendrier et le remplacer par un déroulant qui affiche les dates disponibles)

Autre :
- Ajout d'une limite de places disponibles différentes en fonction du jour (laisser le jour affiché si il reste des places mais afficher le nombre de places restantes)
