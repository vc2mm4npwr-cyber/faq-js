//質問ボタンを全部取得
const questions = document.querySelectorAll('.question');

questions.forEach(function(question) {
  question.addEventListener('click', function() {
    const faqItem = question.closest('.faq-item');
    const answer = faqItem.querySelector('.answer');

    answer.classList.toggle('open');
  });
});

//===要素の取得===
const openButton = document.getElementById('openModal');
const modal = document.getElementById('modal');
const closeButton = modal.querySelector('.close');
const modalContent = modal.querySelector('.modal-content');

//===モーダルを開く===
openButton.addEventListener('click', function(){
  modal.classList.add('open');
});

//===×ボタンで閉じる===
closeButton.addEventListener('click', function(){
  modal.classList.remove('open');
});

//===背景クリックで閉じる===
modal.addEventListener('click', function(){
  modal.classList.remove('open');
});

//===中身クリックは無効化===
modalContent.addEventListener('click', function(e){
  e.stopPropagation();
});
