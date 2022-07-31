import React, {createContext, useState} from 'react';
import {SongsAPI} from "../../survey/API/api";
import {MainPage} from "../../survey/components/main-page/main-page";
import {Color, ColorChoice} from "../../survey/models/color";

export const SongSubmissionContext = createContext({
    id: -1, updateSong: (_: number) => {
    }
});

const COLORS: ColorChoice[] = [
    {
        color: Color.Orange,
        name: "כתום"
    },
    {
        color: Color.Gray,
        name: "אפור"
    },
    {
        color: Color.Black,
        name: "שחור"
    },
    {
        color: Color.Pink,
        name: "ורוד"
    }
]

function SurveyPage() {
    const [pickedSong, setPickedSong] = useState(-1);

    const onSubmit = async (): Promise<boolean> => {
        return await SongsAPI.submitChoice(pickedSong);
    }

    return (
        <SongSubmissionContext.Provider value={{updateSong: setPickedSong, id: pickedSong}}>
            <div>
                <MainPage onSubmit={onSubmit} colors={COLORS}/>
            </div>
        </SongSubmissionContext.Provider>
    );
}

export default SurveyPage;