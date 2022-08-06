import React, {createContext, useState} from 'react';
import {SongsAPI} from "../../survey/API/api";
import {MainPage} from "../../survey/components/main-page/main-page";
import {Color, ColorChoice} from "../../survey/models/color";

export const ColorSubmissionContext = createContext({
    id: -1, updateColor: (_: Color) => {
    }
});

const COLORS: ColorChoice[] = [
    {
        color: Color.Orange,
        name: "כתום",
        hex: "#FF8C00",
    },
    {
        color: Color.Gray,
        name: "אפור",
        hex: "#808080",
    },
    {
        color: Color.Pink,
        name: "ורוד",
        hex: "#ff5588",
    },
    {
        color: Color.Black,
        name: "שחור",
        hex: "#191919",
    },

]

function SurveyPage() {
    const [pickedColor, setPickedColor] = useState(-1);

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