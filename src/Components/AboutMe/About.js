import React from 'react'
import { Container, Grid, Typography, Box, List, ListItemText, ListItem, Divider } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import animoji from '../../assets/images/meAva.jpg'
import { FaJsSquare, FaReact, FaNodeJs, FaHtml5, FaGithub, FaSass } from 'react-icons/fa';
import { SiMaterialUi, SiFirebase } from 'react-icons/si';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        textAlign: 'center',

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
        <div id='about'>
            <Box className={classes.boxBackground}>
                <Container className={classes.container} >

                    <Typography variant="h1" align="center" color='textSecondary' gutterBottom >
                        <Box fontWeight="fontWeightMedium">
                            About Me
                        </Box>
                    </Typography>


                    <Grid container spacing={6} justify='space-around' alignItems='center'>


                        <Grid container item xs={12} sm={6} spacing={6} justify='space-around' alignItems='center'>

                            <Grid item  >

                                <Grid item>
                                    <Typography variant="h6" align='center' color='textSecondary'>
                                        I'm kyle,  I am a driven self-taught full stack developer from Ireland.
                                        Learning to code has been a difficult and arduous journey,
                                        however, I have never done something so rewarding.
                                        At this stage, I feel I am at a point where I can build multipage websites with HTML, CSS and Javascript.
                                </Typography>
                                </Grid>

                                <Grid item>
                                    <Typography variant="h6" align='center' color='textSecondary'>
                                        With the knowledge that this is a fast-growing, modern industry.
                                        I made sure to learn and use frameworks and tools such as React,
                                        Material Ui and Sass making sure quality is reflected in every stage of development.
                                </Typography>
                                </Grid>

                                <Grid item>
                                    <Typography variant="h6" align='center' color='textSecondary'>
                                        I am a developer because what I learn today becomes the future of tomorrow.
                                </Typography>
                                </Grid>

                            </Grid>

                            <Grid item xs={12} sm={12}>

                                <Grid container item justify="center" direction='column'>

                                    <Grid item>

                                        <Typography variant="h4" align="left" color='textSecondary' gutterBottom >
                                            <Box fontWeight="fontWeightMedium">
                                                Skills
                                            </Box>
                                        </Typography>

                                    </Grid>


                                    <Grid item xs={11} sm={12}>


                                        <Grid container justify="center" direction="row">

                                            <Grid item xs={6} md={5}>
                                                <Grid container>
                                                    <Grid item >
                                                        <List>
                                                            <ListItem >
                                                                <ListItemText><Typography color='textSecondary'><FaJsSquare />{' JavaScript (ES6+)'}</Typography></ListItemText>
                                                            </ListItem>
                                                            <Divider light />
                                                            <ListItem>
                                                                <ListItemText><Typography color='textSecondary'><FaReact />{` React`}</Typography></ListItemText>
                                                            </ListItem>
                                                            <Divider light />
                                                            <ListItem>
                                                                <ListItemText><Typography color='textSecondary'><FaNodeJs />{` Node.JS`}</Typography></ListItemText>
                                                            </ListItem>
                                                            <Divider light />
                                                            <ListItem>
                                                                <ListItemText><Typography color='textSecondary'><FaGithub /> {` Git & GitHub`} </Typography> </ListItemText>
                                                            </ListItem>
                                                            <Divider light />
                                                        </List>
                                                    </Grid>
                                                </Grid>
                                            </Grid>


                                            <Grid item xs={6} md={5}>
                                                <Grid container >
                                                    <Grid item >
                                                        <List>
                                                            <ListItem>
                                                                <ListItemText><Typography color='textSecondary'><FaHtml5 /><FaSass />{` HTML5 & (S)CSS`}</Typography></ListItemText>
                                                            </ListItem>
                                                            <Divider light />
                                                            <ListItem>
                                                                <ListItemText><Typography color='textSecondary'><SiMaterialUi />{` Material Ui`}</Typography></ListItemText>
                                                            </ListItem>
                                                            <Divider light />
                                                            <ListItem>
                                                                <ListItemText><Typography color='textSecondary'>{`</> Express`}</Typography></ListItemText>
                                                            </ListItem>
                                                            <Divider light />
                                                            <ListItem>
                                                                <ListItemText><Typography color='textSecondary'><SiFirebase />{` Firebase`}</Typography></ListItemText>
                                                            </ListItem>
                                                            <Divider light />
                                                        </List>
                                                    </Grid>
                                                </Grid>
                                            </Grid>


                                        </Grid>
                                    </Grid>


                                </Grid>
                            </Grid>


                        </Grid>

                        <Grid item>
                            <Grid container justify="center" >
                                <Grid item xs={10} sm={6}>
                                    <img className='About-Img' src={animoji} alt='Kyle Amoji' align='center' />
                                </Grid>
                            </Grid>
                        </Grid>

                    </Grid>

                </Container >
            </Box>
        </div>
    )
}

export default About
