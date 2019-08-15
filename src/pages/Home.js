import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import './../style/home.scss';
import Typography from '@material-ui/core/Typography';
import ShowCase from './../components/ShowCase';
import SocialBar from './../components/SocialBar';
import Footer from './../components/Footer';

class Home extends React.Component{
  render(){
    return(
      <Typography component="div" className="homeCotainer">
        
        <CssBaseline />
        <Typography component="div" className="banner">
          <h2>Taking an image freezing a moment</h2>
        </Typography>

        <Typography component="div" className="gallery">
          <Typography component="h3">
            gallery
            <span/>
          </Typography>
          <Typography component="p">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet, fugit nam obcaecati fuga itaque deserunt officia, error reiciendis ab quod?
          </Typography>
          <Typography component="div" className="galleryContaner">
            <ShowCase/>
          </Typography>
        </Typography>

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
                I am Prashant, Patna based freelance photographer, born and brought up in Patna also known as Patliputra. I am a professional photographer with 4 years of experience. I love travelling and i always love to explore new places and meet new people. For me photography is about making beautiful memories and creating some good images..
                <a href="/"> Read more</a>
              </Typography>
            </Typography>
          </Typography>
        </Typography>

        <SocialBar/>

        <Footer/>

      </Typography>
    )
  }
};

export default Home