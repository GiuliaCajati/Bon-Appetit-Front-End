import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import ThumbUp from '@material-ui/icons/ThumbUp';
import { Link } from 'react-router-dom' 
import Filter from './Filter.js'
import DeleteSweepIcon from '@material-ui/icons/DeleteSweep';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 1000,
    height: 1000,
  },
  margin: {
    margin: theme.spacing(3),
    color: 'rgba(255, 255, 255, 0.54)'
  },
}));

export default function TitlebarGridList(props) {
  const classes = useStyles();

  const [state , setState] = useState({
    dummyFoodarray: [...props.CurrentUserData.meals]

  })

  const updateState = (selectedMealId) =>{
    let updatedArray = state.dummyFoodarray.filter(meal => meal.id !== selectedMealId)
    setState({
      dummyFoodarray: [...updatedArray]
    })
  }
  
  
  return (
    
    <div className={classes.root}>
     <div class="user-img-container">
      <img class="user-img" src={props.CurrentUserData.photo_url}/> 
      </div>
      <div>
      <h1 id="user-name">{props.CurrentUserData.name} </h1>
      <p id="user-top-meals">Top Meals: {state.dummyFoodarray.map(meal =>  meal.name)}</p>
        <Button variant="contained" color="primary" onClick={() => props.renderNewMealForm()}>
        👩‍🍳Add Meal
        
        </Button>
      </div>
    
    
      <GridList cellHeight={300} className={classes.gridList}>
        <GridListTile key="Subheader" cols={2} style={{ height: 'auto'}}>
        
        </GridListTile>
        
        {state.dummyFoodarray.map((meal) => (
            
          <GridListTile key={meal.id}>
            <img src={meal.photo_url} alt={meal.name}
            onClick={() => props.renderMealShowPage(meal.id)}/>
            
           
          
            <GridListTileBar
              title={meal.name}
              subtitle={<span>likes: {meal.likes}</span>}
              actionIcon={
                <DeleteSweepIcon
                  className={classes.margin}
                  onClick={() => {
                    props.deleteMeal(meal.id)
                    updateState(meal.id)
                  }
                  }>
                  <InfoIcon />
                </DeleteSweepIcon>
              }
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}


// import React, { Component } from 'react';

