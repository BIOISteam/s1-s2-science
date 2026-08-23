const pageLinks = document.querySelectorAll("[data-page]");
const navButtons = document.querySelectorAll(".nav-pill-btn");
const pages = document.querySelectorAll("[data-page-panel]");

function showPage(pageId) {
  navButtons.forEach((button) => {
    const isActive = button.dataset.page === pageId;
    button.classList.toggle("active", isActive);

    if (isActive) {
      button.setAttribute("aria-current", "page");
    } else {
      button.removeAttribute("aria-current");
    }
  });

  pages.forEach((page) => {
    page.classList.toggle("active", page.dataset.pagePanel === pageId);
  });
}

pageLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    showPage(link.dataset.page);
  });
});

showPage("table");
