import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import SocialBar from './../components/SocialBar';
import Footer from './../components/Footer';

class About extends React.Component{
  render(){
    return(
      <div className="homeCotainer">
        <CssBaseline />
        <Typography component="div" className='aboutContainer'>
          <Typography component="div">
            <Typography component="h3">
              About Baba Photography
              <span/>
            </Typography>
          </Typography>
          <Typography component="div" className='aboutInnerContainer' >
            <Typography component="div" className="imgSection">
              <img src="./images/baba_photography_logo.png" alt="baba_photography_logo" />
            </Typography>
            <Typography component="div" className="description">
              <Typography component="p">
                I am Prashant, Patna based freelance photographer, born and brought up in Patna also known as Patliputra. I am a professional photographer with 4 years of experience. I love travelling and i always love to explore new places and meet new people. For me photography is about making beautiful memories and creating some good images. <br/>
                I am Prashant, Patna based freelance photographer, born and brought up in Patna also known as Patliputra. I am a professional photographer with 4 years of experience. I love travelling and i always love to explore new places and meet new people. For me photography is about making beautiful memories and creating some good images
              </Typography>
            </Typography>
          </Typography>
        </Typography>
        <SocialBar/>
        <Footer/>
      </div>
    )
  }
};

export default About