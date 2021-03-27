import './App.css';
import Hero from './Hero'
import About from './Components/AboutMe/About'
import Layout from './Components/Layout';

import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
      primary: {
          main: '#764abc',
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
})


function App() {
  return (
    <ThemeProvider theme={theme}>

      <div className="App">

        <Layout>

          <Hero></Hero>

          <About></About>

        </Layout>

      </div>


    </ThemeProvider>
  );
}

export default App;





