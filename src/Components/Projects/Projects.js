import React from 'react'
import { Container, Grid, Typography, Box, List, ListItemText, ListItem, Divider, Card, CardActionArea, CardActions, CardContent, CardMedia, Button } from '@material-ui/core';
import Icon from '@material-ui/core/Icon';
import { makeStyles } from '@material-ui/core/styles';
import PortfolioProject from './ProjectList'


const useStyles = makeStyles({
    root: {
        maxWidth: 550,
    },
    media: {
        height: 140,
    },
    sizes: {
        marginTop: 200,
        
    }, 
    boxStyle: {
        background: '#2E2D36'
    }
    
});


const Projects = () => {
    const classes = useStyles(); 

    return (
        <Box>
        <Container className={classes.sizes}>
            <Typography variant="h1" align="center" color='textPrimary' gutterBottom >
                My Projects
            </Typography>


            <Typography variant="h5" align="center" color="textPrimary" gutterBottom>
                I like to stay busy and always have a project in the works. Take a look at some of the applications I've dedicated my time to.
            </Typography>

            <Grid container spacing={6} direction='row' justify='center'>

                <PortfolioProject />

            </Grid>

        </Container>
        </Box>
    )
}

export default Projects
