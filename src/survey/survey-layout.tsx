import React from "react";
import "./survey-layout.css";

interface SurveyLayoutProps {
    className: string
    children: JSX.Element
}

export const SurveyLayout: React.FC<SurveyLayoutProps> = (
    {
        className,
        children
    }
) => {
    return (
        <div className={className}>
            {children}
        </div>
    )
}