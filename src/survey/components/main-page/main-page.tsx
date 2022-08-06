import React, {useContext, useEffect, useState} from "react";
import SongList from "../songs/songs";
import {SubmitButton} from "../submit-button/submit-button";
import {ColorSubmissionContext} from "../../../pages/survey/survey-page";
import "./main-page.css";
import {THANK_YOU_PAGE_PATH} from "../../API/url-paths";
import {ColorChoice} from "../../models/color";
import {useNavigate} from "react-router-dom";

const HELP_US_TEXT = "נא לבחור צבע אחד מהרשימה";

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
    const history = useNavigate();

    const handleOnSubmit = async () => {
        setIsLoad(true);
        const hasSuccessfulSubmission = await onSubmit();
        setIsLoad(false);
        setHasSubmitted(hasSuccessfulSubmission)
    }

    useEffect(() => {
        if (hasSubmitted) {
            history(THANK_YOU_PAGE_PATH);
        }
    }, [hasSubmitted, history])

    return (
        <div>
            <div className="help-us-header">
                <div className={"help-us-text"}>{HELP_US_TEXT}</div>
            </div>

            <SongList colors={colors}/>
            <div>

            </div>
            <SubmitButton onClick={handleOnSubmit} pickedColor={id} isLoad={isLoad}/>
        </div>
    )
}