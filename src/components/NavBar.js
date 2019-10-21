import React from 'react';
import {Link, withRouter} from 'react-router-dom'
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import './../style/common.scss';

class NavBar extends React.Component{
  state = {
    activeUri: 'home'
  }
  
  componentDidMount(){
    let prevState = this.state;
    switch(window.location.pathname){
      case '/gallery':
          prevState.activeUri = 'gallery';
        break;
      case '/about':
          prevState.activeUri = 'about';
        break;
      case '/contact':
          prevState.activeUri = 'contact';
        break;
      default:
          prevState.activeUri = 'home';
    }
    this.setState(prevState)
  }

  componentWillReceiveProps(){
    let prevState = this.state;
    switch(window.location.pathname){
      case '/gallery':
          prevState.activeUri = 'gallery';
        break;
      case '/about':
          prevState.activeUri = 'about';
        break;
      case '/contact':
          prevState.activeUri = 'contact';
        break;
      default:
          prevState.activeUri = 'home';
    }
    this.setState(prevState)
  }

  isActive = (uri) => {
    this.props.history.push(uri);
    let prevState = this.state;
    switch(window.location.pathname){
      case '/gallery':
          prevState.activeUri = 'gallery';
        break;
      case '/about':
          prevState.activeUri = 'about';
        break;
      case '/contact':
          prevState.activeUri = 'contact';
        break;
      default:
          prevState.activeUri = 'home';
    }
    this.setState(prevState,()=>{
      window.scrollTo(0, 0);
    })
  }
  render(){
    return (
      <div className={this.state.activeUri==='home'?'navTransparent':'navBlack'}>
        <AppBar position="static">
          <Typography component="div" className="navBar">
            <IconButton edge="Logo" color="inherit" aria-label="Logo">
              <img className="logo" src="/images/baba_photography.png" alt="baba photography"/>
            </IconButton>
            <i className="fa fa-bars openBtn" onClick={this.props.openMobNav}></i>
            <Typography component="div" className={this.props.mobNavActive?"linkContainer":"linkContainer hide"}>
              <span className="closeBtn" onClick={this.props.openMobNav}>X</span>
              <Link className={this.state.activeUri==='home'?"active":null} onClick={()=>this.isActive('/')}>Home <span/> </Link>
              <Link className={this.state.activeUri==='gallery'?"active":null} onClick={()=>this.isActive('/gallery')}>Gallery <span/> </Link>
              <Link className={this.state.activeUri==='about'?"active":null} onClick={()=>this.isActive('/about')}>About <span/> </Link>
              <Link className={this.state.activeUri==='contact'?"active":null} onClick={()=>this.isActive('/contact')}>Contact Us<span/> </Link>
            </Typography>
          </Typography>
        </AppBar>
      </div>
    );
  }
}
export default withRouter(NavBar);