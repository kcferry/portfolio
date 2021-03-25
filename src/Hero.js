import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import mainImage from './assets/images/dl-main.jpg'
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles((theme) => ({
    hero: {
        backgroundImage: `url(${mainImage})`,
        height: 'calc(100vh - 32px)',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-reapeat',
        backgroundSize: 'cover',
        position: 'relative',
        display: 'flex',
        justifyContent: 'center',
        alignItems: "center",
        color: '#fff',
        fontSize: "4rem"
    }
}));

const Hero = () => {

    const classes = useStyles();

    return (
        <>
            <Box className={classes.hero}>
                
                <Typography variant="h6" component="h2" gutterBottom>
                    WELCOME
                </Typography>
                <Typography variant="h4" gutterBottom>
                    <h1>Hi, I'm Kyle Ferry</h1>
                </Typography>
                <Typography variant="h4" gutterBottom>
                    <h1>Full Stack Developer</h1>
                </Typography>
                <Typography variant="h4" gutterBottom>
                    <h1>Based in London</h1>
                </Typography>

            </Box>
        </>
    )
}

export default Hero
