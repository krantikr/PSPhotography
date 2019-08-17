import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import SocialBar from './../components/SocialBar';
import Footer from './../components/Footer';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

class Contact extends React.Component{
  render(){
    return(
      <div className="homeCotainer">
        <CssBaseline />
        <Typography component="div" className='contactContainer'>
          <Typography component="div">
            <Typography component="h3">
              Contact Us
              <span/>
            </Typography>
          </Typography>
          <Typography component="div" className='formContainer' >
            <form noValidate autoComplete="off" action="https://script.google.com/macros/s/AKfycbwVfdHa3gInVVCNQjPlq-OXEafWaI1zBfWjgEVRhXZGSxHEXkc/exec">
              <Typography component="div" className='inputContainer' >
                <TextField
                  required
                  className="half-width"
                  label="First Name"
                  type="text"
                  name="firstName"
                  margin="normal"
                  variant="outlined"
                />
                <TextField
                  required
                  className="half-width"
                  label="Last Name"
                  type="text"
                  name="lastName"
                  margin="normal"
                  variant="outlined"
                />
              </Typography>
              <Typography component="div" className='inputContainer' >
                <TextField
                  required
                  className="half-width"
                  label="Email"
                  type="email"
                  name="email"
                  margin="normal"
                  variant="outlined"
                />
                <TextField
                  required
                  className="half-width"
                  label="Phone No."
                  type="number"
                  name="phone"
                  margin="normal"
                  variant="outlined"
                />
              </Typography>
              <TextField
                className="full-width"
                label="Message"
                fullWidth
                margin="normal"
                variant="outlined"
              />
              <Typography component="div" className='submitButton' >
                <button>Submit</button>
              </Typography>
            </form>
          </Typography>
        </Typography>
        <SocialBar/>
        <Footer/>
      </div>
    )
  }
};

export default Contact