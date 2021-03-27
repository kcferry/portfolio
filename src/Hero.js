import React from 'react'
import TextLoop from "react-text-loop";
import { makeStyles } from '@material-ui/core/styles';
import { Container, Box, Grid, Typography } from '@material-ui/core';
import mainImage from './assets/images/dl-main.jpg'


const useStyles = makeStyles((theme) => ({
    hero: {
        backgroundImage: `url(${mainImage})`,
        height: 'calc(100vh - 32px)',
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
        <>
            <Box className={classes.hero}>
                <Grid
                    container
                    direction="column"
                    justify="center"
                    alignItems="center"
                >
                    <Container>

                        <Typography variant="h6" component="h6" gutterBottom> WELCOME </Typography>

                        <Typography variant="h1" >Hi, I'm Kyle Ferry</Typography>

                        <Typography variant="h3">
                            <TextLoop>
                                <span className={classes.decorateText}> Front End Developer </span>
                                <span className={classes.decorateText}> based in London. </span>
                            </TextLoop>
                        </Typography>

                        


                    </Container>
                </Grid>

            </Box>
        </>
    )
}

export default Hero
