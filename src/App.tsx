import React from 'react';
import {Redirect, Route, Switch} from "react-router-dom";
import {ProposalPage} from "./pages/proposal/propsal-page";
import SurveyPage from "./pages/survey/survey-page";
import {WelcomePage} from "./pages/survey/welcome-page/welcome-page";


function App() {
    return (
        <Switch>
            <Route exact path="/proposal">
                <ProposalPage/>
            </Route>

            <Route exact path="/survey/vote">
                <SurveyPage/>
            </Route>

            <Route exact path={"/survey/welcome-page"}>
                <WelcomePage/>
            </Route>

            <Redirect from="/" to={"/survey/welcome-page"} exact={true}/>

        </Switch>
    )
}

export default App;
