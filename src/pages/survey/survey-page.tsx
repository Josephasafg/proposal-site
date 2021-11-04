import React, {createContext, useState} from 'react';
import {SongsAPI} from "../../survey/API/api";
import {MainPage} from "../../survey/components/main-page/main-page";
import {Song} from "../../survey/models/song";

import BELIEVER from "../../resources/believer.jpg";
import HIGH_HOPES from "../../resources/High_Hopes.jpg";
import HALLELUJAH from "../../resources/hallelujah.jpg";
import BEAUTIFUL_DAYS from "../../resources/beautiful_days.jpg";

export const SongSubmissionContext = createContext({
    id: -1, updateSong: (_: number) => {
    }
});

const LOCAL_SONGS: Song[] = [
    {
        id: 1,
        name: "I'm a Believer - Smash Mouth",
        count: "0",
        embeddedURL: BELIEVER
    },
    {
        id: 2,
        name: "High Hopes - Panic! At The Disco",
        count: "0",
        embeddedURL: HIGH_HOPES
    },
    {
        id: 4,
        name: "Sing Hallelujah! - Dr. Alban",
        count: "0",
        embeddedURL: HALLELUJAH
    },
    {
        id: 3,
        name: "ימים יפים - מועדון הקצב של אביהו פנחסוב",
        count: "0",
        embeddedURL: BEAUTIFUL_DAYS
    }
]

function SurveyPage() {
    const [pickedSong, setPickedSong] = useState(-1);

    const onSubmit = async (): Promise<boolean> => {
        return await SongsAPI.submitChoice(pickedSong);
    }

    return (
        <SongSubmissionContext.Provider value={{updateSong: setPickedSong, id: pickedSong}}>
            <div>
                <MainPage onSubmit={onSubmit} songs={LOCAL_SONGS}/>
            </div>
        </SongSubmissionContext.Provider>
    );
}

export default SurveyPage;