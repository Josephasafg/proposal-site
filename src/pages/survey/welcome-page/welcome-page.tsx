import React, {useEffect, useState} from "react";
import "./welcome-page.css";
import {Divider, Button} from "@material-ui/core";
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import {VOTE_PATH} from "../../../survey/API/url-paths";

import {useNavigate} from "react-router-dom";

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
            backgroundColor: "#FF8C00",
            color: "white",
            width: 250,
            height: 70,
            fontSize: 40,
            fontWeight: "bold",
            marginTop: "90px",

            '&:hover': {
                backgroundColor: "#cf7100"
            }
        },



    }),
);


// const useTextboxStyles = makeStyles((_: Theme) =>
//     createStyles({
//         root: {
//             backgroundColor: "rgb(255, 255, 255)",
//             margin: "10px 10px",
//             '& .MuiOutlinedInput-root': {
//                 width: "400px",
//             }
//         },
//
//     }),
// );


export const WelcomePage: React.FC = () => {
    const dividerStyle = useDividerStyles();
    const buttonStyle = useButtonStyles();
    // const textboxStyle = useTextboxStyles();
    const [toVote, setToVote] = useState(false);
    const history = useNavigate();

    useEffect(() => {
        if (toVote) {
            history(VOTE_PATH);
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
                        <br/>
                        זאת ההזדמנות שלכם להשפיע על צבע הכריכה של הספר!
                        <br/>
                    </div>

                    <br/>
                    <br/>
                    {/*<div className={"vote-text"}>*/}
                    {/*    מה שמך?*/}
                    {/*    <br/>*/}
                    {/*</div>*/}
                        {/*<TextField className={textboxStyle.root} variant="outlined" />*/}

                    <br/>
                </div>

                <Button className={buttonStyle.root} onClick={() => setToVote(true)}>
                    להצבעה
                </Button>

            </div>
        </div>
    )
}