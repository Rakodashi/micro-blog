import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './index.css';
import './lib/i18n';
import Navbar from './Navbar';
import Home from './Home';
import Create from './Create';
import LogDetails from './LogDetails';
import NotFound from './NotFound';
import { useTranslation } from 'react-i18next';
import Register from './Register';
import Login from './Login';

function App() {

  const { t, i18n: {changeLanguage, language} } = useTranslation()

  return (
    <Router>
    <div className="App">
      <Navbar />
      <div className="content">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/create">
            <Create />
          </Route>
          <Route path="/logs/:id">
            <LogDetails />
          </Route>
          <Route path="/login">
          <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </div>
    </div>
    </Router>
  );
}

export default App;