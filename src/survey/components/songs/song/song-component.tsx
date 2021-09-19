import React from "react";
import "./song.css";
import Iframe from "react-iframe";
import {Song} from "../../../models/song";


interface SongProps {
    song: Song
    isChecked: boolean
    onChange: (event: any) => void
}

export const SongComponent: React.FC<SongProps> = (
    {
        song
    }) => {

    return (
        <div className="song-wrapper">
            <Iframe
                className={"song-frame"}
                url={song.embeddedURL}
                width="80"
                height="70"
                frameBorder={0}
                allow="encrypted-media"/>
        </div>
    )
}