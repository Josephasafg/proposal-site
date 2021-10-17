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
    const [isPageLoading, setIsPageLoading] = useState(false);
    const [fetchedSongs, setFetchedSongs] = useState<Song[]>([]);

    return (
        <FetchedSongs.Provider value={{
            songs: fetchedSongs as any,
            setSongs: setFetchedSongs,
            isFetchingSongs: isPageLoading,
            setIsFetchingSongs: setIsPageLoading
        }}>

            <div className="SurveyApp">
                {children}
            </div>
        </FetchedSongs.Provider>

    )
}