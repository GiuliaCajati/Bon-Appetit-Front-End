import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import ListSubheader from '@material-ui/core/ListSubheader';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

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

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  // drop down
  formControl: {
    margin: theme.spacing(1),
    minWidth: 300,
  },
}));

export default function AddMeal(props) {
  const classes = useStyles();

  //Setting State for create new meal
  const [state , setState] = useState({
    name: "",
    photo_url: "",
    instructions: "",
    ingredients: "",
    origin_id: null
    // originsArray: props.originsArray
  })

  //Input fealds (setting state)
  const handleChange = (event) => {
    let {id , value} = event.target   
    if(value === 0 ){
      value = event.target.getAttribute("data-value")
    }
    setState(prevState => ({
        ...prevState,
        [id] : value
    })) 
    //event.target.getAttribute("value....")
  }

  const addMeal = (newMealObject) => {
    //from New Meal Form... still need to make
    fetch("http://localhost:3000/meals/", {
      method: 'POST',
      headers: { "Content-Type": "application/json"},
      body: JSON.stringify(newMealObject)
    })
    .then(res => res.json())
    .then(newMeal => {props.routerProps.history.push(`/meals/${newMeal.id}`)}
    )
    debugger
  }


  //Sending info to App 
  const handleSubmitClick = (event) => {
    event.preventDefault();
    let newMeal = {
      name: state.name,
      photo_url: state.photo_url,
      likes: 0,
      instructions: state.instructions,
      ingredients: state.ingredients,
      origin_id: state.origin_id,
      user_id: props.user
    }
    debugger
    addMeal(newMeal)
  }


 

  return (
    <div id="check-for-array">{props.originsArray == []?null:

    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
            Add Meal
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="name"
                name="name"
                variant="outlined"
                required
                fullWidth
                id="name"
                label="Name"
                autoFocus
                onChange={handleChange} 
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="photo_url"
                label="Photo URL"
                name="photo_url"
                autoComplete="photo_url"
                onChange={handleChange} 
              />
            </Grid>
            <Grid item xs={12}>
            <TextField
                id="instructions"
                label="Instructions"
                name="instructions"
                rows={12}
                variant="outlined"
                fullWidth
                multiline
                onChange={handleChange} 
                />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="ingredients"
                label="Ingredients"
                name="ingredients"
                rows={8}
                variant="outlined"
                fullWidth
                multiline
                onChange={handleChange} 
              />
            </Grid>
          </Grid>

          {/* Drop down  */}
          <FormControl className={classes.formControl}>
          <InputLabel htmlFor="grouped-select">Meal Origin</InputLabel>
              <Select defaultValue="" id="grouped-select">
                {props.originsArray.map(
                (origin)=> 
                
                  <MenuItem 
                  value={origin.id}
                  id="origin_id" 
                  onClick={handleChange}>{origin.name}
                  </MenuItem>)}
              </Select>
          </FormControl>
    
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={handleSubmitClick}
          >
            Add Meal
          </Button>
         
        </form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
    }</div>
  );
}