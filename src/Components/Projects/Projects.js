import React from 'react'
import { Container, Grid, Typography, Box} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import PortfolioProject from './ProjectList'


const useStyles = makeStyles({
    root: {
        maxWidth: 550,
    },
    media: {
        height: 140,
    },
    container: {
        padding: 60
    },
    boxStyle: {
        background: '#2E2D36'
    },
    boxBackground: {
        background: '#111',
        width: '100%'
    }

});


const Projects = () => {
    const classes = useStyles();

    return (
        <div id='projects'>
            <Box className={classes.boxBackground}>
                <Container className={classes.container} >

                    <Grid container direction="column" justify="space-between" alignItems="center" spacing={3}>

                        <Grid item>
                            <Typography variant="h1" align="center" color='textSecondary' gutterBottom >
                                <Box fontWeight="fontWeightMedium">
                                    My Projects
                                </Box>
                            </Typography>
                        </Grid>

                        <Grid item>
                            <Typography variant="h6" align="center" color='textSecondary' gutterBottom>
                                I like to stay busy and always have a project in the works. Take a look at some of the applications I've dedicated my time to.
                            </Typography>
                        </Grid>

                        <Grid item>
                            <Grid container spacing={6} direction='row' justify='center'>
                                <PortfolioProject />
                            </Grid>
                        </Grid>


                    </Grid>

                </Container>
            </Box>
        </div>
    )
}

export default Projects
