import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import ThumbUp from '@material-ui/icons/ThumbUp';
import { Link } from 'react-router-dom' 
import Filter from '../components/Filter.js'

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

  return (
    
    <div className={classes.root}>
     <div class="user-img-container">
      <img class="user-img" src={props.CurrentUserData.photo_url}/> 
      </div>
      <div>
      <h1 id="user-name">{props.CurrentUserData.name} </h1>
      <p id="user-top-meals">Top Meals: {props.CurrentUserData.meals.map(meal => <ol><li>{meal.name}</li></ol>)}</p>
      
      </div>
    
      <GridList cellHeight={300} className={classes.gridList}>
        <GridListTile key="Subheader" cols={2} style={{ height: 'auto'}}>
        
        </GridListTile>
        
        {props.CurrentUserData.meals.map((meal) => (
            
          <GridListTile key={meal.id}>
            <img src={meal.photo_url} alt={meal.name}
            onClick={() => props.renderMealShowPage(meal.id)}/>
            
           
          
            <GridListTileBar
              title={meal.name}
              subtitle={<span>likes: {meal.likes}</span>}
              actionIcon={
                <ThumbUp 
                  className={classes.margin}
                  onClick={() => props.addLike(meal.id)}>
                  <InfoIcon />
                </ThumbUp>
              }
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}


// import React, { Component } from 'react';

// class Profile extends Component {
//     render() {
//         //show all meals 
//         //add meal 
//         return (
//             <div>
//                 {console.log(this.props.currentUser.meals)}
//             <h2>Welcome {this.props.currentUser}</h2> 
//             <div>{this.props.CurrentUserData.meals.map(meal => meal.name)}</div>
    
//             </div>
            
//         );
//     }
// }

// export default Profile;