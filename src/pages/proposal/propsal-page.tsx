import React, {useEffect, useState} from 'react';
import './proposal.css';

import {Howl} from 'howler';
// @ts-ignore
import YesSong from "../../resources/audio/yesSong.mp3";
// @ts-ignore
import BackgroundSong from "../../resources/audio/backgroundSong.mp3";
import TextTransition, {presets} from "react-text-transition";
import {useWindowSize} from 'react-use';
import Confetti from 'react-confetti'

// @ts-ignore
import {Scrambler} from "react-text-scrambler";
import {AnswerButton, ButtonColor} from "../../components/button/answer-button";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ClearIcon from "@material-ui/icons/Clear";

const anagrams = [`Sharon will you marry me`, `Marylou Sherri Womanly`];


const WILL_YOU_MARRY_ME_TEXT = "Sharon will you marry me";
const HEBREW_PHRASES = [
    "זהו זה",
    "אחרי כמעט 7 שנים... 😮",
    "אחרי 2 דירות...🏠",
    "אחרי 3 תארים...🎓",
    'אחרי המון טיולים בארץ ובחו"ל...🗺',
    "אחרי טיולים בארהב בלי אחד והשניה...",
    "אחרי המון הופעות שהיינו יחד...🎸🎺",
    "אחרי שפיקסל התווספה אלינו...🐶",
    "אחרי אין ספור מסעדות ואוכל טעים שאכלנו...🍱🍰",
    "אחרי כל השרתונים בעולם שביקרנו בהם...🏨",
    "אחרי מלא שבתות של רוגע וכיף בבית....🌅",
    "אחרי אין ספור סדרות...📺",
    "אחרי שנה של סגרים ובידודים...",
    "אחרי שכבר קנינו בערך את כל המכשירים האלקטורנים שצריך שיהיה ומעבר...",
    "אחרי שני ילדים שעבדו בארומה יחד...☕",
    "שמאז אגב אני טוען שהאוכל שלך טעים ואת רק אומרת לי שאני חנפן...",
    "אחרי שמצאנו מלא מקומות שהיינו רוצים לגור בהם (רישפון, סיאטל, צפון תל אביב, וכו')",
    "אחרי שסוף סוף הסכמת לעשות סקי!⛷❄ (ונהנת!)",
    "אחרי שגרמת לי לאכול דברים שמעולם לא חשבתי שאוכל...",
    "אחרי שקיבלת 100 במתמטיקה...(לעולם לא תתני לנו לשכוח)✏",
    "אחרי שלמדת מי הם Dire Straits!🎵🎸",
    'אחרי אין ספור משחקי "היית גרה כאן בשביל מיליון דולר?"💰',
    "ושעוד נזכה לאין ספור אחרי",
    "אז, אחרי, אחרי ואחרי, נו תגיע כבר לנקודה!!!⛏",
    "אז הנה, אנחנו כמעט שם...",
    "הנקודה שלי...",
    "הנקודה שלנו...",
    "הנקודה שאולי הרבה מהחברים שלנו כבר עברו",
    "ועכשיו הגיע תורנו... אני מקווה 😊",
    "שרוני שלי❤",
    "שיי שיי",
    "פז'לסטה שלי",
    "יפה שלי",
    "ונילה בון בון",
    "צ'וצ'י שלי",
    "אגב...",
    "כבר הבנת מה כתובת האתר אומרת?",
    "אזכיר לך מה היא",
    "Marylou Sherri womanly",
    "או במילים אחרות, בסגנון של טום רידל הלוא הוא לורד ולדמורט...",
]
const TEXT_INTERVAL = 4000;

const sound = new Howl({
    src: [BackgroundSong],
    volume: 1.2
});

const soundYes = new Howl({
    src: [YesSong]
});

export const ProposalPage = () => {
    const [buttonX, setButtonX] = useState(0);
    const [buttonY, setButtonY] = useState(0);
    const [showFireWorks, setShowFireWorks] = useState(false);
    const [textIndex, setTextIndex] = useState(0);
    const [intervalID, setIntervalID] = useState<any>();
    const {width, height} = useWindowSize();

    useEffect(() => {
        const intervalId = setInterval(() =>
                setTextIndex(index => index + 1),
            TEXT_INTERVAL
        );

        setIntervalID(intervalId);

        return () => clearTimeout(intervalId)
    }, [])

    useEffect(() => {
        if (isTextTransitionFinished()) {
            clearInterval(intervalID)
        }

    }, [textIndex, intervalID])

    useEffect(() => {
        // Playing song in the background on first render
        sound.play();
    }, [])

    const onYesClick = (event: MouseEvent): void => {
        sound.stop()
        soundYes.play();
        setShowFireWorks(true);
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

    const renderText = (): JSX.Element => {
        if (showFireWorks) {
            return <span>{WILL_YOU_MARRY_ME_TEXT}</span>
        }

        if (isTextTransitionFinished()) {
            return <Scrambler text={anagrams[0]}
                              changeFrom={anagrams[1]}
                              characters={anagrams[0].replace(" ", "")}/>
        }

        return <TextTransition text={HEBREW_PHRASES[textIndex % HEBREW_PHRASES.length]}
                               springConfig={presets.wobbly}/>
    }


    return (
        <div className="App">
            <div className="App-header">
                {renderText()}
            </div>
            <div>
                {isTextTransitionFinished() ?

                    <div className={"button-wrapper"}>
                        <AnswerButton text={"Yes"}
                                      color={ButtonColor.Green}
                                      icon={<FavoriteIcon/>}
                                      onClick={onYesClick}/>

                        <AnswerButton text={"No"}
                                      color={ButtonColor.Red}
                                      x={buttonX}
                                      y={buttonY}
                                      onHover={onNoButtonHover}
                                      icon={<ClearIcon/>}/>
                    </div> : <></>}
                {showFireWorks && <Confetti width={width} height={height}
                />}
            </div>
        </div>
    );
}