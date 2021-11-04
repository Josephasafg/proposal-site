import React from "react";
import {Button} from '@material-ui/core';
import "./submit-button.css";
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";


interface SubmitButtonProps {
    onClick: () => void
    pickedSongId: number
}

const SUBMIT_TEXT = "לשלוח לדיג'יי";
const useStyles = makeStyles((_: Theme) =>
    createStyles({
        root: {
            backgroundColor: "rgb(232, 231, 211)",
            color: "#97845d",
            width: 150,
            fontSize: 18,
            fontWeight: "bold",
            cursor: "pointer"
        },

    }),
);

export const SubmitButton: React.FC<SubmitButtonProps> = (
    {
        onClick,
        pickedSongId
    }) => {

    const classes = useStyles();
    return (
        <Button className={classes.root}
                onClick={onClick}
                disabled={pickedSongId === -1}>
            {SUBMIT_TEXT}
        </Button>

    )
}