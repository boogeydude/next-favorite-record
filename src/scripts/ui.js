class UI {
  constructor() {
    this.artistInput01 = document.querySelector('.artist-input-01');
    this.artistInput02 = document.querySelector('.artist-input-02');
    this.submitBtn = document.querySelector('.submit');
    this.resultsContainer = document.querySelector('#results .container');
    this.resultsContent = document.querySelector('.results-content');
    this.resultsAlbumTitle = document.querySelector('.results-album-title');
    this.resultsAlbumArtist = document.querySelector('.results-album-artist');
    this.resultsAlbumImg = document.querySelector('.results-album-img');
  }
  
  displayResults(similarArtistTopAlbum) {
    this.removeLoader();

    this.resultsAlbumTitle.textContent = similarArtistTopAlbum.name;
    this.resultsAlbumArtist.textContent = similarArtistTopAlbum.artist.name;
    this.resultsAlbumImg.src = similarArtistTopAlbum.image[3]["#text"];
  }

  clearResults() {
    this.displayLoader();

    this.resultsAlbumTitle.textContent = '';
    this.resultsAlbumArtist.textContent = '';
    this.resultsAlbumImg.src = '#';
  }

  displayLoader() {
    this.removeAlert();

    const loaderImg = document.createElement('div');
    loaderImg.classList.add('loader');
    this.resultsContainer.insertBefore(loaderImg, this.resultsContent);
  }

  removeLoader() {
    if (document.querySelector('.loader') !== null) {
      document.querySelector('.loader').remove();
    }
  }

  displayAlert(msg) {
    this.removeLoader();
    this.removeAlert();

    const alertMsg = document.createElement('p');
    alertMsg.classList.add('alert-msg');
    alertMsg.textContent = msg;
    this.resultsContainer.insertBefore(alertMsg, this.resultsContent);
  }

  removeAlert() {
    if (document.querySelector('.alert-msg') !== null) {
      document.querySelector('.alert-msg').remove();
    }
  }
}

export const ui = new UI();