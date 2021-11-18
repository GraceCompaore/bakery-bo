import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Error from './core/components/Error';
import { AuthProvider } from './core/context/AuthContext';
import Home from './pages/home/home';
import Login from './pages/login/Login';

function App() {
  return (
    <Router>
      <AuthProvider>
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route path="/home">
            <Home />
          </Route>

          <Route>
            <Error />
          </Route>
        </Switch>
      </AuthProvider>
    </Router>
  );
}

export default App;
