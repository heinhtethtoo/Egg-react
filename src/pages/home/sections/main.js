import React from 'react'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from "@material-ui/core/styles";
import Typography from '@material-ui/core/Typography'


const useStyles = makeStyles({
    root: {
        color: '#555',
        fontFamily: 'hk_groteskregular',
        fontWeight: '300',
        fontSize: '20px',
    },

    grid: {
        maxWidth: '1140px',
        
    },


    section: {
        paddingRight: '80px',
        paddingLeft: '80px'

    },

    smallIcon: {
        width: '30px',
        marginTop: '50px',
        marginBottom: '-20px'
    },

    headingText: {
        fontSize: '18px',
        lineHeight: '1.5em'
    },

    img1: {
        width: '100%',
        height: 'auto',
        marginTop: '20px'
    },

    img2: {
        marginTop: '50px',
        marginLeft: '80px',
        width: '90%',
        height: '310px'
    }
})

const Main = (props) => {
    const classes = useStyles(props)
    return(
        <div className={classes.root}>
            <div className={classes.section}>
            <Grid container className={classes.grid} >
                <Grid item xs={6}> 
                    <Grid container alignItems="flex-start" justify="flex-start" direction="column">
                        <i><img src={require('../../../assets/images/Egg1.png')} class={classes.smallIcon} alt="Egg"/></i>
                        <h2>We are Egg Specialist</h2>
                            <Typography align="left" className={classes.headingText}> Tolerably earnestly middleton extremely distrusts she boy now not. Add and offered prepare how cordial two promise. Greatly who affixed suppose. Gave read use way make spot how nor.
                            </Typography>
                            <img src={require('../../../assets/images/Bitmap.png')} class={classes.img1}/>
                    </Grid>
                </Grid>
                <Grid item xs={6} >
                 <img src={require('../../../assets/images/Receita.png')} class={classes.img2}/>
                </Grid>
            </Grid>
            </div>
        </div>
            
    )
}

export default Main