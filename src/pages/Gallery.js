import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import ShowCase from './../components/ShowCase';
import SocialBar from './../components/SocialBar';
import Footer from './../components/Footer';

class Gallery extends React.Component{
  render(){
    return(
      <div className="homeCotainer">
        <CssBaseline />
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
        <SocialBar/>
        <Footer/>
      </div>
    )
  }
};

export default Gallery