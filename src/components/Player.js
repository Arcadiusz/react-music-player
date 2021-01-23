import React, {useRef, useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faPlay,
    faAngleLeft,
    faAngleRight,
    faPause,
} from "@fortawesome/free-solid-svg-icons";

const Player = ({currentSong, isPlaying, setIsPlaying}) => {
    //Ref
    const audioRef = useRef(null);
    const [songTime, setSongTime] = useState({
        currentTime: 0,
        duration: 0,
    });

    const playSongHangler = () => {
        console.log(audioRef.current.duration);
        if (isPlaying) {
            audioRef.current.pause();
            setIsPlaying(!isPlaying);
        } else {
            audioRef.current.play();
            setIsPlaying(!isPlaying);
        }
    };

    const formatTime = (time) => {
        return (
            Math.floor(time / 60) +
            ":" +
            ("0" + Math.floor(time % 60)).slice(-2)
        );
    };

    const handleSliderChange = (e) => {
        let value = e.target.value;
        setSongTime({...songTime, currentTime: value});
        audioRef.current.currentTime = value;
    };

    const songTimeUpdateHandler = (e) => {
        let currentTime = e.target.currentTime;
        setSongTime({
            ...songTime,
            currentTime: currentTime,
            duration: e.target.duration,
        });
    };
    return (
        <div className="player">
            <div className="time-control">
                <p>{formatTime(songTime.currentTime)}</p>
                <input
                    type="range"
                    value={songTime.currentTime}
                    onChange={handleSliderChange}
                    min={0}
                    max={songTime.duration}
                />
                <p>{formatTime(songTime.duration)}</p>
            </div>
            <div className="play-control">
                <FontAwesomeIcon
                    className="skip-back"
                    size="2x"
                    icon={faAngleLeft}
                />
                <FontAwesomeIcon
                    onClick={playSongHangler}
                    className="play"
                    size="2x"
                    icon={!isPlaying ? faPlay : faPause}
                />
                <FontAwesomeIcon
                    className="skip-forward"
                    size="2x"
                    icon={faAngleRight}
                />
            </div>
            <audio
                onLoadedMetadata={songTimeUpdateHandler}
                onTimeUpdate={songTimeUpdateHandler}
                ref={audioRef}
                src={currentSong.audio}></audio>
        </div>
    );
};

export default Player;
