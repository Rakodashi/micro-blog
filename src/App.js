import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './index.css';
import './lib/i18n';
import Navbar from './Navbar';
import Home from './Home';
import Create from './Create';
import LogDetails from './LogDetails';
import NotFound from './NotFound';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';

function App() {

  const { t, i18n: {changeLanguage, language} } = useTranslation()

  // const [currentLang, setCurrentLang] = useState(language)

  // const handleChangeLanguage = () => {
  //   const newLanguage = currentLang === 'en' ? 'pt' : 'en'
  //   changeLanguage(newLanguage)
  //   setCurrentLang(newLanguage)
  // }



  // <div className="card">
    //   <div className="box">
    //   <div className="imgBox">
    //       <img src={image} alt="" />
    //     </div>
    //   </div>
    //   <div className="box"></div>
    //   <div className="circle">
    //     <div className="imgBox">
    //       <img src={image} alt="" />
    //     </div>
    //   </div>
    // </div>

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
          {/* <Route path="/login">
            <Login />
          </Route> */}
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