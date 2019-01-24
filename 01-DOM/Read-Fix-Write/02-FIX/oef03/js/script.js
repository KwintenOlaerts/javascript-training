const episodes = document.querySelectorAll(`.episode-writer`);
episodes.forEach($director => {
  if ($director.textContent != `Freddy Lamarr`) {
    console.log($director)
    $director.parentNode.parentNode.remove();
  }
});
