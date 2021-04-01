import React from 'react'
import { Container, Grid, Typography, Paper, Box, List, ListItemText, ListItem, Divider } from '@material-ui/core';
import Icon from '@material-ui/core/Icon';
import { makeStyles } from '@material-ui/core/styles';
import animoji from '../../assets/images/meAva.jpg'

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
        background: '#111',
        width: '100%'
    }
}));



const About = () => {
    const classes = useStyles();

    return (
        <Box className={classes.boxBackground}>
            <Container className={classes.container} >

                <Typography variant="h1" align="center" color='textSecondary' gutterBottom >
                    <Box fontWeight="fontWeightMedium">
                        About Me
                    </Box>
                </Typography>


                <Grid container spacing={6} justify='space-around' alignItems='center'>

                    <Grid container item xs={10} sm={6} spacing={5} justify='space-around' alignItems='center'>

                        <Grid item justify="center" item xs={11} sm={12}>
                            <Typography variant="h5" align='center' color='textSecondary'>
                                Hello! I'm kyle, an ambitious self-taught full stack developer from Ireland.
                                I started my journey into web development as I found myself more
                                often than not in my years working in sound and audio
                                intrigued by technology and questioning what made it tick.
                                That intrigue has become a passion to learn,
                                understand and develop to the best of my ability.
                            </Typography>
                        </Grid>


                        <Grid container justify="center" item xs={11} sm={12} direction='column'>

                            <Typography variant="h4" align="left" color='textSecondary' gutterBottom >
                                <Box fontWeight="fontWeightMedium">
                                    Skills
                                </Box>
                            </Typography>

                            <Grid container justify="center" item xs={11} sm={12} direction="row">

                                <Grid container item md={5}>
                                    <Grid item >
                                        <ListItem >
                                            <ListItemText>JavaScript (ES6+)</ListItemText>
                                        </ListItem>
                                        <Divider light />
                                        <ListItem>
                                            <ListItemText>React</ListItemText>
                                        </ListItem>
                                        <Divider light />
                                        <ListItem>
                                            <ListItemText>Node.JS</ListItemText>
                                        </ListItem>
                                        <Divider light />
                                        <ListItem>
                                            <ListItemText>Git & GitHub</ListItemText>
                                        </ListItem>
                                        <Divider light />
                                    </Grid>
                                </Grid>

                                <Grid container item md={5}>
                                    <Grid item>
                                        <ListItem>
                                            <ListItemText>HTML5 & (S)CSS</ListItemText>
                                        </ListItem>
                                        <Divider light />
                                        <ListItem>
                                            <ListItemText>Material Ui</ListItemText>
                                        </ListItem>
                                        <Divider light />
                                        <ListItem>
                                            <ListItemText>Express</ListItemText>
                                        </ListItem>
                                        <Divider light />
                                        <ListItem>
                                            <ListItemText>Firebase</ListItemText>
                                        </ListItem>
                                        <Divider light />
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>

                    <Grid container justify="center" xs={10} sm={6}>
                        <img className='About-Img' src={animoji} alt='Kyle Amoji' align='center' />
                    </Grid>

                </Grid>

            </Container >
        </Box>

    )
}

export default About
