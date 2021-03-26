// @ts-ignore
import BACKGROUND_MUSIC_URL from "resources\\audio\\yesSong.mp3";
import React from "react";
// import logo from "../resources/audio/rocket.png";
import {AnswerButton, ButtonColor} from "./button/answer-button";
import useSound from "use-sound";
// const BACKGROUND_MUSIC_URL = require("../resources/audio/yesSong.mp3");

export const Test = () => {
    const [play] = useSound(BACKGROUND_MUSIC_URL, {volume: 0.5});

    return (
        <div>
            {/*<img src={logo}/>*/}

            <AnswerButton text={"Song"}
                          color={ButtonColor.Red}
                          onClick={() => {
                              console.log("playing");
                              play();
                          }}
            />

        </div>
    )
}