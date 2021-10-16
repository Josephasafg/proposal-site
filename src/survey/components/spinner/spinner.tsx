import React from "react";
import CircularProgress from '@material-ui/core/CircularProgress';
import ClipLoader from "react-spinners/ClipLoader";
import "./spinner.css";

export const CircularSpinner = () => {
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
            <ClipLoader color={"#c3a46c"} loading={isLoading} size={100}/>
        </div>
    )
}