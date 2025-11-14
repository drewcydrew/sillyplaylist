import "./App.css";
import spotifyLogo from "./assets/spotify.png";
import youtubeLogo from "./assets/youtuebtranparent.webp";
import songsData from "./data/songs.json";

function App() {
  return (
    <>
      <h1>Drew's Dumb Playlist</h1>
      <p className="byline">
        Hey thanks for taking the time to check this out, here's a collection of
        songs I think I might be embarrassed to have recommended so
        enthusiastically in about a weeks time. I'm on kind of a spoken word
        kick so I hope you're into that. I'm also really liking the album
        "Metronomy - BBC6MusicSession" today, maybe just try that if it's more
        your speed.
      </p>

      <div className="playlist-actions">
        <a
          href="https://open.spotify.com/playlist/4lwrHoYiATnrStlbyE3rcC?si=fQGai81oTZaUwWSAnk952g&pi=fvEB5ZlLQ8qC1"
          target="_blank"
          rel="noopener noreferrer"
          className="streaming-button spotify"
        >
          <img src={spotifyLogo} className="streaming-icon" alt="Spotify" />
          Open in Spotify
        </a>
        <a
          href="https://music.youtube.com/playlist?list=PLRA5taBuFM3NfDRTvrX90s6kIi-Qfedoh"
          target="_blank"
          rel="noopener noreferrer"
          className="streaming-button youtube"
        >
          <img
            src={youtubeLogo}
            className="streaming-icon"
            alt="YouTube Music"
          />
          Open in YouTube Music
        </a>
      </div>

      <div className="song-list">
        <h2>Songs ({songsData.length})</h2>
        {songsData.map((song, index) => (
          <div key={index} className="song-item">
            <div className="song-number">{index + 1}</div>
            <div className="song-info">
              <div className="song-title">{song.title}</div>
              <div className="song-artist">
                {song.artist} • {song.album}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
