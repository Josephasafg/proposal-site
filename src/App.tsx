import React from 'react';
import {Redirect, Route, Switch} from "react-router-dom";
import {ProposalPage} from "./pages/proposal/propsal-page";
import SurveyPage from "./pages/survey/survey-page";
import {WelcomePage} from "./pages/survey/welcome-page/welcome-page";
import {WinningSong} from './survey/components/winning-song/winning-song';
import {SurveyLayout} from "./survey/survey-layout";
import {ThankYouPage} from "./survey/components/thank-you-page/thank-you-page";


function App() {

    return (
        <Switch>
            <Route exact path="/proposal">
                <ProposalPage/>
            </Route>

            <Route exact path="/survey/vote">
                <SurveyLayout>
                    <SurveyPage/>
                </SurveyLayout>
            </Route>

            <Route exact path={"/survey/welcome-page"}>
                <SurveyLayout>
                    <WelcomePage/>
                </SurveyLayout>
            </Route>


            <Route exact path={"/survey/winning-song"}>
                <SurveyLayout>
                    <WinningSong/>
                </SurveyLayout>
            </Route>

            <Route exact path={"/survey/thank-you"}>
                <SurveyLayout>
                    <ThankYouPage/>
                </SurveyLayout>
            </Route>

            <Redirect from="/" to={"/survey/welcome-page"} exact={true}/>

        </Switch>
    )
}

export default App;
