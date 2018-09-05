import React, { Component } from 'react';
import './css/App.css';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import home from './pages/home.jsx';
import validation from './pages/validation.jsx';
import design from './pages/design.jsx';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <ul class="nav bg-light">
            <li class="nav-item">
              <Link class="nav-link active" to="/">Home</Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link active" to="/validation">Validation</Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link active" to="/design">Design Task</Link>
            </li>
          </ul>
        <Route exact path="/" component={home}/>
        <Route exact path="/validation" component={validation}/>
        <Route exact path="/design" component={design}/>
      </div>
      </Router>
    );
  }
}

export default App;
