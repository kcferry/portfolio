import React from 'react'
import { makeStyles } from '@material-ui/core'
import Header from './Header/Header'


const useStyles = makeStyles({
    page: {
        width: '100%',
    }
})

export default function Layout ({ children }) {
    const classes = useStyles()

    return (
        <div>

            <Header />

            <div className={classes.page}>
                {children}
            </div>
            
        </div>
    )
}


