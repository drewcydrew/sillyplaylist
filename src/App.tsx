import "./App.css";

function App() {
  const placeholderSongs = [
    {
      title: "Mum Does the Washing",
      artist: "Joshua Idehen",
      album: "",
    },
    {
      title: "Learn To Swim, Pt. 2",
      artist: "Joshua Idehen",
      album: "",
    },
    {
      title: "Theme from Failure, Pt. 1",
      artist: "The Guest",
      album: "",
    },
    {
      title: "The Beginning of the End",
      artist: "Headache",
      album: "",
    },
    {
      title: "The Party that Never Ends",
      artist: "Headache",
      album: "",
    },
    {
      title: "The Person You'd Like To Be",
      artist: "Barry Can't Swim",
      album: "",
    },
    {
      title: "Only My Honesty Matters",
      artist: "Baxter Dury, Étienne de Crécy, Delilah Holliday",
      album: "",
    },
    {
      title: "Pigs... (In There)",
      artist: "Robert Wyatt",
      album: "",
    },
  ];

  return (
    <>
      <h1>Andrews Silly Playlist</h1>

      <div className="playlist-actions">
        <a
          href="https://open.spotify.com/playlist/4lwrHoYiATnrStlbyE3rcC?si=fQGai81oTZaUwWSAnk952g&pi=fvEB5ZlLQ8qC1"
          target="_blank"
          rel="noopener noreferrer"
          className="streaming-button spotify"
        >
          ♫ Open in Spotify
        </a>
        <a
          href="https://music.youtube.com/playlist?list=PLRA5taBuFM3NfDRTvrX90s6kIi-Qfedoh"
          target="_blank"
          rel="noopener noreferrer"
          className="streaming-button youtube"
        >
          🎬 Open in YouTube Music
        </a>
      </div>

      <div className="song-list">
        <h2>Songs ({placeholderSongs.length})</h2>
        {placeholderSongs.map((song, index) => (
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
