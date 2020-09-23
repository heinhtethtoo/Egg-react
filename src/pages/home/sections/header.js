import React from 'react'
import AppBar from "@material-ui/core/AppBar"
import Grid from "@material-ui/core/Grid"
import { makeStyles } from "@material-ui/core/styles"
import Toolbar from "@material-ui/core/Toolbar"
import { Tabs } from "@material-ui/core"
import Tab from "@material-ui/core/Tab"
import SearchIcon from '@material-ui/icons/Search'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'
import logo from '../../../assets/images/Logo.png'

const useStyles = makeStyles({
  root: {
    flexGrow: 1
  },
  logo: {
    width: 100,
   
  }
});

const Header = (props) => {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);
    const style = {
        minWidth: 80
     }

    const iconStyle = {
      minWidth: 100
    }
     
    return (
        <nav className={classes.root}>
        <AppBar position="static" color="default">
          <Toolbar>
            <Grid container>
            <Grid item xs={6} spacing={2}>
              <Grid xs={5} item>
                <img
                  className={classes.logo}
                  src={logo}
                />
              </Grid>
              </Grid>

              <Grid item xs={6}  >

                <Grid container>
                  <Tabs
                    onChange={(e, v) => setValue(v)}
                    value={value}
                    aria-label="Navigation Tabs"
                  >
                    <Tab style={style} label={"Menu"} />
                    <Tab style={style} label={"Recipe"} />
                    <Tab style={style} label={"About"} />
                    <Tab style={style} label={"Contact"} /> 
                    <Tab style={iconStyle} icon={ <SearchIcon />} />
                     <Tab style={iconStyle} icon={ <ShoppingCartIcon />} />
                  </Tabs>
                
                </Grid>
               
              </Grid>
              <Grid item xs={3} />
            </Grid>
          </Toolbar>
        </AppBar>
      </nav>
    )
}

export default Header;