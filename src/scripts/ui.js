class UI {
  constructor() {
    this.artistInput01 = document.querySelector('.artist-input-01');
    this.artistInput02 = document.querySelector('.artist-input-02');
    this.submitBtn = document.querySelector('.submit');
    this.results = document.querySelector('.results');
    this.resultsAlbumTitle = document.querySelector('.results-album-title');
    this.resultsAlbumArtist = document.querySelector('.results-album-artist');
    this.resultsAlbumImg = document.querySelector('.results-album-img');
  }
  
  displayResults(similarArtistTopAlbum) {
    this.resultsAlbumTitle.textContent = similarArtistTopAlbum.name;
    this.resultsAlbumArtist.innerHTML = `<span class='by'>by</span> ${similarArtistTopAlbum.artist.name}`;
    this.resultsAlbumImg.src = similarArtistTopAlbum.image[3]["#text"];
  }

  clearResults() {
    this.resultsAlbumTitle.textContent = '';
    this.resultsAlbumArtist.textContent = '';
    this.resultsAlbumImg.src = '#';
  }

  displayLoader() {
    if (document.querySelector('.loader') === null) {
      const loaderImg = document.createElement('div');
      loaderImg.classList.add('loader');
      this.results.insertBefore(loaderImg, this.resultsAlbumTitle);
    }
  }

  removeLoader() {
    if (document.querySelector('.loader') !== null) {
      document.querySelector('.loader').remove();
    }
  }

  displayAlert(msg) {
    const alertMsg = document.createElement('p');
    alertMsg.classList.add('alert-msg');
    alertMsg.textContent = msg;
    this.results.appendChild(alertMsg, this.results);
  }

  removeAlert() {
    if (document.querySelector('.alert-msg') !== null) {
      document.querySelector('.alert-msg').remove();
    }
  }
}

export const ui = new UI();