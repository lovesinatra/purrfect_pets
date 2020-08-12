import React from 'react';
import HomePage from './pages/home-page/homepage'
import PetsPage from './pages/pets-page/pets-page'
import { Route, Switch } from 'react-router-dom'
import './App.css';
import FormPage from './pages/form-page/form-page'

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={HomePage}></Route>
        <Route path='/pets' component={PetsPage}></Route>
        <Route path='/pets/info' component={FormPage}></Route>
      </Switch>
    </div>
  );
}

export default App;
