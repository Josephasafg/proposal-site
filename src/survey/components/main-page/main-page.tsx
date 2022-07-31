import React, {useContext, useEffect, useState} from "react";
import SongList from "../songs/songs";
import {CircularSpinner} from "../spinner/spinner";
import {SubmitButton} from "../submit-button/submit-button";
import {VoteCountdown} from "../countdown-clock/countdown-clock";
import {ColorSubmissionContext} from "../../../pages/survey/survey-page";
import "./main-page.css";
import {useHistory} from "react-router-dom";
import {THANK_YOU_PAGE_PATH} from "../../API/url-paths";
import {ColorChoice} from "../../models/color";

const HELP_US_TEXT = "בוחרים צבע מתוך הצבעים הבאים";

interface MainPageProps {
    onSubmit: () => Promise<boolean>
    colors: ColorChoice[]
}

export const MainPage: React.FC<MainPageProps> = (
    {
        onSubmit,
        colors
    }) => {

    const {id} = useContext(ColorSubmissionContext);
    const [isLoad, setIsLoad] = useState(false);
    const [hasSubmitted, setHasSubmitted] = useState(false);
    const history = useHistory();

    const handleOnSubmit = async () => {
        setIsLoad(true);
        const hasSuccessfulSubmission = await onSubmit();
        setIsLoad(false);
        setHasSubmitted(hasSuccessfulSubmission)
    }

    useEffect(() => {
        if (hasSubmitted) {
            history.push(THANK_YOU_PAGE_PATH);
        }
    }, [hasSubmitted, history])

    return (
        <div>
            <div>
                <div className="help-us-header">
                    <div className={"help-us-text"}>{HELP_US_TEXT}</div>
                </div>

                <SongList colors={colors}/>
                {isLoad ? <CircularSpinner/> : <SubmitButton onClick={handleOnSubmit} pickedColor={id}/>}
            </div>

        </div>
    )
}