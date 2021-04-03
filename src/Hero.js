import React from 'react'
import TextLoop from "react-text-loop";
import { makeStyles } from '@material-ui/core/styles';
import { Container, Box, Grid, Typography } from '@material-ui/core';
import mainImage from './assets/images/dl-main.jpg'


const useStyles = makeStyles((theme) => ({
    hero: {
        backgroundImage: `url(${mainImage})`,
        height: '100vh',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-reapeat',
        backgroundSize: 'cover',
        position: 'relative',
        display: 'flex',
        color: '#fff',
    },
    decorateText: {
        color: '#1fe628',
        className: 'toto'
    },

}));

const Hero = () => {

    const classes = useStyles();

    return (
        <div id='home'>
            <Box fontWeight="fontWeightBold" className={classes.hero}>
                <Grid
                    container
                    direction="column"
                    justify="center"
                    alignItems="center"
                >
                    <Container>

                        <Typography variant="h6" component="h6" gutterBottom>
                            <Box fontWeight="fontWeightLight">
                                WELCOME
                            </Box>
                        </Typography>

                        <Typography variant="h1" >
                            <Box fontWeight="fontWeightMedium">
                                Hi, I'm Kyle Ferry
                            </Box>
                        </Typography>

                        <Typography variant="h3">
                            <TextLoop>
                                <Box fontWeight="fontWeightMedium" className={classes.decorateText}> Front End Developer </Box>
                                <Box fontWeight="fontWeightMedium" className={classes.decorateText}> Based in London. </Box>
                            </TextLoop>
                        </Typography>




                    </Container>
                </Grid>

            </Box>
        </div>
    )
}

export default Hero
