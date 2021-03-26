import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';

let theme = createMuiTheme({
    palette: {
        primary: {
            main: '#764abc',
            secondary: '#1fe628'
        },
        secondary: {
            main: 'rgb(124, 120, 120)',
        }
    },
    background: {
        deafult: '#fff'
    },
})

theme = responsiveFontSizes(theme);

export default theme