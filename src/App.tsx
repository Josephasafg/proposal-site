import React from 'react';
import {Redirect, Route, Switch} from "react-router-dom";
import {ProposalPage} from "./pages/proposal/propsal-page";
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


function App() {

    return (
        <Switch>
            {/*<Route exact path="/proposal">*/}
            {/*    <ProposalPage/>*/}
            {/*</Route>*/}

            <Route path={THANK_YOU_PAGE_PATH}>
                <SurveyLayout>
                    <ThankYouPage/>
                </SurveyLayout>
            </Route>

            <Route path={VOTE_PATH}>
                <SurveyLayout>
                    <SurveyPage/>
                </SurveyLayout>
            </Route>

            <Route path={WELCOME_PAGE_PATH}>
                <SurveyLayout>
                    <WelcomePage/>
                </SurveyLayout>
            </Route>


            <Route path={WINNING_PAGE_PATH}>
                <SurveyLayout>
                    <WinningSong/>
                </SurveyLayout>
            </Route>

            <Route path={VOTING_HAS_ENDED_PAGE}>
                <SurveyLayout>
                    <VoteEnd/>
                </SurveyLayout>
            </Route>

            <Redirect from="/" to={WELCOME_PAGE_PATH} exact={true}/>

        </Switch>
    )
}

export default App;
