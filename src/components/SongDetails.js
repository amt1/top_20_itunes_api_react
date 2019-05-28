import React from 'react';

const SongDetails = ( {song} ) => {
        if (song === null) {
            return(
                <p>Pick a song...</p>
            )
        }

        return (
            <div className="song-detail" id={song.key}>
                <h3>Song name: {song.title}</h3>
                <h3>Artist: {song.artist}</h3>
            </div>
        )
}

export default SongDetails;
// TODO song needs id, artist name and title
