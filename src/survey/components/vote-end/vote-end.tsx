import React from "react";
import "./vote-end.css";

const VOTING_HAS_ENDED_TEXT = "ההצבעה הסתיימה!"
const VOTING_END_DESCRIPTION = "תודה שעזרתם לנו לבחור את שיר שבירת הכוס!"

export const VoteEnd: React.FC = () => {
    return (
        <div className={"vote-end-wrapper"}>
            {VOTING_HAS_ENDED_TEXT}

            <div>
                {VOTING_END_DESCRIPTION}
            </div>
        </div>
    )
}