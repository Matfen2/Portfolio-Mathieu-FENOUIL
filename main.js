const btnMain = document.getElementById('btnMain'); 
const btnAbout = document.getElementById('btnAbout');
const btnProjets = document.getElementById('btnProjets');
const btnContact = document.getElementById('btnContact');

const btnAboutCanvas = document.getElementById('btnAboutCanvas');
const btnProjetsCanvas = document.getElementById('btnProjetsCanvas');
const btnContactCanvas = document.getElementById('btnContactCanvas');

const main = document.querySelector('.main');
const info = document.getElementById('page');
const about = document.getElementById('about');
const projets = document.getElementById('projets');
const contact = document.getElementById('contact');

btnMain.addEventListener('click', function () {
  main.style.display = "none";
  info.style.display = "block";
})

btnAbout.addEventListener('click', function () {
  about.style.display = "block";
  projets.style.display = "none";
  contact.style.display = "none";
})

btnAboutCanvas.addEventListener('click', function () {
  about.style.display = "block";
  projets.style.display = "none";
  contact.style.display = "none";
})

btnProjets.addEventListener('click', function () {
  about.style.display = "none";
  projets.style.display = "block";
  contact.style.display = "none";
})

btnProjetsCanvas.addEventListener('click', function () {
  about.style.display = "none";
  projets.style.display = "block";
  contact.style.display = "none";
})

btnContact.addEventListener('click', function () {
  about.style.display = "none";
  projets.style.display = "none";
  contact.style.display = "block";
})

btnContactCanvas.addEventListener('click', function () {
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
    picth: "Ce projet est ma première single page application basée sur l'une des sagas de jeux vidéo les plus appréciées de tous les joueurs et joueuses. C'est ma lettre d'amour pour ces jeux que je l'ai créée avec plaisir.",
    web: "https://the-last-of-us-orcin.vercel.app/main",
    source: "https://github.com/Matfen2/The-Last-Of-Us",
  }
];

document.addEventListener("DOMContentLoaded", function() {
  afficherProjet(myProjets[0]); 
});

const logos = document.querySelectorAll('.logo');

logos.forEach(logo => {
  logo.addEventListener('click', function () {
    const projetId = parseInt(logo.dataset.id); 
    const projet = myProjets.find(projet => projet.id === projetId); 
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
  event.preventDefault(); 

  const userValue = user.value;
  const emailValue = email.value;
  const messageValue = message.value;

  if (!userValue || !emailValue || !messageValue) {
    alert("Veuillez remplir tous les champs.");
    return;
  }

  if (!isValidEmail(emailValue)) {
    alert("Veuillez saisir une adresse email valide.");
    return;
  }

  alert(userValue + ', votre message a été envoyé avec succès.');
});

function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}
