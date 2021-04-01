import './styles/styles.scss'
import Hero from './Hero'
import About from './Components/AboutMe/About'
import Layout from './Components/Layout';
import Projects from './Components/Projects/Projects'
import ContactMe from './Components/Contact/ContactMe'




import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
      primary: {
          main: '#fff',
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
  
  return (
    <ThemeProvider theme={theme}>

      <div className="App">
        <Layout>
          <Hero></Hero>
          <About></About>
          <Projects />
          <ContactMe />
        </Layout>
      </div>


    </ThemeProvider>
  );
}

export default App;





