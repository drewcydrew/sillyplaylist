import { useState } from "react";
import "./App.css";

function App() {
  const placeholderSongs = [
    {
      title: "Bohemian Rhapsody",
      artist: "Queen",
      album: "A Night at the Opera",
    },
    {
      title: "Stairway to Heaven",
      artist: "Led Zeppelin",
      album: "Led Zeppelin IV",
    },
    { title: "Hotel California", artist: "Eagles", album: "Hotel California" },
    {
      title: "Sweet Child O' Mine",
      artist: "Guns N' Roses",
      album: "Appetite for Destruction",
    },
    { title: "Imagine", artist: "John Lennon", album: "Imagine" },
  ];

  return (
    <>
      <h1>Andrews Silly Playlist</h1>

      <div className="playlist-actions">
        <button className="streaming-button spotify">🎵 Open in Spotify</button>
        <button className="streaming-button youtube">
          🎬 Open in YouTube Music
        </button>
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
