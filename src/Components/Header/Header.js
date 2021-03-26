import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, IconButton, Drawer, MenuItem, Link } from '@material-ui/core';
import Button from '@material-ui/core/Button';

import logo from '../../assets/images/kf_logo.png'
import logoBlk from '../../assets/images/kf_logo_Blk.png'
import Twitter from '@material-ui/icons/Twitter';
import LinkedIn from '@material-ui/icons/LinkedIn';
import GitHub from '@material-ui/icons/GitHub';
import MenuIcon from '@material-ui/icons/Menu'

// Data //

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

// Styles // 

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
  drawerContainer: {
    padding: "20px 30px",
  },
  logoDrawer: {
    display: 'flex',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'center',
  },
  drawerItem: {
    margin: '80px',
  }
}));







const Header = () => {

  const [state, setState] = useState({
    mobileView: false,
    drawerOpen: false
  })

  const { mobileView, drawerOpen } = state

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

  const kfLogo = (
    <Button>
      <img src={logo} alt="Kyle Ferry logo" className={classes.logo} />
    </Button>
  )

  const kfLogoBlk = (
    <div className={classes.logoDrawer}>
      <Button>
        <img src={logoBlk} alt="Kyle Ferry logo" className={classes.logo} />
      </Button>
    </div>
  )

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
    const handleDrawerOpen = () =>
      setState((prevState) => ({ ...prevState, drawerOpen: true }))
    const handleDrawerClose = () =>
      setState((prevState) => ({ ...prevState, drawerOpen: false }));

    return (
      <Toolbar>
        <div>{kfLogo}</div>
        <IconButton
          {...{
            edge: "start",
            color: "inherit",
            "aria-label": "menu",
            "aria-haspopup": "true",
            onClick: handleDrawerOpen,
          }}
        >
          <MenuIcon />
        </IconButton>



        <Drawer
          {...{
            anchor: "left",
            open: drawerOpen,
            onClose: handleDrawerClose,
            className: classes.drawer
          }}
        >
          <div>{kfLogoBlk}</div>
          <div className={classes.drawerContainer}>{getDrawerChoices()}</div>
          <div className={classes.drawerContainer}>{socialLinks}</div>
        </Drawer>


      </Toolbar>
    )
  }



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

  const getDrawerChoices = () => {
    return headerTabs.map(({ label, href }) => {
      return (
        <Link
          {...{
            to: href,
            color: "inherit",
            style: { textDecoration: "none" },
            key: label,
            className: classes.drawerItem
          }}
        >
          <MenuItem>{label}</MenuItem>
        </Link>
      );
    });
  };

  const socialLinks = (
    <div>
      <IconButton href='https://github.com/kcferry'>
        <GitHub className='icon' color="secondary" />
      </IconButton>

      <IconButton href='https://www.linkedin.com/in/kyle-ferry-2bb160112'>
        <LinkedIn className='icon' color="secondary" />
      </IconButton>

      <IconButton href='https://twitter.com/Kvferry'>
        <Twitter className='icon' color="secondary" />
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



