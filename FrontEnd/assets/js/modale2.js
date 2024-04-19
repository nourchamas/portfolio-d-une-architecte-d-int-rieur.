
   /*  // Fonction pour fermer la première modale
    function fermerPremiereModale() {
        modale1.style.display = 'none'; // Cache la modale
    }

    // Événement de clic sur la croix de fermeture
    modale2.addEventListener("click", function() {
        closeModale();
    });
addphoto.addEventListener("click",function(){
fermermodale1();
openModale();


})





    // Événement de clic en dehors de la modale pour la fermer
    window.addEventListener("click", function(event) {
        if (event.target === modale2) {
            closeModale();
        }
    });

    // Sélectionnez le formulaire d'ajout de projet
    const form = document.querySelector("#addProjectForm");

    // Événement de soumission du formulaire d'ajout de projet
    form.addEventListener("submit", function(event) {

        event.preventDefault(); // Empêchez le formulaire de se soumettre normalement

        // Récupérez les données du formulaire
        const title = form.querySelector("#title").value;
        const imageUrl = form.querySelector("#imageUrl").value;

        // Envoyez les données au backend pour ajouter un nouveau projet
        fetch("http://localhost:5678/api/works", {

            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ title: title, imageUrl: imageUrl })
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Erreur lors de l\'ajout du projet');
                }
                return response.json();
            })
            .then(newProject => {

                // Ajoutez le nouveau projet à la galerie
                addProjectToGallery(newProject);
                // Fermez la modale après l'ajout du projet
                closeModale();
            })

            .catch(error => {
                console.error('Erreur lors de l\'ajout du projet:', error);
            });
    });



*/ 



document.addEventListener('DOMContentLoaded', function() {
    const modale2 = document.getElementById('modale2');
    const boutonFermer = modale2.querySelector('.close');
    const ajouterPhotoBtn = document.getElementById('ajouterPhotoBtn');

    // Fonction pour ouvrir la modale
    function ouvrirModale() {
        modale2.style.display = 'block';
    }

    // Fonction pour fermer la modale
    function fermerModale() {
        modale2.style.display = 'none';
    }

    // Événement de clic sur le bouton de fermeture
    boutonFermer.addEventListener('click', fermerModale);

    // Événement de clic sur le bouton "Ajouter une photo"
    ajouterPhotoBtn.addEventListener('click', function() {
        fermerModale1();
        ouvrirModale();
    });

    // Événement de clic en dehors de la modale pour la fermer
    window.addEventListener('click', function(event) {
        if (event.target === modale2) {
            fermerModale();
        }
    });

    // Sélectionnez le formulaire d'ajout de projet
    const form = document.querySelector("#addProjectForm");

    // Événement de soumission du formulaire d'ajout de projet
    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Empêchez le formulaire de se soumettre normalement
        const title = form.querySelector("#title").value;
        const imageUrl = form.querySelector("#imageUrl").value;

        fetch("http://localhost:5678/api/works", {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ title: title, imageUrl: imageUrl })
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Erreur lors de l\'ajout du projet');
            }
            return response.json();
        })
        .then(newProject => {
            // Ajoutez le nouveau projet à la galerie
            addProjectToGallery(newProject);
            // Fermez la modale après l'ajout du projet
            fermerModale();
        })
        .catch(error => {
            console.error('Erreur lors de l\'ajout du projet:', error);
        });
    });
});