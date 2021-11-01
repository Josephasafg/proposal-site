import React from "react";
import "./welcome-page.css";
import {Button, Divider,} from "@material-ui/core";
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import {Link, useHistory} from "react-router-dom";
// import {SongsAPI} from "../../../survey/API/api";
// import {FetchedSongs} from "../../../survey/survey-layout";
// import {LOCAL_STORAGE_SONGS_KEY} from "../../../survey/components/songs/consts";

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
    let history = useHistory();
    // const {setSongs, setIsFetchingSongs} = useContext(FetchedSongs);


    // function handleOnClick() {
    //     history.push("/survey/vote");
    // }

    // async function fetchSongs() {
    //     setIsFetchingSongs(true);
    //     const songs = await SongsAPI.getSongs();
    //     setIsFetchingSongs(false);
    //     localStorage.setItem(LOCAL_STORAGE_SONGS_KEY, JSON.stringify(songs))
    //     setSongs(songs);
    // }
    //
    // useEffect(() => {
    //     fetchSongs();
    // }, [])

    return (
        <div className="App">
            <div className={"page-wrapper"}>
                <div className={"first-header"}>
                    אנחנו בחרנו מתי ולאן תגיעו
                </div>

                <div className={"second-header"}>
                    אתם תבחרו לאיזה שיר נשבור את הכוס!
                </div>
                <Divider className={dividerStyle.root}/>

                <div className={"paragraph"}>
                    <div>
                        בעמוד הבא יופיעו ארבעה שירים.
                        <br/>
                        בחרו שיר שבירת כוס אחד שתרצו שנחגוג
                        <br/>
                        איתו, ואולי תזכו בפרס מתנת -
                        <br/>
                        סתם לא באמת.
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
                    <br/>
                    <div>
                        כשתרגישו שלמים עם ההחלטה (בכל
                        <br/>
                        זאת שיר שבירת כוס, ההחלטה לא פשוטה)
                        <br/>
                        לחצו על כפתור - לשלוח לדיג'יי
                    </div>
                </div>


                <br/>
                <br/>

                <Button className={buttonStyle.root}>
                    <Link to={"/survey/vote"}>
                        להצבעה
                    </Link>
                </Button>

            </div>
        </div>
    )
}