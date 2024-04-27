const btnMain = document.getElementById('btnMain');
const btnAbout = document.getElementById('btnAbout');
const btnProjets = document.getElementById('btnProjets');
const btnContact = document.getElementById('btnContact');

const main = document.getElementById('main');
const about = document.getElementById('about');
const projets = document.getElementById('projets');
const contact = document.getElementById('contact');

btnMain.addEventListener('click', function () {
  main.style.display = "block";
  about.style.display = "none";
  projets.style.display = "none";
  contact.style.display = "none";
})

btnAbout.addEventListener('click', function () {
  main.style.display = "none";
  about.style.display = "block";
  projets.style.display = "none";
  contact.style.display = "none";
})

btnProjets.addEventListener('click', function () {
  main.style.display = "none";
  about.style.display = "none";
  projets.style.display = "block";
  contact.style.display = "none";
})

btnContact.addEventListener('click', function () {
  main.style.display = "none";
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
