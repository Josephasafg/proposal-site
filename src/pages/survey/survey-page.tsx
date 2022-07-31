import React, {createContext, useState} from 'react';
import {SongsAPI} from "../../survey/API/api";
import {MainPage} from "../../survey/components/main-page/main-page";
import {Color, ColorChoice} from "../../survey/models/color";

export const ColorSubmissionContext = createContext({
    id: Color.Orange, updateColor: (_: Color) => {
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
    const [pickedColor, setPickedColor] = useState(Color.Orange);

    const onSubmit = async (): Promise<boolean> => {
        return await SongsAPI.submitChoice(pickedColor);
    }

    return (
        <ColorSubmissionContext.Provider value={{updateColor: setPickedColor, id: pickedColor}}>
            <div>
                <MainPage onSubmit={onSubmit} colors={COLORS}/>
            </div>
        </ColorSubmissionContext.Provider>
    );
}

export default SurveyPage;