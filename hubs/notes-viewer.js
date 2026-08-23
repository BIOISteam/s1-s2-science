const SLIDES_PATH = "../content/chapter-01/slides";
const noteSelect = document.getElementById("note-select");
const noteTitle = document.getElementById("note-title");
const notePdf = document.getElementById("note-pdf");
const noteOpenLink = document.getElementById("note-open-link");

let slides = [];

function getPdfUrl(fileName) {
  return `${SLIDES_PATH}/${encodeURIComponent(fileName)}`;
}

function showNote(index) {
  const slide = slides[index];
  if (!slide) {
    return;
  }

  const url = getPdfUrl(slide.file);
  noteTitle.textContent = slide.title;
  notePdf.src = url;
  noteOpenLink.href = url;
  noteSelect.value = String(index);
}

function renderOptions() {
  noteSelect.innerHTML = slides
    .map((slide, index) => `<option value="${index}">${index + 1}. ${slide.title}</option>`)
    .join("");
}

async function init() {
  const response = await fetch(`${SLIDES_PATH}/slides.json`);
  slides = await response.json();
  renderOptions();

  const params = new URLSearchParams(window.location.search);
  const pdfParam = params.get("pdf");
  let startIndex = 0;

  if (pdfParam) {
    const matchIndex = slides.findIndex((slide) => slide.file === pdfParam);
    if (matchIndex >= 0) {
      startIndex = matchIndex;
    }
  }

  showNote(startIndex);
  noteSelect.addEventListener("change", (event) => {
    showNote(Number(event.target.value));
  });
}

document.addEventListener("DOMContentLoaded", init);
