import "../styles/main.scss";

import { ui } from "./ui";
import { lastfm } from "./lastfm";

ui.submitBtn.addEventListener('click', clickSubmit);

function clickSubmit(e) {
  if (ui.artistInput01.value !== '' && ui.artistInput02.value !== '') {
    ui.clearResults();
    lastfm.getCommonSimilarArtistName(ui.artistInput01.value, ui.artistInput02.value)

    .then(similarArtistName => {
      return lastfm.getCommonSimilarArtistAlbum(similarArtistName)
    })

    .then(similarArtistTopAlbum => {
      ui.displayResults(similarArtistTopAlbum);
    })

    .catch(error => {
      ui.displayAlert(error.message);
    })

  } else {
    ui.displayAlert('Please fill in both inputs.');
  }

  e.preventDefault();
}