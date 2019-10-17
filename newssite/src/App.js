import React from 'react';
import './App.css';
import NavBar from './navbar';
import { BrowserRouter, Route, Link ,Switch} from "react-router-dom";
import Home from './home'
function App() {
  return (
    <BrowserRouter>
    <NavBar></NavBar>
    <Switch>
    <Route exact path= '/' render={() => <Home/>} />
    </Switch>
    </BrowserRouter>
  );
}

export default App;
