import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import PersonPinIcon from '@material-ui/icons/PersonPin';
import HomeIcon from '@material-ui/icons/Home';

const useStyles = makeStyles({
  //material UI style 
  root: {
    flexGrow: 10,
  },
  });
  const CenteredTabs = ({updateInput}) =>{
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Paper className={classes.root}>
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        centered
      >
        <Tab icon={<PersonPinIcon />}/>
        <Tab icon={<HomeIcon />}/>
        <Tab icon={<HomeIcon />}/>
       
      </Tabs>
    </Paper>
  );
}

export default CenteredTabs
 





