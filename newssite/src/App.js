import React from 'react';
import './App.css';
import NavBar from './navbar';
import { BrowserRouter, Route, Link ,Switch, Redirect} from "react-router-dom";
import Home from './home'
import Article from './article'
function App() {
  return (
    <BrowserRouter>
    <NavBar></NavBar>
    <Switch>
    <Route exact path= '/' render={() => <Redirect to ='/home'/>} />
    <Route path= '/articles/:id' component = {Article} />
    <Route  path= '/home' render={() => <Home/>} />
    </Switch> 
    </BrowserRouter>
  );
}

export default App;
