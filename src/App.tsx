import React, {useState} from 'react';
import './App.css';
import {AnswerButton, ButtonColor} from "./components/button/answer-button";
import ClearIcon from '@material-ui/icons/Clear';
import FavoriteIcon from '@material-ui/icons/Favorite';
import {Test} from "./components/test";

const MARRY_YOU_URL = "https://www.youtube.com/watch?v=Zlv1rdcpS9M";
// const BACKGROUND_MUSIC_URL = "./src/resources/audio/Assaf.png";


function App() {
    const [buttonX, setButtonX] = useState(0);
    const [buttonY, setButtonY] = useState(0);
    // const [play] = useSound(BACKGROUND_MUSIC_URL, {volume: 0.5});


    const onYesRedirect = () => {
        window.location.assign(MARRY_YOU_URL);
        // window.open("", "_blank")
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

            <Test/>
            <div className={"button-wrapper"}>

                <AnswerButton text={"No"}
                              color={ButtonColor.Red}
                              x={buttonX}
                              y={buttonY}
                    // onClick={() => {
                    //     console.log("playing");
                    //     play();
                    // }}
                    // onHover={onNoButtonHover}
                              icon={<ClearIcon/>}/>


                <AnswerButton text={"Yes"}
                              color={ButtonColor.Green}
                              icon={<FavoriteIcon/>}
                              onClick={onYesRedirect}/>
            </div>
        </div>
    );
}

export default App;
