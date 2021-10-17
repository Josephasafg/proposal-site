import React, {createContext, useContext, useState} from 'react';
import './survey.css';
import {useHistory} from "react-router-dom";
import {SongsAPI} from "../../survey/API/api";
import {ThankYouPage} from "../../survey/components/thank-you-page/thank-you-page";
import {MainPage} from "../../survey/components/main-page/main-page";
import {HashLoader} from "../../survey/components/spinner/spinner";
import {FetchedSongs} from "../../survey/survey-layout";


export const SongSubmissionContext = createContext({
    id: -1, updateSong: (_: number) => {
    }
});

function SurveyPage() {
    const [pickedSong, setPickedSong] = useState(-1);
    const [hasSubmitted, setHasSubmitted] = useState(false);
    const {isFetchingSongs, songs} = useContext(FetchedSongs);

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
        if (!isFetchingSongs) {
            return <MainPage onSubmit={onSubmit} songs={songs}/>
        }

    }

    return (
        <SongSubmissionContext.Provider value={{updateSong: setPickedSong, id: pickedSong}}>
            <div>

                {hasSubmitted ? redirectToPage("/survey/thank-you", <ThankYouPage/>) : renderSurvey()}
                <HashLoader isLoading={isFetchingSongs}/>
            </div>
        </SongSubmissionContext.Provider>
    );
}

export default SurveyPage;