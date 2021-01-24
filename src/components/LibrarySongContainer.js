import React from "react";

function LibrarySongContainer({song, setSong, songId, isCurrent}) {
    return (
        <div
            className={`song-box ${isCurrent == songId ? "current" : ""}`}
            onClick={() => setSong(songId)}>
            <div className="song-box-img">
                <img className={"song-box__img"} src={song.cover} alt="" />
            </div>
            <div className="song-info">
                <h1 className={"song-box__title"}>{song.name}</h1>
                <h2 className={"song-box__artist"}>{song.artist}</h2>
            </div>
        </div>
    );
}

export default LibrarySongContainer;
