import React, {useContext} from 'react';
import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import {ColorSubmissionContext} from "../../../pages/survey/survey-page";
import "./songs.css";
import {Divider, ListItemText} from "@material-ui/core";
import {ColorChoice} from "../../models/color";


const useStyles = makeStyles((_: Theme) =>
    createStyles({
        root: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
        },

    }),
);

const useTextStyles = makeStyles((_: Theme) =>
    createStyles({

        primary: {
            fontSize: "0.720rem",
            position: "relative",
            maxWidth: 170,
            color: "black"
        }

    }),
);


const useItemStyles = makeStyles((_: Theme) =>
    createStyles({
        root: {
            justifyContent: "center",
            textAlign: "center",

        },
        container: {
            backgroundColor: "#f5f5f5",
            borderRadius: "15px",

            "&:hover": {
                backgroundColor: "rgb(150, 150, 150)",

            }
        }

    }),
);


const useDividerStyles = makeStyles((_: Theme) =>
    createStyles({
        root: {
            height: '13px',
            backgroundColor: "transparent",
        },

    }),
);


interface SongsProps {
    colors: ColorChoice[]
}

export const SongList: React.FC<SongsProps> = (
    {
        colors
    }) => {
    const classes = useStyles();
    const dividerStyle = useDividerStyles();
    const itemStyle = useItemStyles();
    const [checked, setChecked] = React.useState(-1);
    const songContext = useContext(ColorSubmissionContext);
    const textStyle = useTextStyles();

    const onSongChange = (colorChoice: ColorChoice): void => {
        songContext.updateColor(colorChoice.color);
        setChecked(colorChoice.color);
    }

    const renderText = (colorChoice: ColorChoice) => {
        return (
            <div className={"name-wrapper"}>
                <div className={"name-style"}>
                    {colorChoice.name}
                </div>
            </div>
        )
    }

    return (
        <div>
            <List dense className={classes.root}>
                {colors.map((colorChoice, index) => {
                    const labelId = `checkbox-list-secondary-label-${index}`;

                    const isChecked = checked === colorChoice.color;

                    const opacity = isChecked ? "0.7" : "1";

                    return (
                        <div key={`${index}-dev`} >
                            <ListItem className={`${itemStyle.root} ${itemStyle.container} `} key={labelId} button
                                      selected={false}
                                      onClick={() => onSongChange(colorChoice)}
                                      style={{
                                          backgroundColor: `${colorChoice.hex}`,
                                          opacity: opacity,
                                          width: 750,
                                          height: 120,
                                          margin: "20px"
                                      }}>

                                <ListItemText id={labelId}
                                              primary={renderText(colorChoice)}
                                              disableTypography
                                              className={textStyle.primary}/>

                            </ListItem>
                            <Divider key={index} className={dividerStyle.root}/>
                        </div>
                    );
                })}
            </List>
        </div>


    );
}

export default SongList;