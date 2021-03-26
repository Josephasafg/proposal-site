import React, {useEffect, useState} from 'react';
import './App.css';
import {AnswerButton, ButtonColor} from "./components/button/answer-button";
import ClearIcon from '@material-ui/icons/Clear';
import FavoriteIcon from '@material-ui/icons/Favorite';

import {Howl} from 'howler';
// @ts-ignore
import BackgroundSong from "./resources/audio/yesSong.mp3";
import Fireworks from "fireworks/lib/react";
import TextTransition, {presets} from "react-text-transition";
import Emoji from './components/emoji';


const MARRY_YOU_URL = "https://www.youtube.com/watch?v=Zlv1rdcpS9M";

const PHRASES = [
    "This is it ",
    "After Almost 8 years...",
    "After traveling to a lot of places together...",
    "After eating so much good food...",
    "After gaining a ton of experirences together... ",
    "After adopting Pixel...",
    "The time has finally come",
    "Sharon",
    "Shay Shay",
    "Vanilla bonbon",
    "ChooChi",
    "Will you marry me?",
]

const HEBREW_PHRASES = [
    "זהו זה",
    "אחרי כמעט 8 שנים... 😮",
    "אחרי 2 דירות...🏠",
    "אחרי 3 תארים...🎓",
    'אחרי המון טיולים בארץ ובחו"ל...🗺',
    "אחרי טיולים בארהב בלי אחד והשניה...",
    "אחרי המון הופעות שהיינו יחד...🎸🎺",
    "אחרי שפיקסל התווספה אלינו...🐶",
    "אחרי אינספור מסעדות ואוכל טעים שאכלנו...🍱🍰",
    "אחרי כל השרתונים בעולם שביקרנו בהם...🏨",
    "אחרי מלא שבתות של רוגע וכיף בבית....🌅",
    "אחרי אין ספור סדרות...📺",
    "אחרי שני ילדים שעבדו בארומה יחד...☕",
    "ושעוד נזכה לאין ספור אחרי",
    "אז, אחרי, אחרי ואחרי, נו תגיע כבר לנקודה!!!⛏",
    "אז הנה, אנחנו כמעט שם...",
    "הנקודה שלי...",
    "הנקודה שלנו...",
    "הנקודה שאולי הרבה מהחברים שלנו כבר עברו",
    "ועכשיו הגיע תורנו... אני מקווה 😊",
    "שרוני שלי❤",
    "שיי שיי",
    "יפה שלי",
    "ונילה בון בון",
    "צ'וצ'י שלי",
    "התינשאי לי?💍",
]
const TEXT_INTERVAL = 500;


let fxProps = {
    count: 5,
    interval: 200,
    colors: ['#4e2a84', '#3cff00', '#fff400', "#f00"],
    calc: (props: any, i: number) => ({
        ...props,
        x: (i + 1) * (window.innerWidth / 4) - (i + 1) * 100,
        y: 300 + Math.random() * 100 - 50 + (i === 2 ? -80 : 0)
    })
}

function App() {
    const [buttonX, setButtonX] = useState(0);
    const [buttonY, setButtonY] = useState(0);
    const [marryYouID, setMarryYouID] = useState<number>();
    const [showFireWorks, setShowFireWorks] = useState(false);
    const [textIndex, setTextIndex] = useState(0);
    const [intervalID, setIntervalID] = useState<any>();


    const sound = new Howl({
        src: [BackgroundSong]
    });

    useEffect(() => {
        const intervalId = setInterval(() =>
                setTextIndex(index => index + 1),
            TEXT_INTERVAL // every 3 seconds
        );

        setIntervalID(intervalId);

        return () => clearTimeout(intervalId)
    }, [])

    useEffect(() => {
        if (isTextTransitionFinished()) {
            clearInterval(intervalID)
        }
    }, [textIndex])

    // useEffect(() => {
    //     // Playing song in the background on first render
    //     sound.play();
    // }, [])


    const onYesClick = (): void => {
        if (marryYouID) {
            sound.stop(marryYouID);
            setMarryYouID(-1);
        } else {
            const songID = sound.play();
            setMarryYouID(songID);
            setShowFireWorks(true);
        }
    }

    const onNoButtonHover = (event: MouseEvent) => {
        const randY = Math.floor((Math.random() * event.clientY) + 1);
        const randX = Math.floor((Math.random() * event.clientX) + 1);
        setButtonX(randX);
        setButtonY(randY);
    }

    const isTextTransitionFinished = (): boolean => {
        return textIndex % HEBREW_PHRASES.length === HEBREW_PHRASES.length - 1;
    }

    return (
        <div className="App">
            <header className="App-header">
                <TextTransition text={HEBREW_PHRASES[textIndex % HEBREW_PHRASES.length]}
                                springConfig={presets.wobbly}/>


            </header>

            <div>
                {isTextTransitionFinished() ? <div className={"button-wrapper"}><AnswerButton text={"No"}
                                                            color={ButtonColor.Red}
                                                            x={buttonX}
                                                            y={buttonY}
                                                            onHover={onNoButtonHover}
                                                            icon={<ClearIcon/>}/>


                    <AnswerButton text={"Yes"}
                                  color={ButtonColor.Green}
                                  icon={<FavoriteIcon/>}
                                  onClick={onYesClick}/></div>: <></>}

                {showFireWorks && <Fireworks {...fxProps} />}
            </div>
        </div>
    );
}

export default App;
