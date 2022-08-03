import React from 'react';

import {WelcomePage} from "./pages/survey/welcome-page/welcome-page";
import {WinningSong} from './survey/components/winning-song/winning-song';
import {SurveyLayout} from "./survey/survey-layout";
import {ThankYouPage} from "./survey/components/thank-you-page/thank-you-page";
import SurveyPage from "./pages/survey/survey-page";
import {
    THANK_YOU_PAGE_PATH,
    VOTE_PATH,
    VOTING_HAS_ENDED_PAGE,
    WELCOME_PAGE_PATH,
    WINNING_PAGE_PATH
} from "./survey/API/url-paths";
import {VoteEnd} from "./survey/components/vote-end/vote-end";
import { Route, Routes } from "react-router";
import {Navigate} from "react-router-dom";

function App() {
    return (
        <Routes>
            <Route path={VOTING_HAS_ENDED_PAGE} element={<SurveyLayout className={"survey-app"}><VoteEnd/></SurveyLayout>}/>

            <Route path={THANK_YOU_PAGE_PATH} element={<SurveyLayout className={"thank-you-container"}><ThankYouPage/></SurveyLayout>}/>

            <Route path={VOTE_PATH} element={    <SurveyLayout className={"survey-app"} ><SurveyPage/></SurveyLayout>}/>

            <Route path={WELCOME_PAGE_PATH} element={<SurveyLayout className={"survey-app"}><WelcomePage/></SurveyLayout>}/>
            <Route path={WINNING_PAGE_PATH} element={<SurveyLayout className={"survey-app"}><WinningSong/></SurveyLayout>}/>

            <Route path="/" element={<Navigate to={WELCOME_PAGE_PATH} />} />
        </Routes>
    )
}

export default App;
