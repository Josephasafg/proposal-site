import React, {useEffect, useState} from "react";
import "./welcome-page.css";
import {Button, Divider, TextField,} from "@material-ui/core";
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
            backgroundColor: "rgb(255, 255, 255)",
            color: "#97845d",
            width: 120,
            fontSize: 18,
            fontWeight: "bold"
        },

    }),
);


const useTextboxStyles = makeStyles((_: Theme) =>
    createStyles({
        root: {
            backgroundColor: "rgb(255, 255, 255)",
            margin: "10px 10px",
        },

    }),
);


export const WelcomePage: React.FC = () => {
    const dividerStyle = useDividerStyles();
    const buttonStyle = useButtonStyles();
    const textboxStyle = useTextboxStyles();
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
                    הצביעו והשפיעו!
                </div>

                <Divider className={dividerStyle.root}/>

                <div className={"paragraph"}>
                    <div>
                        קראתם כבר את כל הספרים?
                        <br/>
                        לא יכולים לחכות לספר הבא שעתיד לצאת בחנוכה?
                        <br/>
                        זאת ההזדמנות שלכם להשפיע על מה יהיה צבע הכריכה של הספר!
                        <br/>
                    </div>

                    <br/>
                    <br/>
                    <div>
                        מה שמך?
                        <br/>
                        <TextField className={textboxStyle.root} id="filled-basic" variant="filled" />
                    </div>

                    <br/>
                </div>

                <Button className={buttonStyle.root} onClick={() => setToVote(true)}>
                    להצבעה
                </Button>

            </div>
        </div>
    )
}