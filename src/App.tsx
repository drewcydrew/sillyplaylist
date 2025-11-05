import "./App.css";
import spotifyLogo from "./assets/spotify.png";
import youtubeLogo from "./assets/youtube.png";
import songsData from "./data/songs.json";

function App() {
  return (
    <>
      <h1>Andrews Dumb Playlist</h1>
      <p className="byline">
        Hey thanks for taking the time to check this out, would love to know
        what compelled you to do so. Here's a collection of songs I think I'll
        be embarrassed by in about a weeks time.
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
