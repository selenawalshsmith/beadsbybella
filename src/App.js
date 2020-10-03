import React from 'react';
import './styles/App.css';
import Home from "./components/Home";
import Cart from "./components/Cart";
import Collections from "./components/Collections";
import Nav from "./components/layout/Nav";
import{BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav/>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/collections" exact component={Collections}/>
          <Route path="/cart" exact component={Cart}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
