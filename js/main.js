//============
//FAQ
//============
const questions = document.querySelectorAll('.question');
const answers = document.querySelectorAll('.answer');

questions.forEach(function(question) {
  question.addEventListener('click', function() {

    const faqItem = question.closest('.faq-item');
    const answer = faqItem.querySelector('.answer');
    const isOpen = answer.classList.contains('open');
    
    answers.forEach(function(a) {
      a.classList.remove('open');
    });
    
    questions.forEach(function(q) {
      q.classList.remove('active');
    });

    if(!isOpen) {
        answer.classList.add('open');
        question.classList.add('active');
    }
  });
});

//questionクリック、クリックしたところはtoggle、それ以外の質問は閉じる



//==============
//Modal
//==============
const openButton = document.getElementById('openModal');
const modal = document.getElementById('modal');
const closeButton = modal.querySelector('.close');

function openModal() {
  modal.classList.add('open');
  document.body.classList.add('no-scroll');
}

function closeModal() {
  modal.classList.remove('open');
  document.body.classList.remove('no-scroll');
}

openButton.addEventListener('click', openModal);
closeButton.addEventListener('click',closeModal);

modal.addEventListener('click',function(e)  {
  if(e.target === modal) {
    closeModal();
  }
});


//================
//navigation
//===============
const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.nav');
const navOverlay = document.querySelector('.nav-overlay');
const navLinks = document.querySelectorAll('.nav a');

function openNav() {
  nav.classList.add('open');
  navOverlay.classList.add('open');
  document.body.classList.add('no-scroll');
}

function closeNav() {
  nav.classList.remove('open');
  navOverlay.classList.remove('open');
  document.body.classList.remove('no-scroll');
}

hamburger.addEventListener('click',function() {
  if(nav.classList.contains('open')) {
    closeNav();
  }else{
    openNav();
  }
});

navOverlay.addEventListener('click',closeNav);

navLinks.forEach(function(a) {
  a.addEventListener('click',closeNav);
});


//=================
//Contact → Modal連携
//=================
const contactLink = document.querySelector('#contactLink');

contactLink.addEventListener('click',function(e) {
  e.preventDefault();
  openModal();
});

