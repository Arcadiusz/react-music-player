import React, {useState} from "react";
import "./styles/app.scss";
import Player from "./components/Player";
import Song from "./components/Song";
import data from "./data";
import Library from "./components/Library";
import AppHeader from "./components/AppHeader";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

import {faMusic} from "@fortawesome/free-solid-svg-icons";

function App() {
    //state
    const [songs, setSongs] = useState(data());
    const [currentSong, setCurrentSong] = useState(songs[1]);
    const [isPlaying, setIsPlaying] = useState(false);
    const [showLibrary, setShowLibrary] = useState(true);

    const displayLibrary = () => {
        setShowLibrary(!showLibrary);
    };
    const handleSongChange = (id) => {
        setCurrentSong(songs[id]);
        setIsPlaying(false);
    };

    const LibraryButton = (
        <h1>
            <FontAwesomeIcon className="skip-back" size="2x" icon={faMusic} />
            library
        </h1>
    );

    return (
        <div className="App">
            <Library
                songs={songs}
                setSong={handleSongChange}
                currentSong={currentSong}
                showLibrary={showLibrary}
            />
            <div className="player-container">
                <AppHeader />
                <Song currentSong={currentSong} isPlaying={isPlaying} />
                <Player
                    currentSong={currentSong}
                    isPlaying={isPlaying}
                    setIsPlaying={setIsPlaying}
                />
            </div>
            <span className={"show-btn"} onClick={displayLibrary}>
                <FontAwesomeIcon
                    className="skip-back"
                    size="2x"
                    icon={faMusic}
                />{" "}
                Library
            </span>
        </div>
    );
}

export default App;
