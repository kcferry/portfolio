import React from 'react'
import { Grid, Typography, Card, CardActions, CardContent, CardMedia, Button,  } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { FaJsSquare, FaReact, FaHtml5, FaSass, FaCss3Alt } from 'react-icons/fa'; 
import { SiMaterialUi, SiFirebase, SiMapbox, SiLeaflet, SiRedux, SiNetlify} from 'react-icons/si';

import spacePic from '../../assets/images/SpaceClover.jpg'
import expensePic from '../../assets/images/expensify.jpg'
import recipePic from '../../assets/images/recipe-pic.jpg'
import portfolioPic from '../../assets/images/portfolio-image.jpg'


const portContent = [
    {
        image: spacePic,
        title: 'Space X Tracker',
        description: 'Space clover is a React web app using SpaceX, Openweather and Mapbox APIs for visualizing the next Space X launch. Features include live launch site weather, launch countdown and launch live stream.',
        livesite: 'https://spaceclover.co.uk',
        github: 'https://github.com/kcferry/spacex-app',
        technologies: [<FaHtml5/>, <FaSass/>, <FaJsSquare/>, <FaReact/>, <SiLeaflet/>, <SiMapbox/>, <SiNetlify/>]
    },
    {
        image: expensePic,
        title: 'Cryptofy',
        description: 'Expensify is a simple React & Redux based web app designed to track and store your expenses. Features include creating, storing, editing and deleting expenses. The app also includes sign-in authentication and firebase storage.',
        livesite: 'https://kf-expensify.herokuapp.com',
        github: 'https://github.com/kcferry/react-expense-app',
        technologies: [<FaHtml5/>, <FaSass/>, <FaJsSquare/>, <FaReact/>, <SiRedux/>, <SiFirebase/>, ]
    },
    {
        image: recipePic,
        title: 'Recipe Book',
        description: 'The Recipe Book is an app written in vanilla Javascript to store your recipes. Features include adding recipe steps with a separate ingredient list and filtering recipes by most recent, last edited and alphabetically.',
        livesite: 'https://adoring-yalow-21e8e7.netlify.app/index.html',
        github: 'https://github.com/kcferry/Recipe-App',
        technologies: [<FaHtml5/>, <FaCss3Alt/>, <FaJsSquare/> ]
    },{
        image: portfolioPic,
        title: 'Portfolio',
        description: 'The portfolio website is written in React.js, It is designed with a minimalist style to display information about me along with showcasing my projects and various ways to connect with me. I used Material-Ui for faster development and hosted the site using Netlify.',
        livesite: 'https://adoring-yalow-21e8e7.netlify.app/index.html',
        github: 'https://github.com/kcferry/Recipe-App',
        technologies: [<FaHtml5/>, <FaSass/>, <FaJsSquare/>, <FaReact/>, <SiMaterialUi/>]
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
                    <Grid item key={index}>
                        <Card key={project.image} className={classes.root}>
                                <CardMedia 
                                    key={project.image}
                                    className={classes.media}
                                    image={project.image}
                                    title={project.title}
                                />
                                <CardContent key={project.title}>
                                    <Typography key={project.title} gutterBottom variant="h5" component="h2">
                                        {project.title}
                                    </Typography>
                                    <Typography key={project.description} variant="body2" color="textPrimary" component="p">
                                        {project.description}
                                    </Typography>
                                </CardContent>
                            <CardActions>
                                <Button key={project.livesite} variant="outlined" size="small" color="primary" href={project.livesite}>
                                    See Live
                                </Button>
                                <Button key={project.github} variant="outlined" size="small" color="primary" href={project.github}>
                                    Source Code
                                </Button> 
                                {project.technologies}
                            </CardActions>
                        </Card>
                    </Grid>
                </>
            ))}
        </>
    )
}

export default ProjectList
