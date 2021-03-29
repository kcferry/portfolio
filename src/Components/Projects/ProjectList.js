import React from 'react'
import { Grid, Typography, Card, CardActionArea, CardActions, CardContent, CardMedia, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import spacePic from '../../assets/images/SpaceClover.jpg'
import expensePic from '../../assets/images/expensify.jpg'
import recipePic from '../../assets/images/recipe-pic.jpg'

const portContent = [
    {
        image: spacePic,
        title: 'Space X Tracker',
        description: 'Space clover is a React web app using SpaceX, Openweather and Mapbox APIs for visualizing the next Space X launch. Features include live launch site weather, launch countdown and launch live stream.',
        livesite: 'https://spaceclover.co.uk',
        github: 'https://github.com/kcferry/spacex-app',
    },
    {
        image: expensePic,
        title: 'Cryptofy',
        description: 'Expensify is a simple React & Redux based web app designed to track and store your expenses. Features include creating, storing, editing and deleting expenses. The app also includes sign-in authentication and firebase storage.',
        livesite: 'https://kf-expensify.herokuapp.com',
        github: 'https://github.com/kcferry/react-expense-app',
    },
    {
        image: recipePic ,
        title: 'Recipe Book',
        description: 'The Recipe Book is an app written in vanilla Javascript to store your recipes. Features include adding recipe steps with a separate ingredient list and filtering recipes by most recent, last edited and alphabetically.',
        livesite: 'https://adoring-yalow-21e8e7.netlify.app/index.html',
        github: 'https://github.com/kcferry/Recipe-App',
    },
]




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



const ProjectList = () => {
    const classes = useStyles();
    

    return (
        
        <>
            {portContent.map((project, index) => (
                <>
                    <Grid item >
                        <Card key={index} className={classes.root}>
                            <CardActionArea>
                                <CardMedia
                                    className={classes.media}
                                    image={project.image}
                                    title={project.title}
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        {project.title}
                                    </Typography>
                                    <Typography variant="body2" color="textPrimary" component="p">
                                        {project.description}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button size="small" color="primary" href={project.livesite}>
                                    Live Site
                  </Button>
                                <Button size="small" color="primary" href={project.github}>
                                    GitHub
                  </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                </>

            ))}

        </>
    )


}

export default ProjectList
