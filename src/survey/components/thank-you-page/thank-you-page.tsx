import React from "react";
import "./thank-you.css";

const THANK_YOU_TEXT = "תודה על הצבעתכם, עכשיו לכו תהנו!";
const US_TEXT = "אוהבים,"
const US_TEXT2 = "אסף ושרון"

export const ThankYouPage: React.FC = () => {
    return (
        <div>
            <div className={"text-wrapper"}>
                <div>
                    {THANK_YOU_TEXT}
                </div>

                <br/>
                <div>
                    {US_TEXT}
                </div>
                <div>
                    {US_TEXT2}
                </div>
            </div>
        </div>
    )
}