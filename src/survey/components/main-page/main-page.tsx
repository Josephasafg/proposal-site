import React, {useContext, useEffect, useState} from "react";
import SongList from "../songs/songs";
import {CircularSpinner} from "../spinner/spinner";
import {SubmitButton} from "../submit-button/submit-button";
import {Song} from "../../models/song";
import {VoteCountdown} from "../countdown-clock/countdown-clock";
import {SongSubmissionContext} from "../../../pages/survey/survey-page";
import "./main-page.css";
import {ThankYouPage} from "../thank-you-page/thank-you-page";
import {useHistory} from "react-router-dom";

const HELP_US_TEXT = "שוברים את הכוס!";
const HELP_US_DESCRITPION = 'בחרו שיר מתוך הרשימה';
const HELP_US_DESCRITPION2 = "ולחצו לשלוח לדיג'יי";

interface MainPageProps {
    onSubmit: () => Promise<boolean>
    songs: Song[]
}

export const MainPage: React.FC<MainPageProps> = (
    {
        onSubmit,
        songs
    }) => {

    const {id} = useContext(SongSubmissionContext);
    const [isLoad, setIsLoad] = useState(false);
    const [hasSubmitted, setHasSubmitted] = useState(false);

    const handleOnSubmit = async () => {
        setIsLoad(true);
        const hasSuccessfulSubmission = await onSubmit();
        setIsLoad(false);
        setHasSubmitted(hasSuccessfulSubmission)
    }

    useEffect(() => {

    }, [hasSubmitted])

    return (
        <div className={"site-background"}>
            {hasSubmitted ? <ThankYouPage/> :
                <div>
                    <div className="help-us-header">
                        <div className={"help-us-text"}>{HELP_US_TEXT}</div>
                        <div className={"help-us-description"}>{HELP_US_DESCRITPION}</div>
                        <div className={"help-us-description"}>{HELP_US_DESCRITPION2}</div>
                    </div>

                    <SongList songs={songs}/>
                    <div className={"vote-countdown-wrapper"}>
                        <VoteCountdown/>
                    </div>
                    {isLoad ? <CircularSpinner/> : <SubmitButton onClick={handleOnSubmit} pickedSongId={id}/>}
                </div>
            }

        </div>
    )
}