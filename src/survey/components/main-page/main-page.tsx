import React, {useContext, useEffect, useState} from "react";
import SongList from "../songs/songs";
import {CircularSpinner} from "../spinner/spinner";
import {SubmitButton} from "../submit-button/submit-button";
import {Song} from "../../models/song";
import {VoteCountdown} from "../countdown-clock/countdown-clock";
import {SongSubmissionContext} from "../../../pages/survey/survey-page";
import "./main-page.css";
import {useHistory} from "react-router-dom";
import {THANK_YOU_PAGE_PATH} from "../../API/url-paths";

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
    const history = useHistory();

    const handleOnSubmit = async () => {
        setIsLoad(true);
        const hasSuccessfulSubmission = await onSubmit();
        if (!hasSuccessfulSubmission) {
            alert("SOME ERROR")
        }
        setIsLoad(false);
        setHasSubmitted(hasSuccessfulSubmission)
    }

    useEffect(() => {
        if (hasSubmitted) {
            alert("PUSHING")
            history.push(THANK_YOU_PAGE_PATH);
        }
    }, [hasSubmitted, history])

    return (
        <div>
            <div>
                <div className="help-us-header">
                    <div className={"help-us-text"}>{HELP_US_TEXT}</div>
                    <div>{HELP_US_DESCRITPION}</div>
                    <div>{HELP_US_DESCRITPION2}</div>
                </div>

                <SongList songs={songs}/>
                <div className={"vote-countdown-wrapper"}>
                    <VoteCountdown/>
                </div>
                {isLoad ? <CircularSpinner/> : <SubmitButton onClick={handleOnSubmit} pickedSongId={id}/>}
            </div>

        </div>
    )
}