import './styles/styles.scss'
import React, { useEffect } from 'react'
import ReactGA from 'react-ga'; //Google Analitics
import Hero from './Hero'
import About from './Components/AboutMe/About'
import Layout from './Components/Layout';
import Projects from './Components/Projects/Projects'
import ContactMe from './Components/Contact/ContactMe'



import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';



const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#666',
    },
    secondary: {
      main: 'rgb(124, 120, 120)',
    },
    text: {
      secondary: '#fff'
    }
  },
  background: {
    deafult: '#fff'
  },
  typography: {
    fontFamily: [
      'Saira Semi Condensed'
    ],
  }
})


function App() {

  useEffect(() => {
    ReactGA.initialize('UA-197092511-1')

    ReactGA.pageview(window.location.pathname + window.location.search)
  }, [])



  return (

    <>
      <ThemeProvider theme={theme}>

        <Layout>
          <Hero />
          <About />
          <Projects />
          <ContactMe />
        </Layout>

      </ThemeProvider>

    </>
  );
}

export default App;





