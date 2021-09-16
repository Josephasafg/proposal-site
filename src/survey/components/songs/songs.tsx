import React, {useContext} from 'react';
import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import Checkbox from '@material-ui/core/Checkbox';
import {Song} from "../../models/song";
import {SongComponent} from "./song/song-component";
import {SongSubmissionContext} from "../../../pages/survey/survey-page";
import "./songs.css";
import {Divider} from "@material-ui/core";
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';


const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            // width: '100%',
            maxWidth: 550,
            // left: "35%",
        },

        itemText: {
            margin: 20
        },

        container: {
            backgroundColor: "rgb(144, 236, 255)",
            borderRadius: "25px",
        }

    }),
);


const useItemStyles = makeStyles((theme: Theme) =>
    createStyles({
        container: {
            backgroundColor: "rgb(144, 236, 255)",
            borderRadius: "15px",
        }

    }),
);


const useDividerStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            height: '13px',
            backgroundColor: "transparent",
        },

    }),
);


interface SongsProps {
    songs: Song[]
}

export const SongList: React.FC<SongsProps> = (
    {
        songs
    }) => {
    const classes = useStyles();
    const dividerStyle = useDividerStyles();
    const itemStyle = useItemStyles();
    const [checked, setChecked] = React.useState(1);
    const songContext = useContext(SongSubmissionContext);

    const onSongChange = (song: Song): void => {
        songContext.updateSong(song.id);
        setChecked(song.id);
    }

    return (
        <div>

            <List dense className={classes.root}>
                {songs.map((song, index) => {
                    const labelId = `checkbox-list-secondary-label-${index}`;

                    const isChecked = checked === song.id;

                    const backgroundColor = isChecked ? "rgba(0, 0, 0, 0.04)" : "";

                    return (
                        <div key={`${index}-dev`} className={"song-item"}>
                            <ListItem className={itemStyle.container} key={labelId} button
                                      style={{backgroundColor: backgroundColor, padding: "10px"}}>
                                <SongComponent
                                    key={labelId}
                                    song={song}
                                    isChecked={song.id.toString() === songContext.id.toString()}
                                    onChange={onSongChange}/>
                                {/*<ListItemText id={labelId} primary={song.name} className={classes.itemText}/>*/}
                                <ListItemSecondaryAction>
                                    <Checkbox
                                        icon={<RadioButtonUncheckedIcon/>}
                                        edge="end"
                                        onChange={() => onSongChange(song)}
                                        checked={isChecked}
                                        checkedIcon={<RadioButtonCheckedIcon/>}
                                        inputProps={{'aria-labelledby': labelId}}
                                    />
                                </ListItemSecondaryAction>
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