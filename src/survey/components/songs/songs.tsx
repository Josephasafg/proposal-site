import React, {useContext} from 'react';
import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
// import Checkbox from '@material-ui/core/Checkbox';
import {Song} from "../../models/song";
import {SongComponent} from "./song/song-component";
import {SongSubmissionContext} from "../../../pages/survey/survey-page";
import "./songs.css";
import {Divider, ListItemText} from "@material-ui/core";
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';
import Checkbox from '@mui/material/Checkbox';


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
            maxWidth: 150,
            color: "#f7f4f1"
        }

    }),
);


const useItemStyles = makeStyles((_: Theme) =>
    createStyles({
        container: {
            backgroundColor: "rgb(159, 167, 128)",
            borderRadius: "15px",
            display: "flex",
            justifyContent: "space-between",
            textAlign: "center",

            "&:hover": {
                backgroundColor: "rgb(159, 167, 128)",

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
    songs: Song[]
}

const label = {inputProps: {'aria-label': 'Checkbox demo'}};

export const SongList: React.FC<SongsProps> = (
    {
        songs
    }) => {
    const classes = useStyles();
    const dividerStyle = useDividerStyles();
    const itemStyle = useItemStyles();
    const [checked, setChecked] = React.useState(1);
    const songContext = useContext(SongSubmissionContext);
    const textStyle = useTextStyles();

    const onSongChange = (song: Song): void => {
        songContext.updateSong(song.id);
        setChecked(song.id);
    }

    return (
        <div>
            Asaf
            {/*<List dense className={classes.root}>*/}
            {/*    {songs.map((song, index) => {*/}
            {/*        const labelId = `checkbox-list-secondary-label-${index}`;*/}

            {/*        const isChecked = checked === song.id;*/}

            {/*        const backgroundColor = isChecked ? "rgb(123, 132, 91)" : "";*/}

            {/*        return (*/}
            {/*            // <div>ASAF</div>*/}
            {/*            // <div key={`${index}-dev`}>*/}
            {/*            //     <div>ASAF</div>*/}
            {/*                /!*<ListItem className={itemStyle.container} key={labelId} button*!/*/}
            {/*                /!*          selected={false}*!/*/}
            {/*                /!*          onClick={() => onSongChange(song)}*!/*/}
            {/*                /!*          style={{*!/*/}
            {/*                /!*              backgroundColor: backgroundColor,*!/*/}
            {/*                /!*              padding: "10px",*!/*/}
            {/*                /!*              color: "#f7f4f1",*!/*/}
            {/*                /!*              width: 350,*!/*/}
            {/*                /!*              height: 80*!/*/}
            {/*                /!*          }}>*!/*/}

            {/*                /!*    <Checkbox*!/*/}
            {/*                /!*        icon={<RadioButtonUncheckedIcon/>}*!/*/}
            {/*                /!*        edge="end"*!/*/}
            {/*                /!*        onChange={() => onSongChange(song)}*!/*/}
            {/*                /!*        checked={isChecked}*!/*/}
            {/*                /!*        checkedIcon={<RadioButtonCheckedIcon/>}*!/*/}
            {/*                /!*        {...label}*!/*/}
            {/*                /!*        sx={{*!/*/}
            {/*                /!*            color: "#f7f4f1",*!/*/}
            {/*                /!*            '&.Mui-checked': {*!/*/}
            {/*                /!*                color: "#f7f4f1",*!/*/}
            {/*                /!*            },*!/*/}
            {/*                /!*        }}*!/*/}
            {/*                /!*    />*!/*/}

            {/*                /!*    <ListItemText id={labelId}*!/*/}
            {/*                /!*                  primary={song.name}*!/*/}
            {/*                /!*                  disableTypography*!/*/}
            {/*                /!*                  className={textStyle.primary}/>*!/*/}

            {/*                /!*    <SongComponent*!/*/}
            {/*                /!*        key={labelId}*!/*/}
            {/*                /!*        song={song}*!/*/}
            {/*                /!*        isChecked={song.id.toString() === songContext.id.toString()}*!/*/}
            {/*                /!*        onChange={onSongChange}/>*!/*/}

            {/*                /!*</ListItem>*!/*/}
            {/*                /!*<Divider key={index} className={dividerStyle.root}/>*!/*/}
            {/*            // </div>*/}

            {/*        );*/}
            {/*    })}*/}
            {/*</List>*/}
        </div>


    );
}

export default SongList;