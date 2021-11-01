import React from "react";
import "./song.css";
import {Song} from "../../../models/song";
// import BELIEVER from "./images/believer.jpg";
// import HIGH_HOPES from "./images/High_Hopes.jpg";
// import HALLELUJAH from "./images/hallelujah.jpg";
// import BEAUTIFUL_DAYS from "./images/beautiful_days.jpg";
// @ts-ignore
// import ReactRoundedImage from "react-rounded-image";


// const SONG_IMAGES: { [key: number]: string } = {
//     1: BELIEVER,
//     2: HIGH_HOPES,
//     3: BEAUTIFUL_DAYS,
//     4: HALLELUJAH,
// }

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
        <div className="img-wrapper">
            Asaf
            {/*<ReactRoundedImage*/}
            {/*    imageWidth="50"*/}
            {/*    roundedSize="0"*/}
            {/*    imageHeight="50"*/}
            {/*    image={SONG_IMAGES[song.id]}/>*/}
        </div>
    )
}