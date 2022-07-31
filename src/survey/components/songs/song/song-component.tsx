import React from "react";
import "./song.css";
import {Song} from "../../../models/song";

// @ts-ignore
import ReactRoundedImage from "react-rounded-image";
import {ColorChoice} from "../../../models/color";


interface SongProps {
    colorChoice: ColorChoice
}

export const SongComponent: React.FC<SongProps> = (
    {
        colorChoice
    }) => {

    return (
        <div className="img-wrapper">
            <ReactRoundedImage
                imageWidth="50"
                roundedSize="0"
                imageHeight="50"/>
        </div>
    )
}