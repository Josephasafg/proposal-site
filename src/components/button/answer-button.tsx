import React from "react";
import {makeStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import red from "@material-ui/core/colors/red";
import green from "@material-ui/core/colors/green";


export enum ButtonColor {
    Red = 0,
    Green = 1
}

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },
    containedGreen: {
        color: theme.palette.getContrastText(green[500]),
        backgroundColor: green[500],
        "&:hover": {
            backgroundColor: green[700],
            // Reset on touch devices, it doesn't add specificity
            "@media (hover: none)": {
                backgroundColor: green[500]
            }
        }
    },

    containedRed: {
        color: theme.palette.getContrastText(red[500]),
        backgroundColor: red[500],
        "&:hover": {
            backgroundColor: red[700],
            // Reset on touch devices, it doesn't add specificity
            "@media (hover: none)": {
                backgroundColor: red[500]
            }
        },
    },
}));

interface IAnswerButton {
    text: string
    color: ButtonColor
    icon?: JSX.Element
    onClick?: any
    onHover?: (event: any) => void
    x?: number
    y?: number
}

export const AnswerButton: React.FC<IAnswerButton> = (
    {
        text,
        color,
        icon,
        onClick,
        onHover,
        x,
        y
    }) => {
    const classes = useStyles();

    const getButtonStyle = () => {
        if (color === ButtonColor.Red) {
            return classes.containedRed;
        }

        if (color === ButtonColor.Green) {
            return classes.containedGreen;
        }
    }

    return (
        <div className={classes.root}>
            <Button variant="contained"
                    size={"large"}
                    style={{left: x, top: y, margin: "50px", width: "260px", height: "50px"}}
                    onMouseOver={onHover}
                    onClick={onClick}
                    color={"secondary"}
                    startIcon={icon}
                    className={getButtonStyle()}>
                {text}
            </Button>
        </div>
    )
}