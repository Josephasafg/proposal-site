import React from "react";
import Countdown, {zeroPad} from "react-countdown";
import "./countdown-clock.css";
import {CHOSEN_SONG_DATE} from "../../ending-vote-time";


interface InnerCountdownProps {
    hours: number
    minutes: number
    seconds: number
    completed: boolean
    total: number
    formatted: { days: string, hours: string, minutes: string, seconds: string }
}

export const VoteCountdown: React.FC = () => {
    const Completionist = () => <div className={"finished-voting"}>ההצבעה הסתיימה!</div>;

// Renderer callback with condition
    const renderer = (countdownProps: InnerCountdownProps) => {
        const {hours, minutes, seconds, completed} = countdownProps;

        if (completed) {
            // Render a completed state
            return <Completionist/>;
        } else {
            // Render a countdown
            return <div className={"clock"}>
                {zeroPad(hours)}:{zeroPad(minutes)}:{zeroPad(seconds)}
            </div>;
        }
    };


    return (
        <div>
            <Countdown date={CHOSEN_SONG_DATE}
                       renderer={renderer}/>

        </div>
    )
}