import React, {useEffect} from "react";
import "./thank-you.css";
import { useNavigate } from 'react-router-dom'
import {WELCOME_PAGE_PATH} from "../../API/url-paths";


const THANK_YOU_TEXT = "תודה רבה על הצבעתך!";

export const ThankYouPage: React.FC = () => {
    const navigate = useNavigate();
    useEffect(() => {
        setTimeout(() => {
            navigate(WELCOME_PAGE_PATH);
        }, 5000)
    })

    return (
        <div className={"thank-you-container"}>
            <div className={"text-wrapper"}>
                <div>
                    {THANK_YOU_TEXT}
                </div>
            </div>
        </div>
    )
}