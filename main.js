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
    picth: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
    web: "https://spirits-gamer.vercel.app/main",
    source: "https://github.com/Matfen2/Spirits-Gamer",
  },
  {
    id: 2,
    pict: "/assets/picts/soulsHeroesSite.png",
    picth: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
    web: "https://souls-heroes.vercel.app/main",
    source: "https://github.com/Matfen2/SoulsHeroesBackend/tree/master",
  }, 
  {
    id: 3,
    pict: "/assets/picts/tlouSite.png",
    picth: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
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


