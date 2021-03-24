import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import logo from '../../assets/images/kf_logo_Blk.png'
import Twitter from '@material-ui/icons/Twitter';
import LinkedIn from '@material-ui/icons/LinkedIn';
import GitHub from '@material-ui/icons/GitHub';

const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: '#fff'
  },
  logo: {
    maxHeight: 50,
    paddingRight: 25,
  },
  logo: {
    maxHeight: 50,
    paddingRight: 25,
  },
  icon: {
    marginRight: 25,
  }
}));

const Header = () => {

  const classes = useStyles();

  return (
    <>
      <AppBar className={classes.appBar} position="static" >
        <Toolbar>
          <img src={logo} alt="logo" className={classes.logo} />

          <Button href="#text-buttons" color="primary">Home</Button>
          <Button href="#text-buttons" color="primary">About</Button>
          <Button href="#text-buttons" color="primary">Portfolio</Button>
          <Button href="#text-buttons" color="primary">Contact</Button>

          <a href="https://github.com/kcferry">
            <GitHub className='icon' color="primary" style={{ marginLeft: 980 }} />
          </a>

          <a href="https://www.linkedin.com/in/kyle-ferry-2bb160112/">
            <LinkedIn className='icon' color="primary" style={{ marginLeft: 30 }} />
          </a>

          <a href="https://twitter.com/Kvferry">
            <Twitter className='icon' color="primary" style={{ marginLeft: 30 }} />
          </a>

        </Toolbar>
      </AppBar>
    </>
  )
}

export default Header



