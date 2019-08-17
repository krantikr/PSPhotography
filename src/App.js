import React from 'react';
import NavBar from './components/NavBar'
import Route from './Router'
import './style/common.scss'

class App extends React.Component {
  state = {
    mobNavActive: window.screen.width>767?true:false,
  }
  openMobNav = ()=>{
    this.setState({mobNavActive: !this.state.mobNavActive})
  }
  render(){
    return (
      <div className="App">
        <NavBar openMobNav={this.openMobNav} mobNavActive={this.state.mobNavActive}/>
        <Route/>
      </div>
    );
  }
}

export default App;
