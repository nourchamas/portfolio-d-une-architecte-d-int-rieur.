




document.addEventListener("DOMContentLoaded", function() {
    
    const modifierBtn = document.querySelector(".js-modale");
    const modale = document.querySelector("#modale");
    const closeButton = document.querySelector(".close");
   

    // Fonction pour ouvrir la modale
    function openModale() {
        modale.style.display = "block";
    }

    // Fonction pour fermer la modale
    function closeModale() {
        modale.style.display = "none";
    }

// Fonction pour fermer la première modale
function fermerPremiereModale() {
    deuxiemeModale.style.display = 'none'; }// Cache la modale
    
    // Événement de clic sur la croix de fermeture
    closeButton.addEventListener("click", function() {
        closeModale();
    });

    // Événement de clic en dehors de la modale pour la fermer
    window.addEventListener("click", function(event) {
        if (event.target === modale) {
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
});