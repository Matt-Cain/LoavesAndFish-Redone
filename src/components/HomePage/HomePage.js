import React from "react";
import { Container, Grow, Grid, Paper, AppBar, TextField, Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import useStyles from './styles';
import Logo from '../../images/Logo.png'
import Text from '../../images/text.png'
import LogoText from '../../images/memoriesText.png'


function HomePage() {
    const classes = useStyles();
    const history = useHistory();

    return (
        <Paper className={classes.Paper}>
            <div>
                <div>
                    <div className={classes.lontainer}>
                        <img className={classes.LogoText} src={LogoText} alt="icon" />
                        <img className={classes.Logo} src={Logo} alt="icon" />
                    </div>
                </div>
                <Container className={classes.Container}>
                    <img className={classes.Text} src={Text} alt="icon" />
               <div>
                    <Button className={classes.googleButton} color="default" fullWidth onClick={() => history.push('/home')}  variant="contained">View Needs</Button>
                    </div>
                </Container>
            </div>
        </Paper>
    );

}

export default HomePage;