import React, {useState} from "react";
import SongContainer from "../components/LibrarySongContainer";

function Library({songs, setSong, currentSong, showLibrary}) {
    return (
        <div className={`library ${showLibrary ? "" : "hidden"}`}>
            <div className="head_belt">
                <h1 className={"library__title"}>Your songs:</h1>
            </div>
            {songs.map((song) => {
                return (
                    <div key={song.id}>
                        <SongContainer
                            song={song}
                            setSong={setSong}
                            songId={songs.indexOf(song)}
                            isCurrent={songs.indexOf(currentSong)}
                        />
                    </div>
                );
            })}
        </div>
    );
}

export default Library;
