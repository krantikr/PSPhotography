import React from 'react';
import NavBar from './components/NavBar'
import Home from './pages/Home'
import './style/common.scss'

class App extends React.Component {
  state = {
    isNavFixed:false
  }
  componentDidMount(){
    let navbar = document.getElementById("tabNavBar");
    let sticky = navbar.offsetTop - 81;
    window.onscroll = ()=>{
      let navFixed = this.state.isNavFixed
      console.log(window.pageYOffset)
      console.log(sticky)
      if (window.pageYOffset >= sticky) {
        navFixed = true;
      } else {
        navFixed = false;
      }
      this.setState({isNavFixed:navFixed})
    }
  }

  render(){
    return (
      <div className="App">
        <NavBar/>
        <Home  isNavFixed={this.state.isNavFixed} />
      </div>
    );
  }
}

export default App;
