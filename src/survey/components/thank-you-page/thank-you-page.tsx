import React from "react";
import "./thank-you.css";

const THANK_YOU_TEXT = "גם כאן תוכלו לבחור איזה טקסט שתרצו";
const US_TEXT = "אוהבים,"
const US_TEXT2 = "Xו Y"

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