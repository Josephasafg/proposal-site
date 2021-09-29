import React, {useContext, useState} from "react";
import SongList from "../songs/songs";
import {CircularSpinner} from "../spinner/spinner";
import {SubmitButton} from "../submit-button/submit-button";
import {Song} from "../../models/song";
import {VoteCountdown} from "../countdown-clock/countdown-clock";
import {SongSubmissionContext} from "../../../pages/survey/survey-page";
import "./main-page.css";

const HELP_US_TEXT = "עוזרים לאסף ושרון לבחור שיר לשבירת הכוס!";
const HELP_US_DESCRITPION = 'בחרו שיר אחד מתוך הרשימה';
const HELP_US_DESCRITPION2 = "ולחצו לשלוח לדיג'יי";

interface MainPageProps {
    onSubmit: () => void
    songs: Song[]
}

export const MainPage: React.FC<MainPageProps> = (
    {
        onSubmit,
        songs
    }) => {

    const {id} = useContext(SongSubmissionContext);
    const [isLoad, setIsLoad] = useState(false);

    const handleOnSubmit = async () => {
        setIsLoad(true);
        await onSubmit();
        setIsLoad(false);
    }

    return (
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
    )
}