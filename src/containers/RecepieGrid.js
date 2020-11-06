import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import Recepie from "../components/Recepie.js"

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
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
}));

//can we still use toggle?? 

export default function TitlebarGridList(props) {
  const classes = useStyles();
  

  return (
    <div className={classes.root}>
      <GridList cellHeight={300} className={classes.gridList}>
        <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
          <ListSubheader component="div"> Feast Your Eyes </ListSubheader>
        </GridListTile>
        {props.mealArray.map((meal) => (
          
          <GridListTile key={meal.id}>
            <img src={meal.photo_url} alt={meal.name} />
            <GridListTileBar
              title={meal.instructions}
              other={meal.name}
              subtitle={<span>by: {meal.origin}</span>}
              actionIcon={
                <IconButton aria-label={`info about ${meal.name}`} 
                className={classes.icon} 
                onClick={props.toggleMeal}>
                  <InfoIcon />
                </IconButton>}/>



          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}

 