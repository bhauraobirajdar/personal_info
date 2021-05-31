import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import { Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import GetAppIcon from '@material-ui/icons/GetApp';


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


function About(props) {

    const classes = useStyles();

    const onDownload = () => {
        const link = document.createElement("a");
        link.download = `Resume_Bhaurao_Birajdar.doc`;
        link.href = "./Resume_Bhaurao_Birajdar.doc";
        link.click();
    };
    return (
        <div>
            <Grid container spacing={3}>
                <Grid item xs={4} container justify="center">
                    <Avatar alt="Remy Sharp" src={process.env.PUBLIC_URL + '/Bhaurao.jpg'} className={classes.profilePhoto} />
                </Grid>
                <Grid item xs={8}>
                    <Typography variant="h4">
                        About Me
                    </Typography>
                    <Typography>
                        A Software Developer with around 7 years of experience in all phases of Software Development Life Cycle (SDLC) and focusing on conceptualizing business needs and translating them into viable technical solutions.
                        Strengths include good Analytical skills, Problem solving skills, Ability to work in team, Quick learner to new technologies and proven development experience.
                        Strong experience in NodeJS, Express, StrongLoop, PHP, Html/Html5, JavaScript(jQuery), Knockout.js, CSS/CSS3
                    </Typography>
                    <Button
                        variant="contained"
                        color="primary"
                        className={classes.downloadButton}
                        onClick={onDownload}
                        startIcon={<GetAppIcon />}
                    >
                        Download Resume
                    </Button>

                </Grid>
            </Grid>
        </div >
    );
}

export default About;