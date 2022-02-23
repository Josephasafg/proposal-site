import React, {useEffect, useState} from "react";
import "./welcome-page.css";
import {Button, Divider,} from "@material-ui/core";
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import {useHistory} from "react-router-dom";
import {VOTE_PATH} from "../../../survey/API/url-paths";

const useDividerStyles = makeStyles((_: Theme) =>
    createStyles({
        root: {
            margin: 25,
            color: "#97845d",
            backgroundColor: "rgb(159, 167, 128)",
        },

    }),
);

const useButtonStyles = makeStyles((_: Theme) =>
    createStyles({
        root: {
            backgroundColor: "rgb(232, 231, 211)",
            color: "#97845d",
            width: 120,
            fontSize: 18,
            fontWeight: "bold"
        },

    }),
);


export const WelcomePage: React.FC = () => {
    const dividerStyle = useDividerStyles();
    const buttonStyle = useButtonStyles();
    const [toVote, setToVote] = useState(false);
    const history = useHistory();

    useEffect(() => {
        if (toVote) {
            history.push(VOTE_PATH);
        }
    }, [toVote, history])

    return (
        <div>
            <div className={"page-wrapper"}>
                <div className={"first-header"}>
                    כאן תוכלו להכניס כל טקסט שתרצו, אבל זו ההמלצה שלנו:
                </div>

                <div className={"second-header"}>
                    אתם תבחרו לאיזה שיר נשבור את הכוס!
                </div>
                <Divider className={dividerStyle.root}/>

                <div className={"paragraph"}>
                    <div>
                        בעמוד הבא יופיעו ארבעה שירים.
                        <br/>
                        בחרו שיר שבירת כוס אחד
                        <br/>
                        שתרצו שנחגוג איתו
                        <br/>
                    </div>

                    <br/>
                    <br/>
                    <div>
                        השיר שיזכה במירב הקולות יהיה
                        <br/>
                        <span className={"glass-breaking-text"}>
                    שיר שבירת הכוס שלנו.
                </span>
                    </div>

                    <br/>
                </div>


                <br/>
                🎉 LET THE PARTY BEGIN
                <br/>
                <br/>

                <Button className={buttonStyle.root} onClick={() => setToVote(true)}>
                    להצבעה
                </Button>

            </div>
        </div>
    )
}