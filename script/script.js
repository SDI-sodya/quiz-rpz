document.addEventListener('DOMContentLoaded', function () {
  const btnOpenModal = document.querySelector('#btnOpenModal');
  const modalBlock = document.querySelector('#modalBlock');
  const closeModal = document.querySelector('#closeModal');
  const questionTitle = document.querySelector('#question');
  const formAnswers = document.querySelector('#formAnswers');

  btnOpenModal.addEventListener('click', () => {
    modalBlock.classList.add('d-block');
    playTest();
  })

  closeModal.addEventListener('click', () => {
    modalBlock.classList.remove('d-block');
  })

  const playTest = () => {
    const renderQuestions = () => {
      questionTitle.textContent = "Какого цвета бургер вы хотите?";

      whiteBurger = `../image/burger.png`;
      blackBurger = `../image/burgerBlack.png`;

      formAnswers.innerHTML = `
      <div class="answers-item d-flex flex-column">
        <input type="radio" id="answerItem1" name="answer" class="d-none">
        <label for="answerItem1" class="d-flex flex-column justify-content-between">
          <img class="answerImg" src="${whiteBurger}" alt="burger">
          <span>Стандарт</span>
        </label>
      </div>
      <div class="answers-item d-flex justify-content-center">
        <input type="radio" id="answerItem2" name="answer" class="d-none">
        <label for="answerItem2" class="d-flex flex-column justify-content-between">
          <img class="answerImg" src="${blackBurger}" alt="burger">
          <span>Чорний</span>
        </label>
      </div>`;
    };
    renderQuestions();
  };
});