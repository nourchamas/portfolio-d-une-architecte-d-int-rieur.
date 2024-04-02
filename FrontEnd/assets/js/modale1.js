document.addEventListener('DOMContentLoaded', function() {
    
    // Sélection de la première modale
    const premiereModale = document.querySelector('.modale');
    
    // Sélection du bouton pour ouvrir la première modale
    const ouvrirPremiereModaleBtn = document.querySelector('#ouvrirPremiereModaleBtn');
    
    // Sélection du bouton pour fermer la première modale
    const fermerPremiereModaleBtn = document.querySelector('.js-modale-close');
    
    // Fonction pour ouvrir la première modale
    function ouvrirPremiereModale() {
        premiereModale.style.display = 'block'; // Affiche la modale
    }
    
    // Fonction pour fermer la première modale
    function fermerPremiereModale() {
        premiereModale.style.display = 'none'; // Masque la modale
    }
    
    // Événement pour ouvrir la première modale lorsque le bouton est cliqué
    if (ouvrirPremiereModaleBtn) {
        ouvrirPremiereModaleBtn.addEventListener('click', ouvrirPremiereModale);
    }
    
    // Événement pour fermer la première modale lorsque le bouton de fermeture est cliqué
    if (fermerPremiereModaleBtn) {
        fermerPremiereModaleBtn.addEventListener('click', fermerPremiereModale);
    }
    
    // Sélection du formulaire d'ajout de projet
    const addProjectForm = document.querySelector("#addProjectForm");
    
    // Événement de soumission du formulaire d'ajout de projet
    if (addProjectForm) {
        addProjectForm.addEventListener("submit", function(event) {
            event.preventDefault(); // Empêche le formulaire de se soumettre normalement
            
            // Récupération des données du formulaire
            const title = addProjectForm.querySelector("#title").value;
            const imageUrl = addProjectForm.querySelector("#imageUrl").value;
            
            // Envoi des données au backend pour ajouter un nouveau projet
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
                // Ajout du nouveau projet à la galerie
                addProjectToGallery(newProject);
                // Fermeture de la modale après l'ajout du projet
                fermerPremiereModale();
            })
            .catch(error => {
                console.error('Erreur lors de l\'ajout du projet:', error);
            });
        });
    }
});