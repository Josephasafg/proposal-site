import React from "react";
import {Button} from '@material-ui/core';
import "./submit-button.css";
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import {Color} from "../../models/color";


interface SubmitButtonProps {
    onClick: () => void
    pickedColor: Color
}

const SUBMIT_TEXT = "בחרתי ואני מוכן להצביע!";
const useStyles = makeStyles((_: Theme) =>
    createStyles({
        root: {

            backgroundColor: "white",
            color: "#FF8C00",
            fontSize: 18,
            fontWeight: "bold",
            marginTop: "20px",
            width: 220,
            cursor: "pointer",
            direction: "rtl",
        },

    }),
);

export const SubmitButton: React.FC<SubmitButtonProps> = (
    {
        onClick,
        pickedColor
    }) => {

    const classes = useStyles();
    return (
        <Button className={classes.root}
                onClick={onClick}
                disabled={pickedColor === -1}>
            {SUBMIT_TEXT}
        </Button>

    )
}