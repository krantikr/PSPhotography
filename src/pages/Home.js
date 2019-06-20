import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
// import Link from '@material-ui/core/Link';
import Showcase from './../components/ShowCase';
import './../style/home.scss'

class Home extends React.Component{
  render(){
    return(
      <div className="homeCotainer">
        <CssBaseline />
        <Paper>
          <div  className="topSlider">
            <img
                src="https://source.unsplash.com/user/erondu"
                alt="background"
              />
            <div className="captionContainer">
              <Typography variant="h4" color="inherit" >
                Title of a blog post
              </Typography>
              <Typography  color="inherit" >
                Multiple lines of text that form the lede, informing new readers quickly and
                efficiently about what&apos;s most interesting in this post&apos;s contents.
              </Typography>
            </div>
          </div>
        </Paper>
        <Showcase/>
      </div>
    )
  }
};

export default Home