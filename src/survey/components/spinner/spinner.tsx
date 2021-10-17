import React from "react";
import CircularProgress from '@material-ui/core/CircularProgress';
import ClipLoader from "react-spinners/ClipLoader";
import "./spinner.css";
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";

const useSpinnerStyles = makeStyles((_: Theme) =>
    createStyles({
        colorPrimary: {
            color: "#c3a46c",
        },

    }),
);



export const CircularSpinner = () => {
    const style = useSpinnerStyles()
    return (
        <div className={style.colorPrimary}>
            <CircularProgress/>
        </div>
    )
}

interface HashLoaderProps {
    isLoading: boolean,
    size?: number
}

export const HashLoader: React.FC<HashLoaderProps> = (
    {
        isLoading,
        size = 100
    }) => {
    return (
        <div className={"hash-spinner-wrapper"}>
            <ClipLoader color={"#c3a46c"} loading={isLoading} size={size}/>
        </div>
    )
}