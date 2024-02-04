import './index.css';
import Navbar from './Navbar';
import Home from './Home';

function App() {
  const title = 'Welcome to my Micro Star Trek Blog';
  const likes = 50;

  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Home />
        {/* <h1>{ title }</h1> */}
        {/* <p>Liked { likes } times</p> */}
        {/* <p>BG Color: #282c34</p> */}
      </div>
    </div>
  );
}

export default App;
