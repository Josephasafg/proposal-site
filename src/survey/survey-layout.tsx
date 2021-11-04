import React, {createContext, useState} from "react";
import "./survey-layout.css";
import {Song} from "./models/song";

interface SurveyLayoutProps {
    children: JSX.Element
}


export const FetchedSongs = createContext({
    songs: [], setSongs: (_: Song[]) => {
    }, isFetchingSongs: false, setIsFetchingSongs: (_: boolean) => {
    }
});

export const SurveyLayout: React.FC<SurveyLayoutProps> = (
    {
        children
    }
) => {
    return (
        <div className="SurveyApp">
            {children}
        </div>
    )
}