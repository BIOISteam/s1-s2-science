(function initIsEmbed() {
  if (window.self !== window.top) {
    document.documentElement.classList.add("bio-embed");
  }
})();
