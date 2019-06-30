import React from 'react';
import PropTypes from 'prop-types';
// import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Showcase from './../components/ShowCase';

function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};


export default function TabBar(props) {
  const [value, setValue] = React.useState(0);

  function handleChange(event, newValue) {
    setValue(newValue);
  }

  return (
    <div>
      <AppBar id="tabNavBar" position="static" className={(props.isNavFixed) ? 'tabNabfixed' : null} color="default" >
        <Tabs value={value} onChange={handleChange}>
          <Tab label="Home" />
          <Tab label="Gallery" />
          <Tab label="About" />
          <Tab label="Contact" />
        </Tabs>
      </AppBar>
      <div className={props.isNavFixed?'mt-50':null}>
        {value === 0 && <TabContainer><Showcase/></TabContainer>}
        {value === 1 && <TabContainer><Showcase/></TabContainer>}
        {value === 2 && <TabContainer>About</TabContainer>}
        {value === 3 && <TabContainer>Contact</TabContainer>}
      </div>
    </div>
  );
}
