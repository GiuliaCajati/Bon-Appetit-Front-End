import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classnames from 'classnames';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import red from '@material-ui/core/colors/red';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const mealURL="http://localhost:3000/meals/"

const styles = theme => ({
  card: {
    maxWidth: 400,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  actions: {
    display: 'flex',
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
});

class RecipeReviewCard extends React.Component {

  state = { 
    expanded: false,
    mealArray: {},
    origin: {}
  };

  componentDidMount() {
    fetch(`${mealURL}/${this.props.pathId}`)
    .then(data => data.json())
    .then(meal => {
      this.setState({
        mealArray: meal,
        origin: meal.origin
      })
    })
    
  }

  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };

  render() {
    let currentMeal = this.state.mealArray
    const { classes } = this.props;
    //this.componentDidMount()
    console.log (this.state)
    console.log(currentMeal)
    console.log(!this.state.currentMeal?1:2)
    return (
    <div id="check-for-array">
        <div id="meal-card-div">
        <Card className={classes.card}>
            <CardHeader
            avatar={
                <Avatar aria-label="Recipe" className={classes.avatar}>
                YUM
                </Avatar>
            }
            action={
                <IconButton>
                <MoreVertIcon />
                </IconButton>
            }
            title= {currentMeal.name}
            //subheader= {this.state.origin.name}
            />
            <CardMedia
            className={classes.media}
            image={currentMeal.photo_url}
            title="Paella dish"
            />
            <CardContent>
            <Typography component="p">
            
            {currentMeal.instructions}
            </Typography>
            </CardContent>
            <CardActions className={classes.actions} disableActionSpacing>
            <IconButton aria-label="Add to favorites">
                <FavoriteIcon />
            </IconButton>
            <IconButton
                className={classnames(classes.expand, {
                [classes.expandOpen]: this.state.expanded,
                })}
                onClick={this.handleExpandClick}
                aria-expanded={this.state.expanded}
                aria-label="Show more"
            >
                <ExpandMoreIcon />
            </IconButton>
            </CardActions>
            <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
            <CardContent>
                <Typography paragraph>Method:</Typography>
                <Typography paragraph>
                Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10
                minutes.
                </Typography>
                <Typography paragraph>
                Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high
                heat. Add chicken, shrimp and chorizo, and cook, stirring occasionally until lightly
                browned, 6 to 8 minutes. Transfer shrimp to a large plate and set aside, leaving
                chicken and chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes, onion,
                salt and pepper, and cook, stirring often until thickened and fragrant, about 10
                minutes. Add saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
                </Typography>
                <Typography paragraph>
                Add rice and stir very gently to distribute. Top with artichokes and peppers, and cook
                without stirring, until most of the liquid is absorbed, 15 to 18 minutes. Reduce heat
                to medium-low, add reserved shrimp and mussels, tucking them down into the rice, and
                cook again without stirring, until mussels have opened and rice is just tender, 5 to 7
                minutes more. (Discard any mussels that don’t open.)
                </Typography>
                <Typography>
                Set aside off of the heat to let rest for 10 minutes, and then serve.
                </Typography>
            </CardContent>
            </Collapse>
        </Card>
        </div>
      </div>
    );
  }
}

RecipeReviewCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(RecipeReviewCard);

// import React, { Component } from 'react';

// class MealShowPage extends Component {
//     render(props) {
//         return (
//             <div>
//                 {!this.props.meal?null:
//                 <div>
//                 {this.props.meal.name}
//                 <img src={this.props.meal.photo_url}/>
//                 </div>} 
                
//             </div>
//         );
//     }
// }

// export default MealShowPage;