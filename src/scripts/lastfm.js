class Lastfm {
  constructor() {
    this.apiKey = 'c136737ab26b0afd9e14e201b8571111';
  }

  async getCommonSimilarArtistName(artist01, artist02) {
    const similarArtistsRes01 = await fetch (`http://ws.audioscrobbler.com/2.0/?method=artist.getsimilar&artist=${artist01}&api_key=${this.apiKey}&format=json&autocorrect[0|1]`);
    const similarArtistsRes02 = await fetch (`http://ws.audioscrobbler.com/2.0/?method=artist.getsimilar&artist=${artist02}&api_key=${this.apiKey}&format=json&autocorrect[0|1]`);

    const similarArtistsObj01 = await similarArtistsRes01.json();
    const similarArtistsObj02 = await similarArtistsRes02.json();

    const similarArtistsNames01 = similarArtistsObj01.similarartists.artist.map(artist => artist.name);
    const similarArtistsNames02 = similarArtistsObj02.similarartists.artist.map(artist => artist.name);

    const filteredSimilarArtistsNames = similarArtistsNames01.filter(artist => similarArtistsNames02.includes(artist));

    const randomSimilarArtistName = filteredSimilarArtistsNames[ Math.floor(Math.random() * filteredSimilarArtistsNames.length) ];
    
    return randomSimilarArtistName;
  }

  async getCommonSimilarArtistAlbum(similarArtistName) {
    const similarArtistAlbumsRes = await fetch(`http://ws.audioscrobbler.com/2.0/?method=artist.gettopalbums&artist=${similarArtistName}&api_key=${this.apiKey}&format=json`);

    const similarArtistAlbumsObj = await similarArtistAlbumsRes.json();

    const similarArtistTopAlbum = similarArtistAlbumsObj.topalbums.album[0];

    return similarArtistTopAlbum;
  }
}

export const lastfm = new Lastfm();