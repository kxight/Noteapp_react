import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {Router,Route,Link,browserHistory} from 'react-router';
import About from './components/about';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App}/>
    <Route path="/about" component={About}/>
    <Route path="/home" component={Home}/>
  </Router>,
  /*<React.StrictMode>
    <App />
  </React.StrictMode>,*/
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
