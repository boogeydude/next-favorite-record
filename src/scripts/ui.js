class UI {
  constructor() {
    this.artistInput01 = document.querySelector('.artist-input-01');
    this.artistInput02 = document.querySelector('.artist-input-02');
    this.submitBtn = document.querySelector('.submit');
    this.resultsAlbumTitle = document.querySelector('.results-album-title');
    this.resultsAlbumArtist = document.querySelector('.results-album-artist');
    this.resultsAlbumImg = document.querySelector('.results-album-img');
  }
  
  displayResults(similarArtistTopAlbum) {
    this.resultsAlbumTitle.textContent = similarArtistTopAlbum.name;
    this.resultsAlbumArtist.textContent = similarArtistTopAlbum.artist.name;
    this.resultsAlbumImg.src = similarArtistTopAlbum.image[3]["#text"];
  }
}

export const ui = new UI();