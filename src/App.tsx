import React from 'react';
import {Redirect, Route, Switch} from "react-router-dom";
import {ProposalPage} from "./pages/proposal/propsal-page";
import SurveyPage from "./pages/survey/survey-page";


function App() {
    return (
        <Switch>
            <Route exact path="/proposal">
                <ProposalPage/>
            </Route>

            <Route exact path="/survey">
                <SurveyPage/>
            </Route>

            <Redirect from="/" to={"/survey"} exact={true}/>

        </Switch>
    )
}

export default App;
