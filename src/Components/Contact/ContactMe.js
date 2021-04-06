import React from 'react'
import { Container, Grid, Typography, Box, List, ListItemText, ListItem, Divider, Card, Paper, animoji, IconButton, CardActionArea, CardActions, CardContent, CardMedia, Button } from '@material-ui/core';
import TextLoop from "react-text-loop";
import { makeStyles } from '@material-ui/core/styles';
import { FaJsSquare, FaReact, FaNodeJs, FaHtml5, FaGithub, FaSass, FaCss3Alt } from 'react-icons/fa';
import { SiMaterialUi, SiFirebase, SiMapbox, SiLeaflet, SiRedux, SiNetlify, SiMinutemailer, SiTwitter, SiLinkedin } from 'react-icons/si';


import Twitter from '@material-ui/icons/Twitter';
import LinkedIn from '@material-ui/icons/LinkedIn';
import GitHub from '@material-ui/icons/GitHub';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        textAlign: 'center',
        padding: theme.spacing(4),
    },
    container: {
        padding: 60
    },
    boxBackground: {
        background: '#333',
        width: '100%'
    }
}));

const ContactMe = () => {
    const classes = useStyles();

    return (
        <div id='contactme'>
            <Box className={classes.boxBackground}>
                <Container className={classes.container} >

                    <Grid container direction="row" justify="space-between" alignItems="center" >

                        <Grid item>
                            <Typography variant="h4" color="secondary">
                                Let's connect!
                            </Typography>
                        </Grid>

                        <Grid item >

                            <Grid container direction="row" justify="space-between" alignItems="center">
                                <Grid item>
                                    <IconButton color="secondary">
                                        <a href="mailto:kyleferry@icloud.com">
                                            <SiMinutemailer className='icon' />
                                        </a>
                                    </IconButton>
                                </Grid>
                                <Grid item>
                                    <IconButton href='https://www.linkedin.com/in/kyle-ferry-2bb160112' color="secondary">
                                        <SiLinkedin className='icon' />
                                    </IconButton>
                                </Grid>
                                <Grid item>
                                    <IconButton href='https://twitter.com/Kvferry' color="secondary">
                                        <SiTwitter className='icon' />
                                    </IconButton>
                                </Grid>
                                <Grid item>
                                    <IconButton href='https://github.com/kcferry' color="secondary">
                                        <GitHub className='icon' />
                                    </IconButton>
                                </Grid>
                            </Grid>

                        </Grid>

                        <Grid item>
                            <Typography color="secondary">
                                MADE BY KYLE FERRY © 2021
                            </Typography>
                        </Grid>


                    </Grid>

                </Container >
            </Box>
        </div>
    )
}

export default ContactMe
