import React from "react";
import "./survey-layout.css";

interface SurveyLayoutProps {
    children: JSX.Element
}

export const SurveyLayout: React.FC<SurveyLayoutProps> = (
    {
        children
    }
) => {
    return (
        <div className="survey-app">
            {children}
        </div>
    )
}