import React from "react";
import "./thank-you.css";

const THANK_YOU_TEXT = "תודה רבה על הצבעתך!";

export const ThankYouPage: React.FC = () => {
    return (
        <div>
            <div className={"text-wrapper"}>
                <div>
                    {THANK_YOU_TEXT}
                </div>
            </div>
        </div>
    )
}