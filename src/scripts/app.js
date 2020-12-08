import "../styles/main.scss";

import { ui } from "./ui";
import { lastfm } from "./lastfm";

ui.submitBtn.addEventListener('click', clickSubmit);

function clickSubmit(event) {
  ui.clearResults();
  ui.removeAlert();

  if (ui.artistInput01.value !== '' && ui.artistInput02.value !== '') {
    ui.displayLoader();

    lastfm.getRandomCommonSimilarArtist(ui.artistInput01.value, ui.artistInput02.value)
    .then(randomSimilarArtist => {
      return lastfm.getArtistTopAlbum(randomSimilarArtist)
    })
    .then(similarArtistTopAlbum => {
      ui.removeLoader();
      ui.displayResults(similarArtistTopAlbum);
    })
    .catch(error => {
      ui.removeLoader();

      if (error.message === 'Albums length error') {
        clickSubmit();
      } else {
        ui.displayAlert(error.message);
      }
    })

  } else {
    ui.displayAlert('Please fill in both inputs.');
  }

  if (event) {
    event.preventDefault();
  }
}