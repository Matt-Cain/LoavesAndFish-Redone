import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
   
   
    lontainer: {
        
        display: 'flex',
        justifyContent: 'center',
        whiteSpace: 'nowrap',
        margin: '0, 20px',
        marginTop: '20px',
    },
    Container: {
        marginTop: '10%',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center'
    },
    LogoText: {
        width: '80%',
        maxWidth: '400px',
        height: 'auto'
    },
    Logo: {
        marginLeft: '20px',
        display: 'inline',
        height: '50px'
    },
    Text: {
        maxWidth: '700px',
        width: '100%',
        height: 'auto'

    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
    googleButton: {
        marginTop: '50px',
        marginBottom: theme.spacing(2),
        
            background: 'black',
            borderRadius: 3,
            border: 0,
            color: 'white',
            height: 48,
            padding: '0 30px',
            boxShadow: '0 3px 5px 2px white',
    },
    Paper: {
        padding: '20px',
        margin: '20px',
        borderRadius: '20px'

    },
}));