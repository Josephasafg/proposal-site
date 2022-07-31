import React, {useContext} from 'react';
import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import {Song} from "../../models/song";
import {SongComponent} from "./song/song-component";
import {ColorSubmissionContext} from "../../../pages/survey/survey-page";
import "./songs.css";
import {Divider, ListItemText} from "@material-ui/core";
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';
import Checkbox from '@mui/material/Checkbox';
import {ColorChoice} from "../../models/color";


const useStyles = makeStyles((_: Theme) =>
    createStyles({
        root: {
            maxWidth: 550,
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
        container: {
            backgroundColor: "#f5f5f5",
            borderRadius: "15px",
            display: "flex",
            justifyContent: "space-between",
            textAlign: "center",

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

const label = {inputProps: {'aria-label': 'Checkbox demo'}};

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
            <div>
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

                    const backgroundColor = isChecked ? "rgb(150, 150, 150)" : "";

                    return (
                        <div key={`${index}-dev`} className={"song-item"}>
                            <ListItem className={itemStyle.container} key={labelId} button
                                      selected={false}
                                      onClick={() => onSongChange(colorChoice)}
                                      style={{
                                          backgroundColor: backgroundColor,
                                          padding: "10px",
                                          color: "#f7f4f1",
                                          width: 350,
                                          height: 80
                                      }}>

                                <Checkbox
                                    icon={<RadioButtonUncheckedIcon/>}
                                    edge="end"
                                    onChange={() => onSongChange(colorChoice)}
                                    checked={isChecked}
                                    checkedIcon={<RadioButtonCheckedIcon/>}
                                    {...label}
                                    sx={{
                                        color: "#f7f4f1",
                                        '&.Mui-checked': {
                                            color: "#f7f4f1",
                                        },
                                    }}
                                />

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