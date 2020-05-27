import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import ItemsList from './components/ItemsList/ItemsList';
import Cart from './components/Cart/Cart';
import ItemDetails from './components/ItemDetails/ItemDetails';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Modal from './components/Modal/Modal';


const App = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <Modal />
        <Switch>
          <Route exact path='/' component={ItemsList} />
          <Route path='/details' component={ItemDetails} />         
          <Route path='/cart' component={Cart} />
        </Switch>  
      </div>
    </Router>
  );
}

export default App;