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
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';


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

  const [value, setValue] = React.useState('names');

  const handleChange = (event) => {
    setValue(event.target.value);
  };


  return (

    <div className={classes.root}>
      <div>
      <FormControl component="fieldset">
      <FormLabel component="legend">Gender</FormLabel>
      <RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChange}>
      <FormControlLabel value="names" control={<Radio />} label="Names" />
      <FormControlLabel value="likes" control={<Radio />} label="Likes" />
      <FormControlLabel value="author" control={<Radio />} label="Author" />
      </RadioGroup>
      </FormControl>
      </div>
      
      <GridList cellHeight={300} className={classes.gridList}>
        <GridListTile key="Subheader" cols={2} style={{ height: 'auto'}}>
        <Filter filterMealArray={props.filterMealArray}/> 
        </GridListTile>
        {props.mealArray.map((meal) => (
          <GridListTile key={meal.id}>
            <img src={meal.photo_url} alt={meal.name}
            onClick={() => props.renderMealShowPage(meal.id)}/>
            
            {/* <Link to={`/meals/${meal.id}`}></Link> */}
          
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