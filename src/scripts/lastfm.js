class Lastfm {
  constructor() {
    this.apiKey = 'c136737ab26b0afd9e14e201b8571111';
  }

  async getCommonSimilarArtistName(artist01, artist02) {
    const similarArtistsRes01 = await fetch (`http://ws.audioscrobbler.com/2.0/?method=artist.getsimilar&artist=${artist01}&api_key=${this.apiKey}&format=json&autocorrect[0|1]`);
    const similarArtistsRes02 = await fetch (`http://ws.audioscrobbler.com/2.0/?method=artist.getsimilar&artist=${artist02}&api_key=${this.apiKey}&format=json&autocorrect[0|1]`);

    if ( (similarArtistsRes01.status >= 400 && similarArtistsRes01.status < 600) || (similarArtistsRes02.status >= 400 && similarArtistsRes02.status < 600) ) {
      throw new Error('Bad response from server, please try again.');
    }

    const similarArtistsObj01 = await similarArtistsRes01.json();
    const similarArtistsObj02 = await similarArtistsRes02.json();

    if (similarArtistsObj01.error && similarArtistsObj02.error) {
      throw new Error('Cannot find either artist.')
    } else if (similarArtistsObj01.error) {
      throw new Error('Artist 01 not found.')
    } else if (similarArtistsObj02.error) {
      throw new Error('Artist 02 not found.')
    }

    const similarArtistsNames01 = similarArtistsObj01.similarartists.artist.map(artist => artist.name);
    const similarArtistsNames02 = similarArtistsObj02.similarartists.artist.map(artist => artist.name);

    const filteredSimilarArtistsNames = similarArtistsNames01.filter(artist => similarArtistsNames02.includes(artist));

    if (filteredSimilarArtistsNames.length === 0) {
      throw new Error('No matches found.');
    }

    const randomSimilarArtistName = filteredSimilarArtistsNames[Math.floor(Math.random() * filteredSimilarArtistsNames.length)];
  
    return randomSimilarArtistName;
  }

  async getCommonSimilarArtistAlbum(similarArtistName) {    
    const similarArtistAlbumsRes = await fetch(`http://ws.audioscrobbler.com/2.0/?method=artist.gettopalbums&artist=${similarArtistName}&api_key=${this.apiKey}&format=json`);

    const similarArtistAlbumsObj = await similarArtistAlbumsRes.json();

    const similarArtistAlbums = similarArtistAlbumsObj.topalbums.album;
    
    function contains(albumName, keywords) {
      let flag = 0;
      keywords.forEach(function(keyword) {
        flag = flag + albumName.includes(keyword)
      });
      return (flag === 0);
    }

    const compilationKeywords = "greatest, hits, best, collection, essential, disc".split(", ");

    const filteredAlbumsByKeyword = similarArtistAlbums.filter(album => contains(album.name.toLowerCase(), compilationKeywords));

    const filtereAlbumsByMissingImgs = filteredAlbumsByKeyword.filter(album => album.image[3]["#text"].length > 0);

    const similarArtistTopAlbum = filtereAlbumsByMissingImgs[0];

    return similarArtistTopAlbum;
  }
}

export const lastfm = new Lastfm();