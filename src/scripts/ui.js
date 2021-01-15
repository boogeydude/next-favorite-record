class UI {
  constructor() {
    this.artistInput01 = document.querySelector('.artist-input-01');
    this.artistInput02 = document.querySelector('.artist-input-02');
    this.submitBtn = document.querySelector('.submit');
    this.results = document.querySelector('.results');
  }
  
  displayResults(similarArtistTopAlbum) {
    // create album title el and add to ui
    const resultsAlbumTitle = document.createElement("h2");

    resultsAlbumTitle.classList.add("results-album-title");

    resultsAlbumTitle.textContent = similarArtistTopAlbum.name;

    this.results.appendChild(resultsAlbumTitle);


    // create album artist el and add to ui
    const resultsAlbumArtist = document.createElement("h3");

    resultsAlbumArtist.classList.add("results-album-artist");

    resultsAlbumArtist.textContent = similarArtistTopAlbum.artist.name;

    this.results.appendChild(resultsAlbumArtist);


    // create album img el and add to ui
    const resultsAlbumImgContainer = document.createElement("div");
    const resultsAlbumLink = document.createElement("a");
    const resultsAlbumImg = document.createElement("img");

    resultsAlbumImgContainer.classList.add("results-album-img-container");
    resultsAlbumLink.classList.add("results-album-link");
    resultsAlbumImg.classList.add("results-album-img");

    resultsAlbumLink.href = similarArtistTopAlbum.url;
    resultsAlbumLink.setAttribute("target", "_blank");
    resultsAlbumImg.src = similarArtistTopAlbum.image[3]["#text"];

    resultsAlbumLink.appendChild(resultsAlbumImg);
    resultsAlbumImgContainer.appendChild(resultsAlbumLink);
    this.results.appendChild(resultsAlbumImgContainer);
  }

  clearResults() {
    this.results.innerHTML = "";
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