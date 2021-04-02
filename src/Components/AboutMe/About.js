import React from 'react'
import { Container, Grid, Typography, Paper, Box, List, ListItemText, ListItem, Divider } from '@material-ui/core';
import Icon from '@material-ui/core/Icon';
import { makeStyles } from '@material-ui/core/styles';
import animoji from '../../assets/images/meAva.jpg'
import AlarmIcon from '@material-ui/icons/Alarm';
import { FaJsSquare, FaReact, FaNodeJs, FaHtml5, FaGithub, FaSass } from 'react-icons/fa'; 
import { SiMaterialUi, SiFirebase} from 'react-icons/si';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        textAlign: 'center',
        
    },
    container: {
        padding: 60
    },
    boxBackground: {
        background: '#111',
        width: '100%'
    }
}));


const About = () => {
    const classes = useStyles();


    return (
        <Box className={classes.boxBackground}>
            <Container className={classes.container} >

                <Typography variant="h1" align="center" color='textSecondary' gutterBottom >
                    <Box fontWeight="fontWeightMedium">
                        About Me
                    </Box>
                </Typography>


                <Grid container spacing={6} justify='space-around' alignItems='center'>

                    <Grid container item xs={12} sm={6} spacing={6} justify='space-around' alignItems='center'>

                        <Grid item justify="center" item xs={12} sm={12}>
                            <Typography align='center' color='textSecondary'>
                                Hello! I'm kyle, an ambitious self-taught full stack developer from Ireland.
                                I started my journey into web development as I found myself more
                                often than not in my years working in sound and audio
                                intrigued by technology and questioning what made it tick.
                                That intrigue has become a passion to learn,
                                understand and develop to the best of my ability.
                            </Typography>
                        </Grid>


                        <Grid container item justify="center" xs={12} sm={12} direction='column'>

                            <Typography variant="h4" align="left" color='textSecondary' gutterBottom >
                                <Box fontWeight="fontWeightMedium">
                                    Skills
                                </Box>
                            </Typography>

                            <Grid container justify="center" item xs={11} sm={12} direction="row">

                                <Grid container item xs={6} md={5}>
                                    <Grid item >
                                        <List> 
                                            <ListItem >
                                                <ListItemText><Typography color='textSecondary'><FaJsSquare />{' JavaScript (ES6+)'}</Typography></ListItemText>
                                            </ListItem>
                                            <Divider light />
                                            <ListItem>
                                                <ListItemText><Typography color='textSecondary'><FaReact />{` React`}</Typography></ListItemText>
                                            </ListItem>
                                            <Divider light />
                                            <ListItem>
                                                <ListItemText><Typography color='textSecondary'><FaNodeJs />{` Node.JS`}</Typography></ListItemText>
                                            </ListItem>
                                            <Divider light />
                                            <ListItem>
                                                <ListItemText><Typography color='textSecondary'><FaGithub/> {` Git & GitHub` } </Typography> </ListItemText>
                                            </ListItem>
                                            <Divider light />
                                        </List> 
                                    </Grid>
                                </Grid>

                                <Grid container item xs={6} md={5}>
                                    <Grid item>
                                        <List>
                                            <ListItem>
                                                <ListItemText><Typography color='textSecondary'><FaHtml5 /><FaSass />{` HTML5 & (S)CSS`}</Typography></ListItemText>
                                            </ListItem>
                                            <Divider light />
                                            <ListItem>
                                                <ListItemText><Typography color='textSecondary'><SiMaterialUi/>{` Material Ui`}</Typography></ListItemText>
                                            </ListItem>
                                            <Divider light />
                                            <ListItem>
                                                <ListItemText><Typography color='textSecondary'>{`</> Express`}</Typography></ListItemText>
                                            </ListItem>
                                            <Divider light />
                                            <ListItem>
                                                <ListItemText><Typography color='textSecondary'><SiFirebase/>{` Firebase` }</Typography></ListItemText>
                                            </ListItem>
                                            <Divider light />
                                        </List>
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
