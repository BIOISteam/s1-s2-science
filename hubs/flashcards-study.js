const flashcard = document.getElementById("flashcard");
const flashcardQuestion = document.getElementById("flashcard-question");
const flashcardAnswer = document.getElementById("flashcard-answer");
const flashcardCounter = document.getElementById("study-counter");
const flashcardPrev = document.getElementById("flashcard-prev");
const flashcardNext = document.getElementById("flashcard-next");

let cards = [];
let currentIndex = 0;

function setCard(index) {
  const card = cards[index];
  if (!card) {
    return;
  }

  currentIndex = index;
  flashcard.classList.remove("is-flipped");
  flashcardQuestion.textContent = card.question;
  flashcardAnswer.textContent = card.answer;
  flashcardCounter.textContent = `Card ${index + 1} of ${cards.length}`;
}

async function init() {
  const response = await fetch("../content/chapter-01/flashcards.json");
  const data = await response.json();
  cards = data.cards;
  setCard(0);

  flashcard.addEventListener("click", () => {
    flashcard.classList.toggle("is-flipped");
  });

  flashcard.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      flashcard.classList.toggle("is-flipped");
    }
  });

  flashcardPrev.addEventListener("click", () => {
    setCard((currentIndex - 1 + cards.length) % cards.length);
  });

  flashcardNext.addEventListener("click", () => {
    setCard((currentIndex + 1) % cards.length);
  });
}

document.addEventListener("DOMContentLoaded", init);
