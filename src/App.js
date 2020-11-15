import React from 'react'; 
import './index.css'; 
import About from './Components/About';
import Experience from './Components/Experience'; 
import Nav from './Components/Menu'; 
import Home from './Components/Home'; 

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App (){
  return (
    <Router>
      <div >
        <Nav/>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/home" component={Home}/>
          <Route path="/about" component={About}/>
          <Route path="/experience" component={Experience}/>
          
        </Switch>
      </div>
    </Router>
  )
}


export default App; 