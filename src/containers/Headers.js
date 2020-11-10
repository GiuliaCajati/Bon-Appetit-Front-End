import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import PersonPinIcon from '@material-ui/icons/PersonPin'
import HomeIcon from '@material-ui/icons/Home'
import ExitToApp from '@material-ui/icons/ExitToApp'
import RestaurantMenu from '@material-ui/icons/RestaurantMenu'
import { Link } from 'react-router-dom' 

const useStyles = makeStyles({
  //material UI style 
  root: {
    flexGrow: 10,
  },
  });
  
  const Headers = ({updateInput}) =>{
  const classes = useStyles();
  return (
    <Paper className={classes.root}>
     
      <Tabs
        centered
      >
        
      <h2 id="header-logo">Bon Appétit</h2>
      
      

       <Link to="/meals"><Tab icon={<RestaurantMenu/>}/></Link>
       <Link to="/profile"><Tab icon={<PersonPinIcon />}/></Link>
       <Link to="/login"><Tab icon={<ExitToApp />}/></Link>
       
      </Tabs>
    </Paper>
  );
}

export default Headers
 





