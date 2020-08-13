import "../styles/main.scss";

import { lastfm } from "./lastfm";
import { ui } from "./ui";

ui.submitBtn.addEventListener('click', clickSubmit)

function clickSubmit(e) {
  lastfm.getCommonSimilarArtistName(ui.artistInput01.value, ui.artistInput02.value)
  .then(similarArtistName => {
    return lastfm.getCommonSimilarArtistAlbum(similarArtistName)
  })
  .then(similarArtistTopAlbum => {
    ui.displayResults(similarArtistTopAlbum)
  })
  .catch(err => console.log(err));

  e.preventDefault();
}