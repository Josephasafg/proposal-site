import React, {useEffect, useState} from "react";
import {SongsAPI} from "../../API/api";
import {Song} from "../../models/song";
import {CircularSpinner} from "../spinner/spinner";
import "./winning-song.css";

const WINNING_SONG_TEXT = "השיר המנצח הוא:"
export const WinningSong: React.FC = () => {
    const [winningSong, setWinningSong] = useState<Song | null>();

    const getWinningSong = async () => {
        const song = await SongsAPI.getWinningSong();
        setWinningSong(song);
    }

    useEffect(() => {
        getWinningSong();
    }, [])

    return (
        <div className={"winning-song-page-wrapper"}>
            {winningSong ?
                <div className={"winning-song-wrapper"}>
                    <div className={"winning-song-description"}>
                        {WINNING_SONG_TEXT}
                    </div>

                    <div>
                        {winningSong.name}
                    </div>
                </div> :
                <CircularSpinner/>
            }
        </div>
    )
}