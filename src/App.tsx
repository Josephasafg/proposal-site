import React, {useState} from 'react';
import './App.css';
import {AnswerButton, ButtonColor} from "./components/button/answer-button";
import ClearIcon from '@material-ui/icons/Clear';
import FavoriteIcon from '@material-ui/icons/Favorite';

import {Howl} from 'howler';
// @ts-ignore
import BackgroundSong from "./resources/audio/yesSong.mp3";

const MARRY_YOU_URL = "https://www.youtube.com/watch?v=Zlv1rdcpS9M";


function App() {
    const [buttonX, setButtonX] = useState(0);
    const [buttonY, setButtonY] = useState(0);
    const [marryYouID, setMarryYouID] = useState<number>();

    const sound = new Howl({
        src: [BackgroundSong]
    });

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
        }

    }

    const onNoButtonHover = (event: MouseEvent) => {
        const randY = Math.floor((Math.random() * event.clientY) + 1);
        const randX = Math.floor((Math.random() * event.clientX) + 1);
        setButtonX(randX);
        setButtonY(randY);
    }

    return (
        <div className="App">
            <header className="App-header">
                This is a Cool Project!
            </header>

            <div className={"button-wrapper"}>

                <AnswerButton text={"No"}
                              color={ButtonColor.Red}
                              x={buttonX}
                              y={buttonY}
                              onHover={onNoButtonHover}
                              icon={<ClearIcon/>}/>


                <AnswerButton text={"Yes"}
                              color={ButtonColor.Green}
                              icon={<FavoriteIcon/>}
                              onClick={onYesClick}/>
            </div>
        </div>
    );
}

export default App;
