import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import mainImage from './assets/images/dl-main.jpg'


const useStyles = makeStyles((theme) => ({
    hero: {
        backgroundImage: `url(${mainImage})`,
        height: '900px',
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
                <h2>Hi, I'm Kyle Ferry</h2>
            </Box>
        </>
    )
}

export default Hero
