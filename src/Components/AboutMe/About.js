import React from 'react'
import { Container, Grid, Typography, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import animoji from '../../assets/images/meAva.jpg'

const useStyles = makeStyles(() => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        textAlign: 'center',

    },
}));


const About = () => {
    const classes = useStyles();

    return (
        <Container>

            <Typography variant="h1" align="center" color='textPrimary' gutterBottom >
                About Me
            </Typography>

            <Grid container spacing={6} justify='space-around' alignItems='center'>

                <Grid justify="center" item xs={10} sm={6}>
                    <Paper className={classes.paper}>
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

                <Grid container justify="center" item xs={10} sm={6}>
                    <img className='About-Img' src={animoji} alt='Kyle Amoji' align='center' />
                </Grid>

            </Grid>

        </Container>

    )
}

export default About
