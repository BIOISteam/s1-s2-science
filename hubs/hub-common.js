function bindHubCards() {
  document.querySelectorAll(".quiz-chapter-card[data-href]").forEach((card) => {
    card.addEventListener("click", () => {
      window.location.href = card.dataset.href;
    });
    card.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        window.location.href = card.dataset.href;
      }
    });
  });
}

document.addEventListener("DOMContentLoaded", bindHubCards);
