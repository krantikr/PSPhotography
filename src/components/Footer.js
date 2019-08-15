import React from 'react';
import Typography from '@material-ui/core/Typography';
import {Link} from 'react-router-dom'
import {} from '@material-ui/core/'
import './../style/common.scss';

const Footer = ()=>{
  return (
    <Typography component="div" className="footerContainer">
      <Typography component="div" className="footerInnerContainer">
        <Typography component="div">
          <Typography component="h4">
            Contact Us
            <span/>
          </Typography>
          <Typography component="h5">
            #106, 2nd Floor, 18th main, HAL 2nd stage, Indiranagar, Bangalore-560008
          </Typography>
          <Typography component="div">
            <a to='/' target="_blank"><i className="fa fa-phone" aria-hidden="true"></i> +91 8228966028</a>
          </Typography>
          <Typography component="div">
            <a to='/' target="_blank"><i className="fa fa-whatsapp" aria-hidden="true"></i> +91 8228966028</a>
          </Typography>
        </Typography>
        <Typography component="div">
          <Typography component="h4">
            Navigations
            <span/>
          </Typography>
          <Typography component="div">
            <Link to='/'>Home</Link>
          </Typography>
          <Typography component="div">
            <Link to='/'>Gallery</Link>
          </Typography>
          <Typography component="div">
            <Link to='/'>About</Link>
          </Typography>
          <Typography component="div">
            <Link to='/'>Contact Us</Link>
          </Typography>
        </Typography>
        <Typography component="div">
          <Typography component="h4">
            Instagram
            <span/>
          </Typography>
          <Typography component="span" className="instagramImg">
            <a href="https://www.instagram.com/p/Bz569phDxrO/" rel="noopener noreferrer" target="_blank">
              <img src="./images/insta/babaphotography_insta_1.png" alt="instagram babaphotography123"/>
            </a>
            <a href="https://www.instagram.com/p/B0SJUVEj21O/" rel="noopener noreferrer" target="_blank">
              <img src="./images/insta/babaphotography_insta_2.png" alt="instagram babaphotography123"/>
            </a>
            <a className="mt-5" href="https://www.instagram.com/p/B0Vbq7uDMtx/" rel="noopener noreferrer" target="_blank">
              <img src="./images/insta/babaphotography_insta_3.png" alt="instagram babaphotography123"/>
            </a>
            <a  className="mt-5" href="https://www.instagram.com/p/Bz52AbsD_0R/" rel="noopener noreferrer" target="_blank">
              <img src="./images/insta/babaphotography_insta_4.png" alt="instagram babaphotography123"/>
            </a>
          </Typography>
        </Typography>
      </Typography>
      <Typography component="div" className="copyRight">
      © 2019 Baba Photography 
      </Typography>
    </Typography>
  );
}
export default Footer;