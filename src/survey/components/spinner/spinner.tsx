import React from "react";
import CircularProgress from '@material-ui/core/CircularProgress';
import {createStyles, makeStyles, Theme} from "@material-ui/core";
import ClipLoader from "react-spinners/ClipLoader";
import "./spinner.css";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
            '& > * + *': {
                marginLeft: theme.spacing(2),
            },
        },
    }),
);

export const CircularSpinner = () => {
    const style = useStyles();

    return (
        <div>
            <CircularProgress/>
        </div>
    )
}

interface HashLoaderProps {
    isLoading: boolean
}

export const HashLoader: React.FC<HashLoaderProps> = (
    {
        isLoading
    }) => {
    return (
        <div className={"hash-spinner-wrapper"}>
            <ClipLoader color={"white"} loading={isLoading} size={100} />
        </div>
    )
}