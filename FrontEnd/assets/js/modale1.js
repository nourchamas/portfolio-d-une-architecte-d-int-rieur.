












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

    // Sélection de la galerie dans la modale
    const galerie = premiereModale.querySelector('.gallery');

    // Fonction pour afficher les images dans la galerie photo
    function afficherImagesDansGalerie(images) {
        // Vide la galerie actuelle
        galerie.innerHTML = '';

        // Ajoute chaque image à la galerie
        images.forEach(imageUrl => {
            const img = document.createElement('img');
            img.src = imageUrl;
            galerie.appendChild(img);
        });
    }

    // Simuler des images de galerie (remplacez ceci par votre logique de récupération des images)
    const imagesGalerie = [
        '/FrontEnd/assets/images/abajour-tahina.png',
        '/FrontEnd/assets/images/appartement-paris-v.png',
        '/FrontEnd/assets/images/appartement-paris-x.png',
        '/FrontEnd/assets/images/appartement-paris-xviii.png',
        '/FrontEnd/assets/images/bar-lullaby-paris.png',
        '/FrontEnd/assets/images/hotel-first-arte-new-delhi.png',
        '/FrontEnd/assets/images/la-balisiere.png',
        '/FrontEnd/assets/images/le-coteau-cassis.png',
        '/FrontEnd/assets/images/restaurant-sushisen-londres.png',
        '/FrontEnd/assets/images/structures-thermopolis.png',
        '/FrontEnd/assets/images/villa-ferneze.png'
    ];

    // Afficher les images dans la galerie
    afficherImagesDansGalerie(imagesGalerie);
});