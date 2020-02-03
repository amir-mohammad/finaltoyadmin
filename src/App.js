import React from 'react';
import {BrowserRouter as Router,Route,Switch,Redirect} from 'react-router-dom'
import './App.css';
import 'antd/dist/antd.css'
import Admin from './pages/Admin';
import Login from './pages/Login';
import AuthState from './context/auth/AuthState';

function App() {
  return (
    <div className="App">
      <AuthState>
          <Router basename={process.env.PUBLIC_URL}>
              <Switch>
                 <Route path="/admin" component={Admin}/>
                 <Route path="/login" component={Login}/>
                 <Redirect from="/" to="/admin" />
              </Switch>
          </Router>
          </AuthState>
    </div>
  );
}

export default App;
