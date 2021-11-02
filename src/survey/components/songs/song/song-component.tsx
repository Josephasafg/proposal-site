import React from "react";
import "./song.css";
import {Song} from "../../../models/song";

// @ts-ignore
import ReactRoundedImage from "react-rounded-image";


interface SongProps {
    song: Song
}

export const SongComponent: React.FC<SongProps> = (
    {
        song
    }) => {

    return (
        <div className="img-wrapper">
            <ReactRoundedImage
                imageWidth="50"
                roundedSize="0"
                imageHeight="50"
                image={song.embeddedURL}/>
        </div>
    )
}