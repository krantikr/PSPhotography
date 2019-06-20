import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

export default function SimpleAppBar() {
  return (
    <div className="navBarCantener">
      <AppBar position="fixed" color="#ffffff">
        <Toolbar>
          <div className="brandLogo">
            <img src="./images/ps_logo.jpg" alt="PS Photography" />
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}