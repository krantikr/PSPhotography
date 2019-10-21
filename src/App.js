import React from 'react';
import NavBar from './components/NavBar'
import Route from './Router'
import './style/common.scss'
let bgCount=1;
class App extends React.Component {
  state = {
    mobNavActive: window.screen.width>767?true:false,
    bgCount:1
  }
  openMobNav = ()=>{
    this.setState({mobNavActive: !this.state.mobNavActive})
  }
  componentDidMount(){
    setInterval(()=>{ 
      if(bgCount === 3){
        bgCount = 1;
      }else{
        bgCount += 1;
      }
      console.log(bgCount)
      this.setState({bgCount})
     }, 5000);
  }
  render(){
    return (
      <div className={`App bg-${this.state.bgCount}`}>
        <NavBar openMobNav={this.openMobNav} mobNavActive={this.state.mobNavActive}/>
        <Route/>
      </div>
    );
  }
}

export default App;
