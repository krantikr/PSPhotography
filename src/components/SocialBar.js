import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import './../style/common.scss';

const SocialBar = ()=>{
  return (
    <div className='socialNav'>
      <AppBar position="static">
        <a href='https://www.facebook.com/babaphotography123' rel="noopener noreferrer" target="_blank"><i className="fa fa-facebook" aria-hidden="true"></i></a>
        <a href='/' rel="noopener noreferrer" target="_blank"><i className="fa fa-pinterest-p" aria-hidden="true"></i></a>
        <a href='/' rel="noopener noreferrer" target="_blank"><i className="fa fa-tumblr" aria-hidden="true"></i></a>
        <a href='https://www.instagram.com/babaphotography123/' rel="noopener noreferrer" target="_blank"><i className="fa fa-instagram" aria-hidden="true"></i></a>
      </AppBar>
    </div>
  );
}
export default SocialBar;