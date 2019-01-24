const episodes = document.querySelectorAll(`.episode-title`);
const $currentEpisode = document.querySelector(`.subtitle`);
const currentTitle = $currentEpisode.textContent;


episodes.forEach(elkeAflevering => {
  if (elkeAflevering.textContent === currentTitle) {
    elkeAflevering.classList = `highlight`;
  }
});

$currentEpisode.classList.add = "hightlight";