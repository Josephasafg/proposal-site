import React, {createContext, useContext, useEffect, useState} from 'react';
import './survey.css';
import {useHistory} from "react-router-dom";
import {SongsAPI} from "../../survey/API/api";
import {MainPage} from "../../survey/components/main-page/main-page";
import {HashLoader} from "../../survey/components/spinner/spinner";
import {FetchedSongs} from "../../survey/survey-layout";
import {LOCAL_STORAGE_SONGS_KEY} from "../../survey/components/songs/consts";
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
    const {isFetchingSongs, songs, setSongs} = useContext(FetchedSongs);
    let history = useHistory();

    // useEffect(() => {
    //     if (songs.length === 0) {
    //         const stringSongs = localStorage.getItem(LOCAL_STORAGE_SONGS_KEY);
    //         if (stringSongs) {
    //             setSongs(JSON.parse(stringSongs));
    //         } else {
    //             history.push("/survey/welcome-page");
    //         }
    //
    //     }
    // }, [history])


    const onSubmit = async (): Promise<boolean> => {
        return await SongsAPI.submitChoice(pickedSong);
    }

    return (
        <SongSubmissionContext.Provider value={{updateSong: setPickedSong, id: pickedSong}}>
            <div className={"App"}>
                <MainPage onSubmit={onSubmit} songs={LOCAL_SONGS}/>
                <HashLoader isLoading={isFetchingSongs}/>
            </div>
        </SongSubmissionContext.Provider>
    );
}

export default SurveyPage;