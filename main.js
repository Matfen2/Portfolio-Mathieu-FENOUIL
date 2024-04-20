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