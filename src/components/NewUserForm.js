import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { Icon } from '@iconify/react';
import chefHat from '@iconify-icons/mdi/chef-hat';


//Material UI: Copyright text 
function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}
//Material UI: Form Style 
const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage: 'url(https://source.unsplash.com/user/brookelark)',
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(3),
    backgroundColor: theme.palette.primary.main,
    width: '10%',
    height:'10%'
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));


export default function SignInSide(props) {
  //Material UI: Form Style 
  const classes = useStyles();
  const usersURL="https://aqueous-depths-38272.herokuapp.com/users"
  //const usersURL="http://localhost:3000/users"
  //might have an issue with users being the create route 
  //Setting State for create new user 
  const [state , setState] = useState({
    name: "",
    password: "",
    photo_url: ""
  })

  //User text field (setting state)
  const handleChange = (event) => {
    const {id , value} = event.target   
    setState(prevState => ({
        ...prevState,
        [id] : value
    }))
  }

  //Sending post request to create new user 
  const handleSubmitClick = (event) => {
    event.preventDefault();

    let user = {
      name: state.name,
      password: state.password,
      photo_url: state.photo_url
    }

    fetch(usersURL, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
                'Accept': 'application/json'
        },
        body: JSON.stringify(user)
    })
    .then(response => response .json())
    .then(data => {
      debugger
      props.setCurrentUser(data)
      props.routerProps.history.push('/profile')
    })
  }

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar} >
          <Icon icon={chefHat} width="90%"/>
          </Avatar>
          <h1 id="form-title" >
          Bon Appétit!
          </h1>
          <form className={classes.form} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="name"
              label="User Name"
              name="name"
              autoComplete="name"
              autoFocus
              value={state.name}
              onChange={handleChange}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={state.password}
              onChange={handleChange} 
            />
            {/* conditionally render button if sign-up is selected??? */}
             <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="photo_url"
              label="Photo URL"
              type="photo url"
              id="photo_url"
              autoComplete="current-password"
              value={state.photo_url}
              onChange={handleChange} 
            />
           {/* conditionally render button if sign-up  is selected??? */}
            <Button

              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              className="btn btn-primary"
              onClick={handleSubmitClick}
            >
              Sign Up 
            </Button>
           
          </form>
        </div>
        <div id="login-text">
          <h3>
          Tap into your inner chef and get inspired by the art of cooking! 
          </h3>
        </div>
      </Grid>
    </Grid>
  );
}