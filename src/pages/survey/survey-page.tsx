import React, {createContext, useEffect, useState} from 'react';
import './survey.css';
import {useHistory} from "react-router-dom";
import {SongsAPI} from "../../survey/API/api";
import {ThankYouPage} from "../../survey/components/thank-you-page/thank-you-page";
import {MainPage} from "../../survey/components/main-page/main-page";
import {HashLoader} from "../../survey/components/spinner/spinner";
import {Song} from "../../survey/models/song";


export const SongSubmissionContext = createContext({
    id: -1, updateSong: (_: number) => {
    }
});

function SurveyPage() {
    const [pickedSong, setPickedSong] = useState(-1);
    const [hasSubmitted, setHasSubmitted] = useState(false);
    const [isPageLoading, setIsPageLoading] = useState(false);
    const [songs, setSongs] = useState<Song[]>([]);

    let history = useHistory();

    const onSubmit = async () => {
        const hasSuccessfulSubmission = await SongsAPI.submitChoice(pickedSong);
        setHasSubmitted(hasSuccessfulSubmission);
    }

    function redirectToPage(url: string, component: JSX.Element) {
        history.push(url);
        return component;
    }

    const renderSurvey = () => {
        if (!isPageLoading) {
            return <MainPage onSubmit={onSubmit} songs={songs}/>
        }

    }

    async function fetchSongs() {
        setIsPageLoading(true);
        const songs = await SongsAPI.getSongs();
        setIsPageLoading(false);
        setSongs(songs);
    }

    useEffect(() => {
        fetchSongs();
    }, [])

    return (
        <SongSubmissionContext.Provider value={{updateSong: setPickedSong, id: pickedSong}}>
            <div>

                {hasSubmitted ? redirectToPage("/survey/thank-you", <ThankYouPage/>) : renderSurvey()}
                <HashLoader isLoading={isPageLoading}/>
            </div>
        </SongSubmissionContext.Provider>
    );
}

export default SurveyPage;