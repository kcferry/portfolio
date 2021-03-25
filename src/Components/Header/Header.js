import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, IconButton } from '@material-ui/core';
import Button from '@material-ui/core/Button';

import logo from '../../assets/images/kf_logo.png'
import Twitter from '@material-ui/icons/Twitter';
import LinkedIn from '@material-ui/icons/LinkedIn';
import GitHub from '@material-ui/icons/GitHub';
import MenuIcon from '@material-ui/icons/Menu'

const headerTabs = [
  {
    label: 'Home',
    href: '#'
  },
  {
    label: 'About',
    href: '#'
  },
  {
    label: 'Portfolio',
    href: '#'
  },
  {
    label: 'Contact',
    href: '#'
  },
]



const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: '#000000'
  },
  logo: {
    maxHeight: 50,
    paddingRight: 25,
  },
  icon: {
    marginRight: 25,
  },
  title: {
    flexGrow: 1,
  },
  menuButton: {
    fontFamily: "Open Sans, sans-serif",
    fontWeight: 700,
    size: "18px",
    marginLeft: "38px",
  },
  sociolTabs: {
    color: '#fff',
    marginLeft: "38px",
  },
  Toolbar: {
    display: "flex",
    justifyContent: "space-between",
  },
}));

const Header = () => {

  const [state, setState] = useState({
    mobileView: false
  })

  const { mobileView } = state

  useEffect(() => {
    const setResponsiveness = () => {
      return window.innerWidth < 900
        ? setState((prevState) => ({ ...prevState, mobileView: true }))
        : setState((prevState) => ({ ...prevState, mobileView: false }))
    };
    setResponsiveness();
    window.addEventListener('resize', () => setResponsiveness())
  }, [])

  const classes = useStyles();

  const displayDesktop = () => {
    return <Toolbar className={classes.Toolbar}>
      <div>
        {kfLogo}
        {getHeaderTabs()}
      </div>
      {socialLinks}
    </Toolbar>
  }

  const displayMobile = () => {
    return (
      <Toolbar>
      <div>{kfLogo}</div>
        <IconButton
          {...{
            edge: "start",
            color: "inherit",
            "aria-label": "menu",
            "aria-haspopup": "true",
          }}
        >
          <MenuIcon />
        </IconButton>
        
      </Toolbar>
    )
  }

  const kfLogo = (
    <Button>
      <img src={logo} alt="Kyle Ferry logo" className={classes.logo} />
    </Button>
  )

  const getHeaderTabs = () => {
    return headerTabs.map(({ label, href }) => {
      return (
        <Button {...{
          key: label,
          color: 'inherit',
          to: href,
          className: classes.menuButton
        }}>
          {label}
        </Button>
      )
    })
  }

  const socialLinks = (
    <div>
      <IconButton href='https://github.com/kcferry'>
        <GitHub className='icon' color="primary" />
      </IconButton>

      <IconButton href='https://www.linkedin.com/in/kyle-ferry-2bb160112'>
        <LinkedIn className='icon' color="primary" />
      </IconButton>

      <IconButton href='https://twitter.com/Kvferry'>
        <Twitter className='icon' color="primary" />
      </IconButton>
    </div>
  )




  return (
    <>
      <AppBar className={classes.appBar} position="static" >
        {mobileView ? displayMobile() : displayDesktop()}
      </AppBar>
    </>
  )
}

export default Header



