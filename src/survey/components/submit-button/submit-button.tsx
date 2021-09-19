import React from "react";
import {Button} from '@material-ui/core';
import "./submit-button.css";
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import clsx from "clsx";


interface SubmitButtonProps {
    onClick: () => void
    pickedSongId: number
}

const SUBMIT_TEXT = "לשלוח לדיג'יי";
const useStyles = makeStyles((_: Theme) =>
    createStyles({
        root: {
            backgroundColor: "rgb(232, 231, 211)",
            width: 150,
            fontSize: 18,
            fontWeight: "bold"
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
        <Button onClick={onClick} disabled={pickedSongId === -1} className={clsx(classes.root)}>
            {SUBMIT_TEXT}
        </Button>
    )
}