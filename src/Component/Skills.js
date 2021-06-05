import React from 'react';
import SkillBar from 'react-skillbars';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        '& > *': {
            margin: theme.spacing(1),
        },
    },
    profilePhoto: {
        width: theme.spacing(20),
        height: theme.spacing(20),
    },
}))
function Skills(props) {
    const classes = useStyles();

    const skills = [
        { type: "NodeJs", level: 85 },
        { type: "Javascript", level: 75 },
        { type: "Posgres", level: 80 },
        { type: "Docker", level: 70 }
    ],
    colors = {
        "bar": "#3498db",
        "title": {
            "text": "#fff",
            "background": "#2980b9"
        }
    }
    return (
        <div>
            <Grid container spacing={3}>
                <Grid item xs={4}></Grid>
                <Grid item xs={8}>
                    <SkillBar skills={skills} colors={colors} />

                </Grid>
            </Grid>

        </div>
    );
}

export default Skills;