import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import Recepie from "../components/recepie.js"
import ThumbUp from '@material-ui/icons/ThumbUp';

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
      <GridList cellHeight={300} className={classes.gridList}>
        <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
          <ListSubheader component="div">December</ListSubheader>
        </GridListTile>
        {props.mealArray.map((meal) => (
          <GridListTile key={meal.id}>
            <img src={meal.photo_url} alt={meal.name} />
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