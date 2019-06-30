import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import TabBar from './../components/TabBar';
import './../style/home.scss'

class Home extends React.Component{
  render(){
    return(
      <div className="homeCotainer">
        <CssBaseline />
        <Paper>
          <div  className="topSlider">
            <img
                src="./banner/1.jpeg"
                alt="background"
              />
            <div className="captionContainer">
              <Typography variant="h4" color="inherit" >
                Puri Sea Beach
              </Typography>
              <Typography  color="inherit" >
                Baba Photography | A great moment on Puri Beach. Puri Beach is a beach in the city of Puri in the state of Odisha, India. 
              </Typography>
            </div>
          </div>
        </Paper>
        <TabBar isNavFixed={this.props.isNavFixed}/>
      </div>
    )
  }
};

export default Home