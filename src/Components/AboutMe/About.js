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
        paddingTop: 100
    }
}));



const About = () => {
    const classes = useStyles();


    return (
        <Box >
        <Container className={classes.container} >

            <Typography variant="h1" align="center" color='textPrimary' gutterBottom >
                About Me
            </Typography>


            <Grid container spacing={6} justify='space-around' alignItems='center'>


                <Grid container item xs={10} sm={6} spacing={5} justify='space-around' alignItems='center'>

                    <Grid container justify="center" item xs={11} sm={12}>
                        <Paper elevation={6} spacing={3} className={classes.paper} >
                            <Typography alignItems='center' color='textPrimary'>
                                I'm kyle, an ambitious self-taught full stack developer from Ireland.
                                I started my journey into web development as I found myself more
                                often than not in my years working in sound and audio
                                intrigued by technology and questioning what made it tick.
                                That intrigue has become a passion to learn,
                                understand and develop to the best of my ability.
                        </Typography>
                        </Paper>

                    </Grid>


                    <Grid container justify="center" item xs={11} sm={12} direction='column'>

                        <Typography variant="h4" align="left" color='textPrimary' gutterBottom >
                            Skills
                        </Typography>

                        <Grid container justify="center" item xs={11} sm={12} direction="row">

                            <Grid container item md={5}>
                                <Grid item>
                                    <ListItem>
                                        <ListItemText> HTML5 & CSS3 </ListItemText>
                                    </ListItem>
                                    <Divider light />
                                    <ListItem>
                                        <ListItemText> JavaScript</ListItemText>
                                    </ListItem>
                                    <Divider light />
                                    <ListItem>
                                        <ListItemText> React</ListItemText>
                                    </ListItem>
                                    <Divider light />
                                    <ListItem>
                                        <ListItemText> Node.JS & Express</ListItemText>
                                    </ListItem>
                                    <Divider light />
                                </Grid>
                            </Grid>

                            <Grid container item md={5}>
                                <Grid item>
                                    <ListItem>
                                        <ListItemText> Material Ui</ListItemText>
                                    </ListItem>
                                    <Divider light />
                                    <ListItem>
                                        <ListItemText> Git & GitHub</ListItemText>
                                    </ListItem>
                                    <Divider light />
                                    <ListItem>
                                        <ListItemText> Firebase</ListItemText>
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
