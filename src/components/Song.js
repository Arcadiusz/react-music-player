import React from "react";
import Plater from "./Player";
const Song = ({currentSong, isPlaying}) => {
    return (
        <div className="song-container">
            <img
                className={`song__img ${
                    isPlaying ? "song__img-playing" : "song__img-paused"
                }`}
                src={currentSong.cover}
            />
            <h2 className={"song__name"}>{currentSong.name}</h2>
            <h3 className={"song__artist"}>{currentSong.artist}</h3>
        </div>
    );
};

export default Song;
