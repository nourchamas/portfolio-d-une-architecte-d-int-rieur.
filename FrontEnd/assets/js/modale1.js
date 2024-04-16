document.addEventListener('DOMContentLoaded', function() {
    // Sélection de la première modale
    const premiereModale = document.getElementById('modale1');

    // Sélection du bouton pour ouvrir la première modale
    const ouvrirPremiereModaleBtn = document.getElementById('modifierBtn');

    // Sélection du bouton pour fermer la première modale
    const fermerPremiereModaleBtn = document.querySelector('.js-modale-close');

    // Fonction pour ouvrir la première modale
    function ouvrirPremiereModale() {
        premiereModale.style.display = 'flex'; // Affiche la première modale
    }

    // Fonction pour fermer la première modale
    function fermerPremiereModale() {
        premiereModale.style.display = 'none'; // Masque la première modale
    }

    // Événement pour ouvrir la première modale lorsque le bouton est cliqué
    if (ouvrirPremiereModaleBtn) {
        ouvrirPremiereModaleBtn.addEventListener('click', ouvrirPremiereModale);
    }

    // Événement pour fermer la première modale lorsque le bouton de fermeture est cliqué
    if (fermerPremiereModaleBtn) {
        fermerPremiereModaleBtn.addEventListener('click', fermerPremiereModale);
    }
});