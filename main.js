const info = document.getElementById('btnInfo');
const identify = document.querySelector('.identify');
const show = document.querySelector('.showInfo');

info.addEventListener('click', function () {
  identify.style.display = "none";
  show.style.display = "block";
})

const btnAbout = document.getElementById('btnAbout');
const btnProjets = document.getElementById('btnProjets');
const btnContact = document.getElementById('btnContact');

const about = document.querySelector('.about');
const projets = document.querySelector('.projets');
const contact = document.querySelector('.contact');

btnAbout.addEventListener('click', function () {
  about.style.display = "block";
  projets.style.display = "none";
  contact.style.display = "none";
})

btnProjets.addEventListener('click', function () {
  about.style.display = "none";
  projets.style.display = "block";
  contact.style.display = "none";
})

btnContact.addEventListener('click', function () {
  about.style.display = "none";
  projets.style.display = "none";
  contact.style.display = "block";
})

// PROJETS
const myProjets = [
  {
    id: 1,
    pict: "/assets/picts/SpiritsGamerSite.png",
    picth: "Un site de recherche et d'achat de jeux vidéo",
    web: "https://spirits-gamer.vercel.app/main",
    source: "https://github.com/Matfen2/Spirits-Gamer",
  },
  {
    id: 2,
    pict: "/assets/picts/soulsHeroesSite.png",
    picth: "Un site dédié à la recherche et à l'achat de comics mettant en scène des super-héros.",
    web: "https://souls-heroes.vercel.app/main",
    source: "https://github.com/Matfen2/SoulsHeroesBackend/tree/master",
  }, 
  {
    id: 3,
    pict: "/assets/picts/tlouSite.png",
    picth: "Un site basé sur l'univers de l'une de mes sagas de jeu vidéo préférée.",
    web: "https://the-last-of-us-orcin.vercel.app/main",
    source: "https://github.com/Matfen2/The-Last-Of-Us",
  }
];

document.addEventListener("DOMContentLoaded", function() {
  afficherProjet(myProjets[0]); // Afficher le premier élément du tableau myProjets
});

const logos = document.querySelectorAll('.logo');

logos.forEach(logo => {
  logo.addEventListener('click', function () {
    const projetId = parseInt(logo.dataset.id); // Sélectionner les logos avec parseInt
    const projet = myProjets.find(projet => projet.id === projetId); // Trouver le projet correspondant avec la technique array.find
    afficherProjet(projet);
  });
});

function afficherProjet(projet) {
  document.getElementById('projetImage').src = projet.pict;
  document.getElementById('projetPitch').textContent = projet.picth;
  document.getElementById('projetWebLink').href = projet.web;
  document.getElementById('projetSourceLink').href = projet.source;
}

// CONTACT
const form = document.querySelector('form');

form.addEventListener('submit', function(event) {
  event.preventDefault(); // Empêcher l'envoi du formulaire par défaut

  // Récupérer les valeurs des champs
  const userValue = user.value;
  const emailValue = email.value;
  const messageValue = message.value;

  // Validation simple des champs
  if (!userValue || !emailValue || !messageValue) {
    alert("Veuillez remplir tous les champs.");
    return;
  }

  // Validation de l'adresse email
  if (!isValidEmail(emailValue)) {
    alert("Veuillez saisir une adresse email valide.");
    return;
  }

  // Envoyer le message
  alert(userValue + ', votre message a été envoyé avec succès.');
});

// Fonction pour valider l'adresse email
function isValidEmail(email) {
  // Expression régulière pour vérifier le format de l'adresse email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}



