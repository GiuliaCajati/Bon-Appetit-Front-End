import { Link } from 'react-router-dom' 
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import PersonPinIcon from '@material-ui/icons/PersonPin'
import ExitToApp from '@material-ui/icons/ExitToApp'
import RestaurantMenu from '@material-ui/icons/RestaurantMenu'
import PublicIcon from '@material-ui/icons/Public';


const useStyles = makeStyles({
  root: {
    flexGrow: 10,
  },
  });
  
  const Headers = ({updateInput}) =>{
  const classes = useStyles();
  return (
    <Paper className={classes.root}>
     
      <Tabs
      inkBarStyle={{background: 'blue'}}
      centered
      >
        
        <Link to='/meals' >
      <h2 id="header-logo">Bon Appétit</h2>
      </Link>
   
      

       <Link to="/meals"><Tab icon={<RestaurantMenu/>}/></Link>
       <Link to="/profile"><Tab icon={<PersonPinIcon />}/></Link>
       <Link to="/map"><Tab icon={<PublicIcon />}/></Link>
       <Link to="/login"><Tab icon={<ExitToApp />}/></Link>

       
      </Tabs>
    </Paper>
  );
}

export default Headers
 





