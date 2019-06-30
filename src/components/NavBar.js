import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

export default function SimpleAppBar() {
  return (
    <div className="navBarCantener">
      <AppBar position="fixed" color="default">
        <Toolbar>
          <div className="brandLogo">
            <img src="./images/baba_photography.png" alt="Baba Photography" />
            <h1>Baba Photography</h1>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}