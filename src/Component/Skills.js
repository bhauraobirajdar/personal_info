import React, { useEffect } from 'react';
import SkillBar from 'react-skillbars';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

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
    useEffect(() => {
        props.getSkills();
    }, [])
    const colors = {
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
                    {props.skillListTest &&
                        <SkillBar skills={props && props.skillListTest} colors={colors} />
                    }
                </Grid>
            </Grid>
               
        </div>
    );
}

export default Skills;