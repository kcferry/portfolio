import React from 'react'
import { Container, Grid, Typography, Box, List, ListItemText, ListItem, Divider, Card, Paper, animoji, IconButton, CardActionArea, CardActions, CardContent, CardMedia, Button } from '@material-ui/core';
import Icon from '@material-ui/core/Icon';
import { makeStyles } from '@material-ui/core/styles';
import mepic from '../../assets/images/meAva.jpg';

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

    const socialLinks = (
        <div>
            <IconButton href='https://github.com/kcferry'>
                <GitHub className='icon' color="Primary" />
            </IconButton>

            <IconButton href='https://www.linkedin.com/in/kyle-ferry-2bb160112'>
                <LinkedIn className='icon' color="Primary" />
            </IconButton>

            <IconButton href='https://twitter.com/Kvferry'>
                <Twitter className='icon' color="Primary" />
            </IconButton>
        </div>
    )

    return (
        <div id='contactme'>
            <Box className={classes.boxBackground}>
                <Container className={classes.container} >

                    <Grid container justify="center" alignItems="center">

                        <Grid item md={6}>
                            <Grid container justify="space-between" alignItems="center" direction="column">
                                <Grid item md={12}>
                                    <Typography variant="h3" color='textSecondary' gutterBottom >
                                        <Box fontWeight="fontWeightMedium">
                                            Contact Me
                                    </Box>
                                    </Typography>
                                </Grid>

                                <Grid item sm={6} md={12}>
                                    <Typography color='textSecondary'>
                                        Feel free to reach out if you're looking for a developer, have a question, or just want to connect.. Connect with me via phone:
                                    <a href="tel:+8801923088574">075 7563 3363</a>
                                    or email:
                                    <a href="mailto:kyleferry@icloud.com"> kyleferry@icloud.com</a>
                                    </Typography>
                                </Grid>

                                <Grid item md={12}>
                                    <div className={classes.drawerContainer}>{socialLinks}</div>
                                </Grid>

                            </Grid>
                        </Grid>


                        <Grid item md={6}>
                            <Grid container justify="center" alignItems="center" md={12}>
                                <Grid item>
                                    <img className='About-Img' src={mepic} alt='Kyle Amoji' align='center' />
                                </Grid>
                            </Grid>
                        </Grid>


                    </Grid>

                </Container >
            </Box>
        </div>
    )
}

export default ContactMe
